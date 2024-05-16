import { LanguageDropDown } from '../language/LanguageDropDown';

const TopMenu = () => (
  <div className="right-2 z-50 h-14 p-4 lg:fixed lg:top-0 lg:h-max lg:w-max">
    <LanguageDropDown />
  </div>
);

export default TopMenu;
