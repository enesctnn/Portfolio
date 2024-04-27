import { motion } from 'framer-motion';
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

    return (
        <button
            className={cn(
                'bg-uranian_blue hover:bg-uranian_blue-400 inline-flex w-max items-center justify-center rounded-md p-1 uppercase ring-1 ring-white transition-colors',
                isOpen && 'bg-uranian_blue-300'
            )}
            type="button"
            onClick={onClick}
        >
            {language}
            <motion.svg
                animate={{
                    rotate: isOpen ? 0 : 90,
                }}
                className="-me-1 h-5 w-5"
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
        </button>
    );
};
