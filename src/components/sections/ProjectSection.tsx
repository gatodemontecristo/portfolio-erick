import { type PersonalProjectProps } from '../../constants';
import { nanoid } from 'nanoid';
import { CardProject } from '../information';
import TextType from '../gsap/TextType';

interface ProjectSectionProps {
  title: string;
  projects: PersonalProjectProps[];
}
export const ProjectSection = ({ title, projects }: ProjectSectionProps) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-8 md:mt-20 mt-10 text-center">
      <TextType
        text={[title]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="▎"
        deletingSpeed={50}
        variableSpeed={{ min: 60, max: 120 }}
        cursorBlinkDuration={0.5}
        loop={false}
        className="text-magazine-gray md:text-6xl text-3xl font-extrabold text-start"
      />
      <div className="flex flex-row flex-wrap w-full mb-10 gap-4 justify-center items-stretch md:p-10 p-2">
        {projects.map(project => (
          <CardProject key={nanoid()} project={project} />
        ))}
      </div>
    </div>
  );
};
