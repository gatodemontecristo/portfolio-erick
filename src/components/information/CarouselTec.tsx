import { nanoid } from 'nanoid';
import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { CarouselTecItem, type CarouselTecItemProps } from './CarouselTecItem';

interface CarouselTecProps {
  items: CarouselTecItemProps[];
  reverse?: boolean;
}

export const CarouselTec = ({ items, reverse = false }: CarouselTecProps) => {
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20, mass: 0.5 });

  // Duplicar items para crear loop infinito
  const duplicatedItems = [...items, ...items];

  // Calcular el ancho de un conjunto de items después del renderizado
  useEffect(() => {
    if (itemsContainerRef.current && items.length > 0) {
      // Esperar a que se renderice completamente
      const timer = setTimeout(() => {
        if (itemsContainerRef.current) {
          const firstChild = itemsContainerRef.current.firstElementChild;
          if (firstChild) {
            const itemWidth = firstChild.getBoundingClientRect().width;
            const gap = 16; // gap-4 en px
            const calculatedWidth = (itemWidth + gap) * items.length;
            setSingleSetWidth(calculatedWidth);
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDelta) < 1) return; // Ignorar cambios mínimos

      const direction = scrollDelta > 0 ? 'down' : 'up';

      // Calcular el desplazamiento con una función más suave
      const displacement = scrollDelta * 0.5; // Movimiento suave

      if (direction === 'down') {
        if (!reverse) {
          // reverse: scroll hacia abajo = items se mueven hacia la izquierda
          x.set(x.get() - Math.abs(displacement));
        } else {
          // normal: scroll hacia abajo = items se mueven hacia la derecha
          x.set(x.get() + Math.abs(displacement));
        }
      } else {
        if (!reverse) {
          // reverse: scroll hacia arriba = items se mueven hacia la derecha
          x.set(x.get() + Math.abs(displacement));
        } else {
          // normal: scroll hacia arriba = items se mueven hacia la izquierda
          x.set(x.get() - Math.abs(displacement));
        }
      }

      lastScrollY.current = currentScrollY;

      // Limpiar timeout anterior
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Gestionar loop infinito
      const manageInfiniteLoop = () => {
        if (singleSetWidth === 0) return;

        const currentX = x.get();

        if (currentX >= singleSetWidth) {
          // Si nos pasamos hacia la derecha, resetear al inicio
          x.set(currentX - singleSetWidth);
        } else if (currentX <= -singleSetWidth) {
          // Si nos pasamos hacia la izquierda, resetear desde el final
          x.set(currentX + singleSetWidth);
        }
      };

      // Comprobar el loop inmediatamente
      manageInfiniteLoop();
    };

    // Configurar throttling para mejor performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [x, singleSetWidth, reverse]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden border-2 border-magazine-white bg-magazine-dark text-magazine-gray rounded-lg md:p-4 p-2 mb-4`}
    >
      <motion.div
        ref={itemsContainerRef}
        style={{ x: springX }}
        className={`flex flex-row md:gap-4 gap-2 ${reverse ? 'flex-row-reverse' : ''} will-change-transform`}
      >
        {duplicatedItems.map((item, index) => (
          <CarouselTecItem key={`${nanoid()}-${index}`} {...item} />
        ))}
      </motion.div>
    </div>
  );
};
