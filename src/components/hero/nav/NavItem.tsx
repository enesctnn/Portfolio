import { useTranslation } from 'react-i18next';
import { NAVITEMS } from '../../../config/navigation';
import { cn } from '../../../lib/utils';
export const NavItem = ({
  item,
  onClick,
  isActive,
}: {
  item: (typeof NAVITEMS)[number];
  onClick: () => void;
  isActive: boolean;
}) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero.navigation' });

  return (
    <li key={item} id={item}>
      <a
        onClick={onClick}
        href={`#${item}`}
        className="group flex items-center justify-start py-3"
      >
        <span
          className={cn(
            'mr-4 h-px w-12 bg-nyanza transition-all duration-300 group-hover:w-24 group-hover:bg-nyanza-400 group-active:bg-nyanza-200',
            isActive && 'w-20 bg-nyanza-300 '
          )}
        />
        <span
          className={cn(
            'text-nyanza-600 opacity-80 transition-all duration-300 group-hover:text-nyanza-400 group-hover:opacity-100 group-active:text-nyanza-200',
            isActive && 'text-nyanza-300 '
          )}
        >
          {t(item)}
        </span>
      </a>
    </li>
  );
};
