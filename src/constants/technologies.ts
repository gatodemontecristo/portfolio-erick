import type { CarouselTecItemProps } from '../components';

import { FaReact } from 'react-icons/fa';
import { GiBearFace, GiIsland } from 'react-icons/gi';
import { SiJavascript, SiTypescript, SiRedux } from 'react-icons/si';

export const TECHNOLOGIES: CarouselTecItemProps[] = [
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
];
