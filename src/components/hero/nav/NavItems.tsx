import { useEffect, useState } from 'react';
import { Events, scroller, scrollSpy } from 'react-scroll';
import { NAVITEMS } from '../../../config/navigation';
import { NavItem } from './NavItem';

const scrollerConfig = {
  smooth: true,
  offset: -90,
  duration: 500,
};

export function NavItems() {
  const navigateTo = window.location.href.split('#')[1];
  const [activeItem, setActiveItem] = useState<string>(navigateTo);

  const smoothScrollHandler = (elementToGo: (typeof NAVITEMS)[number]) => {
    scroller.scrollTo(elementToGo, scrollerConfig);
    setActiveItem(elementToGo);
  };

  useEffect(() => {
    console.log(navigateTo);
    Events.scrollEvent.register(navigateTo, (to, element) => {
      console.log(navigateTo, to, element);
    });
    scrollSpy.update();

    return () => Events.scrollEvent.remove(navigateTo);
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
