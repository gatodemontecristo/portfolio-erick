import type { TechnologyExperienceItemProps } from '../../constants';
import { LevelBar } from './LevelBar';

export const TecStatistic = (props: TechnologyExperienceItemProps) => {
  return (
    <>
      <div className="w-2/6 flex flex-row items-center justify-center border-r-2 border-b-2  gap-4 font-semibold text-xl border-magazine-gray bg-magazine-dark p-4">
        <p>{props.name}</p>
        <props.icon></props.icon>
      </div>
      <LevelBar level={props.level}></LevelBar>
    </>
  );
};
