import { useTranslation } from 'react-i18next';
import pp from '../../assets/pp.jpg';
import { Navbar } from './nav/Navbar';
import { Social } from './Social';

function Hero() {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero' });

  return (
    <header className=" mx-auto flex-col items-center justify-center font-bold text-white lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:flex-col lg:items-start lg:!justify-between lg:py-24">
      <div className="lg:w-1/2">
        <div className="flex flex-col items-center justify-start gap-4 lg:flex-row">
          <div className="w-max shrink-0">
            <img
              src={pp}
              alt="user picture"
              className="h-52 w-52 rounded-full object-cover object-center"
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
        </div>
        <Navbar />
      </div>
      <Social />
    </header>
  );
}

export default Hero;
