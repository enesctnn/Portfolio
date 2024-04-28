import { useTranslation } from 'react-i18next';
import { LanguageSelectorButton } from './LanguageSelectorButton';

const availableLanguages = ['en', 'tr'];

export const AvailableLanguages = ({ onClick }: { onClick: () => void }) => {
  const { i18n } = useTranslation();
  const languageChangeHandler = async (language: string) => {
    onClick();
    await i18n.changeLanguage(language);
  };

  return (
    <ul
      className="absolute mt-2 flex w-full flex-col items-center justify-center gap-y-1 rounded-md bg-uranian_blue-800 p-1"
      role="menu"
      aria-orientation="vertical"
    >
      <LanguageSelectorButton
        selectedLanguage={i18n.language}
        onClick={languageChangeHandler}
        languages={availableLanguages}
      />
    </ul>
  );
};
