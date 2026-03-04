import type { IconType } from 'react-icons';

export interface CarouselTecItemProps {
  name: string;
  icon: IconType;
}

export const CarouselTecItem = ({ name, icon: Icon }: CarouselTecItemProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <p>{name}</p>
      <Icon className="size-6" />
    </div>
  );
};
