import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={`select-none rounded-full bg-nyanza-200 px-4 py-2 font-medium text-white transition-all duration-500 hover:bg-nyanza-300 hover:text-black/80 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    />
  )
);
