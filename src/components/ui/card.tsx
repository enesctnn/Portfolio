import * as React from 'react';
import { Element } from 'react-scroll';
import { cn } from '../../lib/utils';

export const Card = ({
  locationName,
  className,
  role,
  children,
}: {
  locationName: string;
  children: React.ReactNode;
  role?: React.AriaRole;
  className?: string;
}) => (
  <Element
    name={locationName}
    className={cn('flex w-full flex-col', className)}
    role={role}
  >
    {children}
  </Element>
);
