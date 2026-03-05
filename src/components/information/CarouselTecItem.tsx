import type { IconType } from 'react-icons';

export interface CarouselTecItemProps {
  name: string;
  icon: IconType;
}

export const CarouselTecItem = ({ name, icon: Icon }: CarouselTecItemProps) => {
  return (
    <div className="flex flex-row items-center justify-center gap-5">
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
      <Icon className="size-6" />
    </div>
  );
};
