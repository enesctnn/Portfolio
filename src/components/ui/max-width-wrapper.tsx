import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={cn(
      'mx-auto w-full max-w-screen-2xl px-2.5 lg:px-10 xl:px-20',
      className
    )}
  >
    {children}
  </div>
);
