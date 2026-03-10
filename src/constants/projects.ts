import type { TechnologyExperience } from './technologies';

export interface PersonalProjectProps {
  title: string;
  description: string;
  technologies: TechnologyExperience[];
  github: string;
  demo?: string;
  image: string;
  type: 'web' | 'mobile' | 'fullstack';
}

export const PERSONAL_PROJECTS: PersonalProjectProps[] = [
  {
    title: 'Gunbound',
    description:
      'A faithful recreation of the classic online game Gunbound, built using React and TypeScript. This project showcases my ability to implement complex game mechanics, real-time interactions, and a responsive user interface.',
    technologies: ['React', 'Typescript', 'CSS'],
    github: 'https://github.com/gatodemontecristo/Gunbound',
    demo: 'https://gatodemontecristo.github.io/Gunbound/paginas/gunbound.html',
    image: './projects/gunbound.png',
    type: 'web',
  },
  {
    title: 'Minecraft',
    description:
      'Website built using only HTML, CSS, and JavaScript (HTML5, CSS3, JavaScript) Web Architecture and Environments Cibertec - Minecraft Project with effects',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/gatodemontecristo/minecraft',
    demo: 'https://gatodemontecristo.github.io/minecraft/paginas/inicio.html',
    image: './projects/minecraft.png',
    type: 'web',
  },
  {
    title: 'carUiDesign',
    description:
      'Website built using only HTML and CSS (HTML5, CSS3) Architecture and Environments Cibertec - Car Rental Project with effects',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/gatodemontecristo/carUiDesign',
    demo: 'https://gatodemontecristo.github.io/carUiDesign/paginas/inicio.html',
    image: './projects/car.png',
    type: 'web',
  },
];
