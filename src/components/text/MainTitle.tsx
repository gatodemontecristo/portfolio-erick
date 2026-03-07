import TextType from '../gsap/TextType';

interface MainTitleProps {
  text: string;
}
export const MainTitle = ({ text }: MainTitleProps) => {
  return (
    <div className="w-[45%]">
      <TextType
        text={[text]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="▎"
        deletingSpeed={50}
        variableSpeed={{ min: 60, max: 120 }}
        cursorBlinkDuration={0.5}
        loop={false}
        className="text-magazine-gray text-8xl font-extrabold text-start"
      />
      {/* <p className="text-magazine-gray text-8xl font-extrabold text-start">
        {text}
      </p> */}
    </div>
  );
};
