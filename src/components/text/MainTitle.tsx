interface MainTitleProps {
  text: string;
}
export const MainTitle = ({ text }: MainTitleProps) => {
  return (
    <div className="w-[45%]">
      <p className="text-magazine-gray text-8xl font-extrabold text-start">
        {text}
      </p>
    </div>
  );
};
