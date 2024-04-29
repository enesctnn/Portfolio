import { useEffect, useMemo, useState } from 'react';
import { scroller, scrollSpy } from 'react-scroll';
import { NAVITEMS } from '../../../config/navigation';
import { NavItem } from './NavItem';

const scrollerConfig = {
  smooth: true,
  offset: -90,
  duration: 500,
};

export function NavItems() {
  const navigateTo = useMemo<string>(
    () => window.location.href.split('#')[1],
    []
  );
  const [activeItem, setActiveItem] = useState<string>(navigateTo);

  const smoothScrollHandler = (elementToGo: (typeof NAVITEMS)[number]) => {
    window.history.pushState(undefined, elementToGo, `#${elementToGo}`);
    setActiveItem(elementToGo);
  };

  useEffect(() => {
    scroller.scrollTo(navigateTo, scrollerConfig);
    scrollSpy.update();
  }, [navigateTo]);

  return (
    <ul className="mt-16 w-max">
      {NAVITEMS.map(item => (
        <NavItem
          key={item}
          item={item}
          onClick={smoothScrollHandler.bind(undefined, item)}
          isActive={item === activeItem}
        />
      ))}
    </ul>
  );
}
