export const LanguageSelectorButton = ({
  selectedLanguage,
  onClick,
  languages,
}: {
  selectedLanguage: string;
  onClick: (lng: string) => void;
  languages: string[];
}) =>
  languages.map(lng => (
    <li key={lng} className="w-full" role="menuitem">
      <button
        type="button"
        className="w-full rounded-md bg-uranian_blue py-1 uppercase hover:bg-uranian_blue-400 active:bg-uranian_blue-300 disabled:bg-uranian_blue-300 disabled:ring-1 disabled:ring-uranian_blue-200"
        onClick={onClick.bind(null, lng)}
        disabled={lng.includes(selectedLanguage)}
      >
        {lng}
      </button>
    </li>
  ));
