import { motion } from 'framer-motion';

export const LanguageSelectorButton = ({
  selectedLanguage,
  onClick,
  languages,
}: {
  selectedLanguage: string;
  onClick: (lng: string) => void;
  languages: string[];
}) =>
  languages.map((lng, index) => (
    <motion.li
      initial={{ opacity: 0, z: -20, x: 50, scale: 0.85 }}
      animate={{ opacity: 1, z: 10, x: 0, scale: 1 }}
      exit={{ opacity: 0, z: -20, x: -50, scale: 0.85 }}
      transition={{ delay: 0.08 * index, duration: 0.2 }}
      key={lng}
      role="menuitem"
    >
      <button
        type="button"
        className="w-full rounded-md bg-white px-3 py-1 uppercase opacity-60 transition-all hover:scale-110 hover:opacity-80 
        active:opacity-90 disabled:pointer-events-none disabled:opacity-100 disabled:ring-2 disabled:ring-mauve"
        onClick={onClick.bind(null, lng)}
        disabled={lng.includes(selectedLanguage)}
      >
        {lng}
      </button>
    </motion.li>
  ));
