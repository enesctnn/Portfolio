import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

export const SelectedLanguage = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  const {
    i18n: { language },
  } = useTranslation();

  const animateArrow: Variants = {
    initial: { x: 0, rotate: 90 },
    animate: { x: isOpen ? -8 : 10, transition: { duration: 0.08 } },
  };

  return (
    <motion.button
      className={cn(
        'z-50 inline-flex w-max items-center justify-center rounded-md bg-muted p-1 uppercase ring-2 ring-nyanza-300 transition-all hover:bg-gray-200',
        isOpen && 'bg-white'
      )}
      initial="initial"
      animate="initial"
      whileTap="animate"
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <motion.svg
        variants={animateArrow}
        className="mr-1 h-5 w-5 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
          clipRule="evenodd"
        />
      </motion.svg>
      {language}
    </motion.button>
  );
};
