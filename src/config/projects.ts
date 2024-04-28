import weatherAppGif from '../assets/projects/typeweather/typeweather.gif';
import weatherAppImg from '../assets/projects/typeweather/typeweather.png';

export const PROJECTS: {
  title: string;
  href: string;
  description: string;
  date?: string;
  img?: { alt: string; src: string; gif?: string };
  technologies?: string[];
}[] = [
  {
    title: 'TypeWeather',
    href: 'https://typeweather-git-main-enesctnns-projects.vercel.app/',
    description:
      "I'm excited to share the features of my latest weather app built with Vite, React, with TypeScript. This project isn't just about displaying weather information, it's designed to provide an exceptional user experience.\nIntegrated dynamic backgrounds and interactive graphs to offer users a visually engaging forecast. The app is responsive and optimized for various screen sizes, ensuring a seamless experience on any device.Using React Query for state management and React Router for navigation has made the app efficient and easy to navigate between pages. Also implemented a caching mechanism to reduce API calls and improve speed.\nWhat's unique is the ability to switch between light and dark themes for personalized readability. Users can also choose between imperial or metric units based on their preference.\nOverall, I'm proud of the attention to detail, from the integrated place autocompletion to supporting multiple languages like English and Turkish. This project represents my passion for combining technology with user-centric design.",
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'React-Router',
      'Axios',
      'Recharts',
      'i18next',
      'Framer-Motion',
    ],
    date: '',
    img: {
      src: weatherAppImg,
      alt: 'weather app scrolling gif',
      gif: weatherAppGif,
    },
  },
];
