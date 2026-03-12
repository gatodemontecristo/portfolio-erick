import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import {
  TechnologyIconByName,
  TypeIcon,
  type PersonalProjectProps,
} from '../../constants';
import { CardProjectItem } from './CardProjectItem';
import { nanoid } from 'nanoid';
import AnimatedContent from '../gsap/AnimatedContent';

interface CardProjectProps {
  project: PersonalProjectProps;
}

export const CardProject = ({ project }: CardProjectProps) => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
      className="flex flex-col p-4 border-2 md:w-[calc((100%-2rem)/3)] w-full border-magazine-gray bg-magazine-dark rounded-lg gap-2"
    >
      <div className="flex flex-row w-full items-center justify-between ">
        <div className=" bg-magazine-gray rounded-lg md:p-2 p-1 md:text-base text-sm md:w-min-[150px] w-min-[100px]">
          <p>{project.title}</p>
        </div>
        <div className="flex flex-row md:gap-2 gap-1 justify-end items-center">
          <p className="text-magazine-gray md:text-lg text-base capitalize">
            {project.type}
          </p>
          <div className="md:h-15 h-12 md:w-15 w-12 rounded-full">
            <img src={TypeIcon[project.type]} alt={project.type} />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-between pe-2 gap-2">
        <div className="text-magazine-gray border-2 border-magazine-gray md:text-base text-sm rounded-lg md:p-2 p-1 md:w-min-[150px] w-min-[100px]">
          <p>Stack</p>
        </div>
        <div className="flex flex-row items-center justify-end gap-1">
          {project.technologies.map(tech => (
            <CardProjectItem
              key={nanoid()}
              technology={TechnologyIconByName[tech]}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-magazine-white">{project.description}</p>
        <div className="flex flex-row w-full items-center justify-center gap-5">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <p className="underline text-magazine-white flex flex-row items-center">
              <MdKeyboardDoubleArrowRight />
              <span>Repository</span>
            </p>
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <p className="underline text-magazine-white flex flex-row items-center">
                <MdKeyboardDoubleArrowRight />
                <span>Demo</span>
              </p>
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-row rounded-lg overflow-hidden m-2">
        <img src={project.image} alt={`${project.title} project screenshot`} />
      </div>
    </AnimatedContent>
  );
};
