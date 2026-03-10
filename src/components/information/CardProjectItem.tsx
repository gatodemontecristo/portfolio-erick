import type { IconType } from 'react-icons/lib';

interface CardProjectItemProps {
  technology: IconType;
}
export const CardProjectItem = ({
  technology: TechnologyIcon,
}: CardProjectItemProps) => {
  if (!TechnologyIcon) return null;

  return (
    <div className="flex flex-col items-center justify-center bg-magazine-gray text-magazine-dark p-2">
      <TechnologyIcon className="size-6" />
    </div>
  );
};
