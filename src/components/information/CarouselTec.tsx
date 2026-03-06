import { nanoid } from 'nanoid';
import { CarouselTecItem, type CarouselTecItemProps } from './CarouselTecItem';

interface CarouselTecProps {
  items: CarouselTecItemProps[];
  reverse?: boolean;
}
export const CarouselTec = ({ items, reverse = false }: CarouselTecProps) => {
  return (
    <div
      className={`flex flex-row overflow-hidden border-2 gap-4 border-magazine-gray bg-magazine-dark text-magazine-gray rounded-lg p-4 mb-4 ${reverse ? 'flex-row-reverse' : ''}`}
    >
      {items.map(item => (
        <CarouselTecItem key={nanoid()} {...item} />
      ))}
    </div>
  );
};
