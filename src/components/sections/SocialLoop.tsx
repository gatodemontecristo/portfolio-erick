import DecryptedText from '../gsap/DecryptedText';
import { LogoLoop } from '../gsap';
import type { TechLogo } from '../../constants';

interface SocialLoopProps {
  isDesktop: boolean;
  title: string;
  logos: TechLogo[];
}
export const SocialLoop = ({ isDesktop, logos, title }: SocialLoopProps) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-3/4 w-full p-4 gap-4">
      <DecryptedText
        text={title}
        speed={60}
        animateOn="both"
        revealDirection="start"
        sequential
        useOriginalCharsOnly={false}
        className="md:text-2xl text-xl text-magazine-gray"
      />
      <div className="relative w-full">
        <LogoLoop
          logos={logos}
          speed={80}
          direction="left"
          logoHeight={isDesktop ? 60 : 40}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut={false}
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};
