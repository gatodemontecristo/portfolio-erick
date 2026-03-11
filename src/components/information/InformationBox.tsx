import DecryptedText from '../gsap/DecryptedText';
import { LiveClockPeru } from './LiveClockPeru';

interface InformationBoxProps {
  label?: string;
  type: 'info' | 'clock';
  icon?: React.ReactNode;
}
export const InformationBox = ({ label, type, icon }: InformationBoxProps) => {
  return (
    <div className="w-1/4 flex flex-row items-center justify-center border-r-2 border-b-2  gap-4 font-semibold md:text-2xl text-lg border-magazine-gray text-magazine-gray bg-magazine-dark md:p-4 p-2">
      {type === 'info' ? (
        <>
          <DecryptedText
            text={label || ''}
            speed={120}
            animateOn="both"
            revealDirection="start"
            sequential
            useOriginalCharsOnly={false}
          />
          {icon}
        </>
      ) : (
        <LiveClockPeru />
      )}
    </div>
  );
};
