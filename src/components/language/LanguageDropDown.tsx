import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { AvailableLanguages } from './AvailableLanguages';
import { SelectedLanguage } from './SelectedLanguage';

export function LanguageDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(langRef, () => setIsOpen(false));

  return (
    <div
      ref={langRef}
      className="relative ml-auto w-max text-xs font-medium text-black"
    >
      <SelectedLanguage
        isOpen={isOpen}
        onClick={() => setIsOpen(prevState => !prevState)}
      />
      <AnimatePresence>
        {isOpen && <AvailableLanguages onClick={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
