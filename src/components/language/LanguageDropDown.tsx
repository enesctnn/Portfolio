import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { AvailableLanguages } from './AvailableLanguages';
import { SelectedLanguage } from './SelectedLanguage';

export default function LanguageDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(langRef, () => setIsOpen(false));

  return (
    <div
      ref={langRef}
      className="relative ml-auto w-max text-xs font-medium md:text-base lg:text-lg"
    >
      <SelectedLanguage
        isOpen={isOpen}
        onClick={() => setIsOpen(prevState => !prevState)}
      />
      {isOpen && <AvailableLanguages onClick={() => setIsOpen(false)} />}
    </div>
  );
}
