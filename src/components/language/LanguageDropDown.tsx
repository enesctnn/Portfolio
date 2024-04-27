import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { AvailableLanguages } from './AvailableLanguages';
import { SelectedLanguage } from './SelectedLanguage';

export const LanguageDropDown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const langRef = useRef<HTMLDivElement | null>(null);
    useOnClickOutside(langRef, () => setIsOpen(false));

    return (
        <div ref={langRef} className="text-md relative w-max font-medium">
            <SelectedLanguage
                onClick={() => setIsOpen(prevState => !prevState)}
            />
            {isOpen && <AvailableLanguages onClick={() => setIsOpen(false)} />}
        </div>
    );
};
