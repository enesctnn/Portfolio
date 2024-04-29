import { useTranslation } from 'react-i18next';
import { Card } from '../ui/card';
import { ExternalLinkArrow } from '../ui/external-link-arrow';

export function About() {
  const { t } = useTranslation(undefined, { keyPrefix: 'resume' });

  return (
    <Card
      locationName="about"
      role="article"
      className="gap-y-8 whitespace-pre-line text-sm"
    >
      <section className="space-y-2">
        <header className="lg:hidden">
          <h2 className="text-md">{t('title')}</h2>
        </header>
        <p>{t('description')}</p>
      </section>
      <a href="cv.pdf" target="_blank" className="group w-max">
        <ExternalLinkArrow title={t('view')} />
      </a>
    </Card>
  );
}
