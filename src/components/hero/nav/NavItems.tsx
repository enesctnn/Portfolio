import { motion, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { scroller, scrollSpy } from 'react-scroll';

const NAVITEMS: string[] = ['about', 'projects', 'experience'];

const scrollerConfig = {
  smooth: true,
  offset: -90,
  duration: 500,
};

export function NavItems() {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero.navigation' });

  const animateStick: Variants = {
    initial: { width: '3rem', opacity: 0.4 },
    animate: { width: '6rem', opacity: 1 },
  };

  const smoothScrollHandler = (elementToGo: string) =>
    scroller.scrollTo(elementToGo, scrollerConfig);

  const navigateTo = window.location.href.split('#')[1];

  useEffect(() => {
    scroller.scrollTo(navigateTo, scrollerConfig);
    scrollSpy.update();
  }, [navigateTo]);

  return (
    <ul className="mt-16 w-max">
      {NAVITEMS.map(item => (
        <li key={item}>
          <motion.a
            onClick={() => smoothScrollHandler(item)}
            href={`#${item}`}
            className="group flex items-center justify-start py-3"
            initial="initial"
            animate="initial"
            whileHover="animate"
          >
            <motion.span
              className="mr-4 h-px bg-nyanza group-hover:bg-nyanza-400"
              variants={animateStick}
            />
            <span className="text-nyanza-600 opacity-80 transition-all group-hover:text-nyanza-400 group-hover:opacity-100">
              {t(item)}
            </span>
          </motion.a>
        </li>
      ))}
    </ul>
  );
}
