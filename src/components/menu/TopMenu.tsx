import LanguageDropDown from '../language/LanguageDropDown';
import { MaxWidthWrapper } from '../ui/max-width-wrapper';

export const TopMenu = () => (
  <MaxWidthWrapper className="flex h-14 w-full items-center">
    <LanguageDropDown />
  </MaxWidthWrapper>
);
