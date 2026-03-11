import type { IconType } from 'react-icons';

export interface CarouselTecItemProps {
  name: string;
  icon: IconType;
}

export const CarouselTecItem = ({ name, icon: Icon }: CarouselTecItemProps) => {
  return (
    <div className="flex flex-row items-center justify-center md:gap-5 gap-2">
      <p className="whitespace-nowrap overflow-hidden text-ellipsis md:font-md font-sm">
        {name}
      </p>
      <Icon className="md:size-6 size-4" />
    </div>
  );
};
