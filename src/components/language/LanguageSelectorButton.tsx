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
                className="w-full rounded-md bg-slate-300 py-1 uppercase disabled:bg-slate-400"
                onClick={onClick.bind(null, lng)}
                disabled={lng.includes(selectedLanguage)}
            >
                {lng}
            </button>
        </li>
    ));
