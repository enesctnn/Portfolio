import React from 'react';
import { Element } from 'react-scroll';
import { cn } from '../../lib/utils';
import { NAVITEMS } from '../../config/navigation';

export const Card = ({
  locationName,
  className,
  title,
  role,
  children,
}: {
  locationName: (typeof NAVITEMS)[number];
  children: React.ReactNode;
  title: string;
  role?: React.AriaRole;
  className?: string;
}) => (
  <Element
    key={locationName}
    id={locationName}
    name={locationName}
    className={cn('flex w-full flex-col', className)}
    role={role}
  >
    <div className="sticky -top-1 w-full select-none bg-[#111]/75 py-3 text-lg font-bold backdrop-blur lg:hidden z-50">
      {title}
    </div>
    {children}
  </Element>
);
