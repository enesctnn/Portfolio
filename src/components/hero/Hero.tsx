import { Trans, useTranslation } from 'react-i18next';
import pp from '../../assets/pp.jpg';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';

function Hero() {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero' });

  return (
    <MaxWidthWrapper>
      <article className="flex flex-col items-center justify-center text-center text-white">
        <div className="h-52 w-52">
          <img
            src={pp}
            alt="Profile Picture"
            className="rounded-full object-cover"
          />
        </div>
        <section className="space-y-6">
          <Trans i18nKey="hero.title">
            <h1 className="text-4xl font-bold !leading-tight md:text-7xl">
              <span className="bg-gradient-to-r from-lemon_chiffon via-uranian_blue to-mauve bg-clip-text text-transparent">
                Hi! My name is Muhammet Enes Çetin,
              </span>
              frontend web developer in Türkiye.
            </h1>
          </Trans>
          <p className="text-md leading-relaxed md:text-2xl">{t('resume')}</p>
        </section>
      </article>
    </MaxWidthWrapper>
  );
}

export default Hero;
