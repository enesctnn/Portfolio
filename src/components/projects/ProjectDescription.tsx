import { useTranslation } from 'react-i18next';

export const ProjectDescription = ({
  description,
}: {
  description: { tr: string; en: string };
}) => {
  const {
    i18n: { language },
  } = useTranslation();
  const truncateWithEllipses = (text: string, max: number) =>
    text.substring(0, max) + (text.length > max ? '...' : '');
  
  return (
    <p className="whitespace-pre-line text-xs">
      {truncateWithEllipses(
        language.includes('tr') ? description.tr : description.en,
        360
      )}
    </p>
  );
};
