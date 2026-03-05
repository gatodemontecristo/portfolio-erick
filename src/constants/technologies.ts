import {
  FaAws,
  FaCss,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
} from 'react-icons/fa6';
import type { CarouselTecItemProps } from '../components';

import { FaDocker, FaReact } from 'react-icons/fa';
import { GiBearFace, GiIsland, GiPlatform } from 'react-icons/gi';
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiYarn,
  SiReactrouter,
  SiBun,
  SiJest,
  SiNextdotjs,
  SiStorybook,
  SiSonarqubeforide,
  SiJira,
  SiPnpm,
} from 'react-icons/si';
import { TbCircleLetterBFilled } from 'react-icons/tb';
import { IoLogoFirebase } from 'react-icons/io5';
import type { IconType } from 'react-icons/lib';

export const TECHNOLOGIES_1: CarouselTecItemProps[] = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'React',
    icon: FaReact,
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
  },
  {
    name: 'Redux',
    icon: SiRedux,
  },
  {
    name: 'Zustand',
    icon: GiBearFace,
  },
  {
    name: 'React Query',
    icon: GiIsland,
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    name: 'Bootstrap',
    icon: TbCircleLetterBFilled,
  },
  {
    name: 'Yarn',
    icon: SiYarn,
  },
  {
    name: 'React Router',
    icon: SiReactrouter,
  },
  {
    name: 'React Hook Form',
    icon: GiPlatform,
  },
  {
    name: 'CSS',
    icon: FaCss,
  },
  {
    name: 'HTML',
    icon: FaHtml5,
  },
  {
    name: 'AWS',
    icon: FaAws,
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
  },
  {
    name: 'Jest',
    icon: SiJest,
  },
  {
    name: 'Bun',
    icon: SiBun,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'Storybook',
    icon: SiStorybook,
  },
];

export const TECHNOLOGIES_2: CarouselTecItemProps[] = [
  {
    name: 'AWS',
    icon: FaAws,
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
  },
  {
    name: 'Jest',
    icon: SiJest,
  },
  {
    name: 'Bun',
    icon: SiBun,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
  },
  {
    name: 'Storybook',
    icon: SiStorybook,
  },
  {
    name: 'Firebase',
    icon: IoLogoFirebase,
  },
  {
    name: 'SonarQube',
    icon: SiSonarqubeforide,
  },
  {
    name: 'Jira',
    icon: SiJira,
  },
  {
    name: 'Figma',
    icon: FaFigma,
  },
  {
    name: 'Docker',
    icon: FaDocker,
  },
  {
    name: 'GitHub',
    icon: FaGithub,
  },
  {
    name: 'pnpm',
    icon: SiPnpm,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'React',
    icon: FaReact,
  },
  {
    name: 'Typescript',
    icon: SiTypescript,
  },
  {
    name: 'Redux',
    icon: SiRedux,
  },
  {
    name: 'Zustand',
    icon: GiBearFace,
  },
];

interface TechnologyExperienceProps {
  pair1: TechnologyExperienceItemProps;
  pair2?: TechnologyExperienceItemProps;
}
interface TechnologyExperienceItemProps {
  name: string;
  icon: IconType;
  level: number;
}

export const TECHNOLOGIES_EXPERIENCE: TechnologyExperienceProps[] = [
  {
    pair1: {
      name: 'Typescript',
      icon: SiTypescript,
      level: 4,
    },
    pair2: {
      name: 'React',
      icon: FaReact,
      level: 3,
    },
  },
];
