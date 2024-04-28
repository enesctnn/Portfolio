import { useTranslation } from 'react-i18next';
import pp from '../../assets/pp.jpg';
import { Navbar } from './nav/Navbar';
import { Social } from './Social';

function Hero() {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero' });

  return (
    <div className="xl:3/12 mx-auto h-full flex-col items-center justify-center font-bold text-white max-lg:space-y-4 lg:fixed lg:w-[350px] lg:items-start lg:py-20">
      <header className="flex flex-col items-center justify-start gap-4 lg:flex-row">
        <div className="flex h-full w-52 lg:w-28">
          <img
            src={pp}
            alt="user picture"
            className="rounded-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-lemon_chiffon via-uranian_blue to-mauve bg-clip-text text-4xl !leading-tight text-transparent">
            {t('header.name')}
          </h1>
          <p className="text-lg max-lg:text-center">
            {t('header.description')}
          </p>
        </div>
      </header>
      <Navbar />
      <Social />
    </div>
  );
}

export default Hero;
