import { nanoid } from 'nanoid';

interface LevelBarProps {
  level: number;
}

const generateLevelBars = (level: number, type: 'filled' | 'empty') => {
  return Array.from({ length: level }, () => (
    <div
      key={nanoid()}
      className={`h-8 w-4 ${type === 'filled' ? 'bg-magazine-gray' : 'border-2 border-magazine-gray bg-none"'}`}
    ></div>
  ));
};

export const LevelBar = ({ level }: LevelBarProps) => {
  return (
    <div className="w-1/6 flex flex-col items-start justify-center border-r-2 border-b-2 gap-1 font-semibold text-2xl border-magazine-gray bg-magazine-dark p-4">
      <p className="text-sm">Level</p>
      <div className="flex flex-row gap-1">
        {generateLevelBars(level, 'filled')}
        {generateLevelBars(4 - level, 'empty')}
      </div>
    </div>
  );
};
