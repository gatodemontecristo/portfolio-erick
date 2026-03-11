import TextType from '../gsap/TextType';

interface MainTitleProps {
  text: string;
}
export const MainTitle = ({ text }: MainTitleProps) => {
  return (
    <div className="md:w-[45%] w-full">
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
        className="text-magazine-gray md:text-8xl text-4xl md:font-extrabold font-semibold md:text-start text-center"
      />
      {/* <p className="text-magazine-gray text-8xl font-extrabold text-start">
        {text}
      </p> */}
    </div>
  );
};
