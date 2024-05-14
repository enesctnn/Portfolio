import { useTranslation } from 'react-i18next';
import { Card } from '../ui/card';
import { ExternalLinkArrow } from '../ui/external-link-arrow';

export default function About() {
  const {
    i18n: { language },
    t,
  } = useTranslation(undefined, { keyPrefix: 'resume' });

  return (
    <Card
      locationName="about"
      role="article"
      className="whitespace-pre-line"
      title={t('title')}
    >
      <p className="mb-10 text-lg">{t('description')}</p>
      <a
        href={language.includes('tr') ? 'CV_tr.pdf' : 'CV_en.pdf'}
        target="_blank"
        className="group w-max"
      >
        <ExternalLinkArrow title={t('view')} />
      </a>
    </Card>
  );
}
