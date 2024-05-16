import React from 'react';
import { Element } from 'react-scroll';
import { NAVITEMS } from '../../config/navigation';
import { cn } from '../../lib/utils';

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
    <div className="sticky -top-1 z-50 mb-5 w-full select-none bg-[#111]/75 py-3 text-lg font-bold backdrop-blur lg:hidden">
      {title}
    </div>
    {children}
  </Element>
);
