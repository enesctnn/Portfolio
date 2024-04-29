import weatherAppGif from '../assets/projects/typeweather/typeweather.gif';
import weatherAppImg from '../assets/projects/typeweather/typeweather.png';

export const PROJECTS: {
  title: string;
  href: string;
  description: { tr: string; en: string };
  date?: string;
  img?: { alt: string; src: string; gif?: string };
  technologies?: string[];
}[] = [
  {
    title: 'TypeWeather',
    href: 'https://typeweather-git-main-enesctnns-projects.vercel.app/',
    description: {
      en: 'TypeWeather built using Vite, React, and TypeScript, offering users an immersive experience with features like dynamic backgrounds, interactive graphs, and automatic location detection.\n Leveraged modern technologies for efficient state management, responsive design, and seamless navigation.',
      tr: 'TypeWeather Vite, React ve TypeScript kullanılarak oluşturulan, dinamik arka planlar, etkileşimli grafikler ve otomatik konum algılama gibi özelliklerle kullanıcılara sürükleyici bir deneyim sunuyor.\n Verimli hafıza yönetimi, duyarlı tasarım ve kusursuz gezinme için modern teknolojilerden yararlanıldı.',
    },
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
