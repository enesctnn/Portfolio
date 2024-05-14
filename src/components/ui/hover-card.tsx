import * as React from 'react';

import { cn } from '../../lib/utils';

interface HoverCard extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const HoverCard = ({ href, className, ...props }: HoverCard) => (
  <a
    {...props}
    href={href}
    className={cn(
      'group grid w-full cursor-pointer select-none grid-cols-1 rounded-md bg-nyanza bg-opacity-0 px-6 py-5 transition-all hover:bg-opacity-10 hover:shadow-lg lg:grid-cols-[minmax(180px,0.8fr)_1.5fr]',
      className
    )}
    target="_blank"
  />
);
