import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ success, error, className, ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      className={`h-10 rounded-lg border border-muted bg-transparent px-2 py-1 text-white caret-nyanza-400 transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${error ? ' animate-shake !border-red-600 outline-none' : ' '} ${success ? ' !border-nyanza-300' : ''} ${className}`}
    />
  )
);
