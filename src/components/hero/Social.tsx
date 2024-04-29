import { ACCOUNTS } from '../../config/socials';

export const Social = () => (
  <ul className="ml-1 mt-8 flex items-center max-lg:justify-center">
    {ACCOUNTS.map(({ icon: Icon, href, platform }) => (
      <li
        key={href}
        className="mr-5 shrink-0 text-xs text-nyanza opacity-60 transition-all hover:opacity-100"
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          title={platform}
          aria-label={platform + ' (opens in a new tab)'}
        >
          <Icon size={32} />
        </a>
      </li>
    ))}
  </ul>
);
