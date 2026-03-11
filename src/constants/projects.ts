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
    title: 'One Piece',
    description:
      'One Piece movie search engine project (Redux+Nodejs) React + Nodejs developer challenge 2024 for Avatar Global',
    technologies: ['React', 'React Router', 'Bootstrap', 'Vite'],
    github: 'https://github.com/gatodemontecristo/onepiece_app_2024_Avatar',
    demo: 'https://onepiecemovies.netlify.app/',
    image: './projects/onepiece.png',
    type: 'web',
  },
  {
    title: 'Pokedex',
    description:
      'Pokedex with user management and functional login page, using React, Redux, and Firebase (100% responsive). Redux project using the PokeAPI | React | Firebase | SASS',
    technologies: ['React', 'Redux', 'Bootstrap', 'Firebase'],
    github: 'https://github.com/gatodemontecristo/pokedex-app',
    image: './projects/pokemon.png',
    type: 'web',
  },
  {
    title: 'Netflix',
    description:
      'Streaming platform project for series and movies built with TMDB. Netflix simulation project - API usage, Bootstrap, React router and security',
    technologies: ['React', 'React Router', 'Vite'],
    github: 'https://github.com/gatodemontecristo/netflix-app',
    image: './projects/netflix.png',
    type: 'web',
  },
  {
    title: 'Yu-Gi-Oh!',
    description:
      'Yu-Gi-Oh! card finder project made with YGOPRODeck. Practice reacting with Hooks',
    technologies: ['React', 'Node.js', 'Vite'],
    github: 'https://github.com/gatodemontecristo/yugiohPractica',
    demo: 'https://proyectoyugimotto.netlify.app/',
    image: './projects/yugi.png',
    type: 'web',
  },
  {
    title: 'Simple CRUD',
    description:
      'CRUD project with React for car maintenance. Simple CRUD exercise with React.',
    technologies: ['React', 'Bootstrap', 'Vite'],
    github: 'https://github.com/gatodemontecristo/CRUD_React',
    demo: 'https://crudreactautos.netlify.app',
    image: './projects/crud.png',
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
];
