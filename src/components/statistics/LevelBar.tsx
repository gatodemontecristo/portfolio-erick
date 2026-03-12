import { nanoid } from 'nanoid';

interface LevelBarProps {
  level: number;
}

interface BarItemProps {
  type: 'filled' | 'empty';
  index: number;
}

const BarItem = ({ type, index }: BarItemProps) => {
  return (
    <div
      data-bar-index={index}
      className={`md:h-8 h-6 md:w-4 w-2 ${type === 'filled' ? 'bg-magazine-gray' : 'border-2 border-magazine-gray bg-none'}`}
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    ></div>
  );
};

export const LevelBar = ({ level }: LevelBarProps) => {
  // Crear arrays de barras con índices únicos
  const filledBars = Array.from({ length: level }, (_, i) => ({
    type: 'filled' as const,
    index: i,
  }));
  const emptyBars = Array.from({ length: 4 - level }, (_, i) => ({
    type: 'empty' as const,
    index: level + i,
  }));
  const allBars = [...filledBars, ...emptyBars];

  return (
    <div className="w-1/3 flex flex-col items-start justify-center border-r-2 border-b-2 gap-1 font-semibold text-2xl border-magazine-gray bg-magazine-dark p-4">
      <p className="text-[10px]">Level</p>
      <div className="flex flex-row md:gap-1 gap-0.5">
        {allBars.map(bar => (
          <BarItem key={nanoid()} type={bar.type} index={bar.index} />
        ))}
      </div>
    </div>
  );
};
