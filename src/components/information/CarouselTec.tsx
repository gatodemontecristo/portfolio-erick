import { CarouselTecItem, type CarouselTecItemProps } from './CarouselTecItem';

interface CarouselTecProps {
  items: CarouselTecItemProps[];
}
export const CarouselTec = ({ items }: CarouselTecProps) => {
  return (
    <div className="flex flex-row overflow-hidden border-2 gap-2 border-magazine-gray bg-magazine-dark text-magazine-white rounded-lg p-4 mb-4">
      {items.map((item, index) => (
        <CarouselTecItem key={index} {...item} />
      ))}
    </div>
  );
};
