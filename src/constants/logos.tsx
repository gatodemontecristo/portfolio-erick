import type { JSX } from 'react';
import {
  FaGithub,
  FaGoodreads,
  FaLetterboxd,
  FaLinkedin,
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

export interface TechLogo {
  node: JSX.Element;
  title: string;
  href: string;
}

export const TECHLOGOS: TechLogo[] = [
  {
    node: <FaLetterboxd />,
    title: 'Letterboxd',
    href: 'https://letterboxd.com/CondeDeLosMango/',
  },
  {
    node: <FaGithub />,
    title: 'Github',
    href: 'https://github.com/gatodemontecristo',
  },
  {
    node: <FaLinkedin />,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/erick-dejo-vicente-b819601b6/',
  },
  {
    node: <SiLeetcode />,
    title: 'LeetCode',
    href: 'https://leetcode.com/u/gatodemontecristo/',
  },
  {
    node: <FaGoodreads />,
    title: 'Goodreads',
    href: 'https://www.goodreads.com/user/show/194773351-erick-dejo',
  },
];
