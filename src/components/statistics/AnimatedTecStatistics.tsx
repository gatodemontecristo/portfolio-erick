import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useInView } from '../../utils';
import type { TechnologyExperienceItemProps } from '../../constants';
import { TecStatistic } from './TecStatistic';
import { nanoid } from 'nanoid';

interface AnimatedTecStatisticsProps {
  technologies: TechnologyExperienceItemProps[];
  staggerDelay?: number;
}

export const AnimatedTecStatistics = ({
  technologies,
  staggerDelay = 0.2,
}: AnimatedTecStatisticsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, isInView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // No es tu única vez - se anima cada vez que entra
  });

  useEffect(() => {
    if (!containerRef.current || !isInView) return;

    // Obtener todos los LevelBar containers
    const levelBarContainers = containerRef.current.querySelectorAll(
      '.level-bar-container'
    );

    // Resetear estado inicial - hacer todos invisibles
    gsap.set(levelBarContainers, {
      opacity: 0,
      y: 30,
      scale: 0.9,
    });

    // Crear timeline maestro
    const masterTl = gsap.timeline();

    // Animar cada LevelBar container secuencialmente
    levelBarContainers.forEach((container, index) => {
      // Obtener las barras individuales dentro de este container
      const bars = container.querySelectorAll('[data-bar-index]');

      // Crear timeline para este container específico
      const containerTl = gsap.timeline();

      // Primero hacer visible el container
      containerTl.to(container, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Luego animar las barras individuales
      if (bars.length > 0) {
        // Resetear las barras individuales
        gsap.set(bars, {
          opacity: 0,
          y: 20,
          scale: 0.8,
        });

        // Animar cada barra del container actual
        bars.forEach((bar, barIndex) => {
          containerTl.to(
            bar,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: 'back.out(1.7)',
            },
            `-=0.2 + ${barIndex * 0.08}`
          ); // Overlap y stagger entre barras
        });
      }

      // Agregar este container timeline al master timeline
      masterTl.add(containerTl, index * staggerDelay);
    });

    return () => {
      masterTl.kill();
    };
  }, [isInView, staggerDelay]);

  // Combinar las refs
  const setRefs = (element: HTMLDivElement) => {
    containerRef.current = element;
    inViewRef.current = element;
  };

  return (
    <div ref={setRefs} className="w-full flex flex-row flex-wrap">
      {technologies.map(tech => (
        <div key={nanoid()} className="level-bar-container w-1/2 flex flex-row">
          <TecStatistic {...tech} />
        </div>
      ))}
    </div>
  );
};
