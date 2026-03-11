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
    title: 'Monorepo movie ticket',
    description:
      'A modern, full-stack movie ticket booking application built with Next.js, Node.js, and PostgreSQL. Book movie tickets, select seats, and manage your reservations with ease.',
    technologies: [
      'Next.js',
      'Docker',
      'Prisma',
      'TanStack',
      'Express',
      'PostgreSQL',
    ],
    github: 'https://github.com/gatodemontecristo/monorepo_movie_ticket',
    image: './projects/ticket.png',
    type: 'fullstack',
  },
  {
    title: 'NASA Space Challenge',
    description:
      '2025 NASA Space Apps Challenge - Team 4 Elementors. Advanced geospatial intelligence platform integrating Earth observation data with urban planning methodologies for sustainable city development',
    technologies: ['Typescript', 'Next.js', 'Zustand', 'TanStack', 'Google'],
    github: 'https://github.com/gatodemontecristo/nasa-4-elements',
    demo: 'https://nasa-4-elements.vercel.app/',
    image: './projects/nasa.png',
    type: 'fullstack',
  },
  {
    title: 'Rimac Survey',
    description:
      'Rimac Survey Short 2025. Survey based on Rimacs DPS to choose the best insurance plan',
    technologies: ['Typescript', 'Zustand', 'Storybook', 'Jest', 'SonarQube'],
    github: 'https://github.com/gatodemontecristo/survey-rimac-short',
    demo: 'https://survey-rimac-short.vercel.app/',
    image: './projects/survey.png',
    type: 'web',
  },
  {
    title: 'Portal Alfajores',
    description:
      'Alfajor portal - Payment report vs4. Payment report to manage money owed for late attendance, made with Typescript, React.js and Tailwind.css',
    technologies: [
      'Typescript',
      'Netlify',
      'Tailwind CSS',
      'Zustand',
      'Firebase',
    ],
    github: 'https://github.com/gatodemontecristo/portal-alfajores',
    demo: 'https://portal-alfajores.netlify.app/statistics',
    image: './projects/portal.png',
    type: 'web',
  },
  {
    title: 'Ghibli Dashboard',
    description:
      'Ghibli Dashboard - Film Collection. A awesome encyclopedia of Zelda Breath of the Wild game resources',
    technologies: [
      'Next.js',
      'Typescript',
      'Redux',
      'Tailwind CSS',
      'Storybook',
    ],
    github: 'https://github.com/gatodemontecristo/ghibli-dashboard',
    demo: 'https://ghibli-dashboard.vercel.app/dashboard/main',
    image: './projects/ghibli.png',
    type: 'web',
  },
  {
    title: 'Zelda BTW',
    description:
      'Zelda Breath of the Wild - Hyrule Compendium. An awesome encyclopedia of Zelda Breath of the Wild game resources',
    technologies: [
      'Typescript',
      'TanStack',
      'Storybook',
      'Tailwind CSS',
      'SonarQube',
      'Jest',
    ],
    github: 'https://github.com/gatodemontecristo/zelda-btw-app',
    demo: 'https://project-zelda-btw.netlify.app/',
    image: './projects/zelda.png',
    type: 'web',
  },
  {
    title: 'Platzi fashion',
    description:
      "Platzi Ecommerce (inspired by Zara), based on Platzi's React.js with Vite.js and Tailwind.css course",
    technologies: ['Typescript', 'Tailwind CSS', 'Zustand', 'Vite'],
    github: 'https://github.com/gatodemontecristo/platzi_fashion',
    demo: 'https://platzi-y-donde-estan-las-rubias.netlify.app/',
    image: './projects/platzi.png',
    type: 'web',
  },
  {
    title: 'Rimac Challenge',
    description:
      'Frontend Challenge 2023 - Flexible Healthcare. Frontend developer challenge for RIMAC Seguros.',
    technologies: ['React', 'React Router', 'Bootstrap', 'Vite'],
    github:
      'https://github.com/gatodemontecristo/frontend_challenge_2023_RIMAC',
    demo: 'https://frontend-challenge-rimac.netlify.app/',
    image: './projects/rimac.png',
    type: 'web',
  },
  {
    title: 'Peru Travel',
    description:
      'Peru Travel Project. Landing page about tourist destinations in Peru, based on the TailwindCSS course by PLATzi (100% responsive)',
    technologies: ['Typescript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/gatodemontecristo/travel-project',
    demo: 'https://perutravels.netlify.app/',
    image: './projects/peru.png',
    type: 'web',
  },
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
