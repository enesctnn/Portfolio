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
        <li key={lng} className="w-full">
            <button
                type="button"
                className="bg-uranian_blue disabled:bg-uranian_blue-300 hover:bg-uranian_blue-400 active:bg-uranian_blue-300 w-full rounded-md py-1 uppercase disabled:ring-1 disabled:ring-white"
                onClick={onClick.bind(null, lng)}
                disabled={lng.includes(selectedLanguage)}
            >
                {lng}
            </button>
        </li>
    ));
