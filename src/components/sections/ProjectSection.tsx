import { type PersonalProjectProps } from '../../constants';
import { useState } from 'react';
import { CardProject } from '../information';
import TextType from '../gsap/TextType';

interface ProjectSectionProps {
  title: string;
  projects: PersonalProjectProps[];
}

const PROJECTS_PER_BATCH = 6;

export const ProjectSection = ({ title, projects }: ProjectSectionProps) => {
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_BATCH);

  const displayedProjects = projects.slice(0, visibleProjects);
  const canLoadMore = visibleProjects < projects.length;

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + PROJECTS_PER_BATCH);
  };

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
      <div className="flex flex-row flex-wrap w-full gap-4 justify-center items-stretch md:p-10 p-2">
        {displayedProjects.map(project => (
          <CardProject key={project.github} project={project} />
        ))}
      </div>
      {canLoadMore && (
        <button
          type="button"
          onClick={handleLoadMore}
          className="mb-5 rounded-full border-2 cursor-pointer border-magazine-gray md:px-6 px-4 md:py-3 py-2 md:text-lg text-sm font-semibold uppercase tracking-[0.2em] hover:text-magazine-gray transition bg-magazine-gray hover:bg-transparent text-magazine-dark"
        >
          More projects
        </button>
      )}
    </div>
  );
};
