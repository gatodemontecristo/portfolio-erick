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
import { TbBrandReactNative, TbCircleLetterBFilled } from 'react-icons/tb';
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
    name: 'TanStack',
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
    name: 'React Native',
    icon: TbBrandReactNative,
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
export interface TechnologyExperienceItemProps {
  name: TechnologyExperience;
  icon: IconType;
  level: number;
}

export type TechnologyExperience =
  | (typeof TECHNOLOGIES_1)[number]['name']
  | (typeof TECHNOLOGIES_2)[number]['name'];

export const TypeIcon = {
  web: './cartoon/computer.png',
  mobile: './cartoon/smartphone.png',
  fullstack: './cartoon/web-page.png',
};
export const TechnologyIconByName: Record<TechnologyExperience, IconType> = {
  JavaScript: SiJavascript,
  React: FaReact,
  Typescript: SiTypescript,
  Redux: SiRedux,
  Zustand: GiBearFace,
  TanStack: GiIsland,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: TbCircleLetterBFilled,
  Yarn: SiYarn,
  'React Router': SiReactrouter,
  'React Hook Form': GiPlatform,
  CSS: FaCss,
  HTML: FaHtml5,
  AWS: FaAws,
  'Node.js': FaNodeJs,
  Jest: SiJest,
  Bun: SiBun,
  'Next.js': SiNextdotjs,
  Storybook: SiStorybook,
  'React Native': TbBrandReactNative,
  Firebase: IoLogoFirebase,
  SonarQube: SiSonarqubeforide,
  Jira: SiJira,
  Figma: FaFigma,
  Docker: FaDocker,
  GitHub: FaGithub,
  pnpm: SiPnpm,
};

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
  {
    pair1: {
      name: 'Zustand',
      icon: GiBearFace,
      level: 4,
    },
    pair2: {
      name: 'TanStack',
      icon: GiIsland,
      level: 3,
    },
  },
  {
    pair1: {
      name: 'AWS',
      icon: FaAws,
      level: 4,
    },
    pair2: {
      name: 'Docker',
      icon: FaDocker,
      level: 3,
    },
  },
  {
    pair1: {
      name: 'Jest',
      icon: SiJest,
      level: 4,
    },
    pair2: {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      level: 3,
    },
  },
  {
    pair1: {
      name: 'Jest',
      icon: SiJest,
      level: 4,
    },
    pair2: {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      level: 3,
    },
  },
  {
    pair1: {
      name: 'Next.js',
      icon: SiNextdotjs,
      level: 4,
    },
    pair2: {
      name: 'React Native',
      icon: TbBrandReactNative,
      level: 3,
    },
  },
];
