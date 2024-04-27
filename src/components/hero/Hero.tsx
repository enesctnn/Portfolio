import { Trans, useTranslation } from 'react-i18next';
import pp from '../../assets/pp.jpg';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';

function Hero() {
    const { t } = useTranslation(undefined, { keyPrefix: 'hero' });

    return (
        <MaxWidthWrapper>
            <article className="flex flex-col items-center justify-center text-white">
                <div className="h-52 w-52">
                    <img
                        src={pp}
                        alt="Profile Picture"
                        className="rounded-full object-cover"
                    />
                </div>
                <section>
                    <Trans i18nKey="hero.title">
                        <h1 className="text-5xl font-bold capitalize">
                            <span className="bg-gradient-to-r from-lemon_chiffon via-uranian_blue to-mauve bg-clip-text  text-transparent">
                                Hello, my name is Muhammet Enes Çetin.
                            </span>{' '}
                            I develop frontend web applications with Reactjs.
                        </h1>
                    </Trans>
                    <p>{t('resume')}</p>
                </section>
            </article>
        </MaxWidthWrapper>
    );
}

export default Hero;
