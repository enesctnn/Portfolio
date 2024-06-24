import weatherAppGif from '../assets/projects/typeweather/typeweather.gif';
import weatherAppImg from '../assets/projects/typeweather/typeweather.png';

import spotifyAppGif from '../assets/projects/spotify/spotify.gif';
import spotifyAppImg from '../assets/projects/spotify/spotify.png';

import multiSelectGif from '../assets/projects/mutliselect/multiselect.gif';
import multiSelectImg from '../assets/projects/mutliselect/multiselect.png';

import portfolioGif from '../assets/projects/portfolio/portfolio.gif';
import portfolioImg from '../assets/projects/portfolio/portfolio.png';

import websparkGif from '../assets/projects/webspark/webspark.gif';
import websparkImg from '../assets/projects/webspark/webspark.png';

export const PROJECTS: {
  title: string;
  href: string;
  description: { tr: string; en: string };
  img: { alt: string; src: string; gif?: string };
  technologies?: string[];
}[] = [
  {
    title: `Webspark Innovations`,
    href: 'https://webspark-innovations-app.vercel.app/',
    description: {
      en: 'The website for Webspark Innovations showcases services such as web design, social media marketing, SEO, and custom logo design, aimed at helping business to grow. It encourages potential clients to contact the company for professional assistance and highlights their expertise in various industries.',
      tr: 'Webspark Innovations web sitesi, işletmenin büyümesine yardımcı olmayı amaçlayan web tasarımı, sosyal medya pazarlaması, SEO ve özel logo tasarımı gibi hizmetleri sergiliyor. Potansiyel müşterilerin profesyonel yardım için şirketle iletişime geçmesini teşvik edip ve çeşitli sektörlerdeki uzmanlıklarını öne çıkarmayı amaçlıyor.',
    },
    technologies: [
      'Nextjs',
      'Javascript',
      'Typescript',
      'React',
      'Tailwind',
      'Shadcn',
      'Framer-Motion',
      'EmailJS',
      'Zod',
      'React Hook Form',
    ],
    img: {
      src: websparkImg,
      alt: 'spotify app',
      gif: websparkGif,
    },
  },
  {
    title: 'Multi Select Component',
    href: 'https://enesctnn.github.io/rick-morty-multi-select-app/',
    description: {
      en: 'This project provides a component that offers multiple selection functionality and can adapt to different design needs. Developed with React, TypeScript and Apollo Client, it retrieves data with GraphQL via the Rick and Morty API. Features include pulling data based on user queries, displaying character images, names, and how many episodes they appear in, adding/removing selected results, keyboard navigation support, loading status display, and error handling.',
      tr: 'Bu proje, çoklu seçim işlevselliği sunan ve farklı tasarım ihtiyaçlarına uyum sağlayabilen bir komponent sunar. React, TypeScript ve Apollo Client ile geliştirilmiş olup, verileri Rick and Morty API üzerinden GraphQL ile alır. Özellikleri arasında kullanıcı sorgularına göre veri çekme, karakter resimleri, isimleri ve kaç bölümde göründüklerini gösterme, seçilen sonuçları ekleme/çıkarma, klavye gezinme desteği, yükleme durumu gösterimi ve hata geri bildirimleri bulunur.',
    },
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'GraphQL',
      'ApolloClient',
      'Tailwind',
      'Framer-Motion',
    ],
    img: {
      src: multiSelectImg,
      alt: 'spotify app',
      gif: multiSelectGif,
    },
  },
  {
    title: 'Spotify Profile',
    href: 'https://enesctnn.github.io/spotify-profile-app/',
    description: {
      en: 'Spotify Profile App offers deep insights into your music habits, playlist management, and personalized recommendations. Seamlessly connect your Spotify account and explore detailed data, including top artists, tracks, playlists, and recommendations tailored to your taste. Save tracks with timestamped descriptions directly to your playlists for enhanced organization. Discover new music effortlessly. Open in Spotify to delve deeper into track, artist, user, or playlist info.',
      tr: "Spotify Profil Uygulaması, müzik alışkanlıklarınız, çalma listesi yönetiminiz ve kişiselleştirilmiş önerileriniz hakkında derinlemesine bilgiler sunar. Spotify hesabınızı sorunsuz bir şekilde bağlayın ve en iyi sanatçılar, parçalar, çalma listeleri ve zevkinize göre uyarlanmış öneriler dahil olmak üzere ayrıntılı verileri keşfedin. Gelişmiş organizasyon için parçaları zaman damgalı açıklamalarla doğrudan çalma listelerinize kaydedin. Yeni müziği zahmetsizce keşfedin. Parça, sanatçı, kullanıcı veya çalma listesi bilgilerini daha derinlemesine incelemek için Spotify'da açın.",
    },
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'React-Router',
      'Axios',
      'Recharts',
      'Tanstack-Query',
      'Tailwind',
    ],
    img: {
      src: spotifyAppImg,
      alt: 'spotify app',
      gif: spotifyAppGif,
    },
  },
  {
    title: 'Personal Website',
    href: 'https://github.com/enesctnn/Portfolio',
    description: {
      en: 'This project aims to represent digital presence effectively by creating a personal website. Developed using modern web technologies, this site provides a platform that includes my resume, projects, and contact information.',
      tr: 'Bu proje, dijital varlığı etkili bir şekilde temsil etmeyi amaçlayarak kişisel bir web sitesi oluşturmayı hedefler. Modern web teknolojileri kullanılarak geliştirilen bu site, özgeçmişim, projelerim ve iletişim bilgilerimi içeren bir platform sunuyor. ',
    },
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'i18next',
      'Framer-Motion',
      'Tailwind',
      'EmailJS',
      'React Scroll',
      'Zod',
      'React Hook Form',
    ],
    img: {
      src: portfolioImg,
      alt: 'weather app image',
      gif: portfolioGif,
    },
  },
  {
    title: 'TypeWeather',
    href: 'https://typeweather-git-main-enesctnns-projects.vercel.app/',
    description: {
      en: 'Introducing TypeWeather: an innovative weather application crafted with Vite, React, and TypeScript, delivering an immersive weather exploration journey. Engage with dynamic backgrounds, interactive graphs, and seamless automatic location detection for an enriched experience. Powered by modern technologies, TypeWeather ensures efficient state management, responsive design, and effortless navigation, enhancing user interaction and satisfaction.',
      tr: 'TypeWeather ile tanışın: Vite, React ve TypeScript ile hazırlanmış, sürükleyici bir hava durumu keşif yolculuğu sunan yenilikçi bir hava durumu uygulaması. Zenginleştirilmiş bir deneyim için dinamik arka planlar, etkileşimli grafikler ve kesintisiz otomatik konum algılamayla etkileşime geçin. Modern teknolojilerle desteklenen TypeWeather, etkili durum yönetimi, duyarlı tasarım ve zahmetsiz gezinme sağlayarak kullanıcı etkileşimini ve memnuniyetini artırır.',
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
      'Tanstack-Query',
      'Tailwind',
    ],
    img: {
      src: weatherAppImg,
      alt: 'weather app image',
      gif: weatherAppGif,
    },
  },
];
