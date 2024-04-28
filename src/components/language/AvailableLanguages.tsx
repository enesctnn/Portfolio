import { useTranslation } from 'react-i18next';
import { LanguageSelectorButton } from './LanguageSelectorButton';

const AVAILABLE_LANGUAGES = ['en', 'tr'];

export const AvailableLanguages = ({ onClick }: { onClick: () => void }) => {
  const { i18n } = useTranslation();
  const languageChangeHandler = async (language: string) => {
    onClick();
    await i18n.changeLanguage(language);
  };

  return (
    <ul
      className="absolute -left-[100px] -top-[2px] flex w-max items-center justify-center gap-x-2 rounded-md p-1"
      role="menu"
      aria-orientation="vertical"
    >
      <LanguageSelectorButton
        selectedLanguage={i18n.language}
        onClick={languageChangeHandler}
        languages={AVAILABLE_LANGUAGES}
      />
    </ul>
  );
};
