import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import {
  TechnologyIconByName,
  TypeIcon,
  type PersonalProjectProps,
} from '../../constants';
import { CardProjectItem } from './CardProjectItem';
import { nanoid } from 'nanoid';

interface CardProjectProps {
  project: PersonalProjectProps;
}

export const CardProject = ({ project }: CardProjectProps) => {
  return (
    <div className="flex flex-col p-4 border-2 w-[calc((100%-2rem)/3)] border-magazine-gray bg-magazine-dark rounded-lg gap-2">
      <div className="flex flex-row w-full items-center justify-between ">
        <div className=" bg-magazine-gray rounded-lg p-2 w-min-[150px]">
          <p>{project.title}</p>
        </div>
        <div className="flex flex-row gap-2 justify-end items-center">
          <p className="text-magazine-gray text-lg capitalize">
            {project.type}
          </p>
          <div className="h-15 w-15  rounded-full">
            <img src={TypeIcon[project.type]} alt={project.type} />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-between pe-2">
        <div className="text-magazine-gray border-2 border-magazine-gray rounded-lg p-2 w-min-[150px]">
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
    </div>
  );
};
