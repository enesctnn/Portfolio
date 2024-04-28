import { ACCOUNTS } from '../../config/socials';

export const Social = () => (
  <div className="mt-auto flex h-full w-max items-center gap-x-10 max-lg:mx-auto">
    {ACCOUNTS.map(({ icon: Icon, href }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        className="text-nyanza opacity-60 transition-all hover:opacity-100"
      >
        <Icon size={32} />
      </a>
    ))}
  </div>
);
