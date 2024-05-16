import * as React from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  success?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ success, error, className, ...props }, ref) => (
    <textarea
      {...props}
      ref={ref}
      className={`min-h-28 rounded-md border border-muted bg-transparent px-2 py-1 font-semibold caret-blue-500 outline-none transition-colors duration-500 focus:bg-white focus:text-black disabled:cursor-not-allowed disabled:opacity-50 ${error ? ' animate-shake !border-red-600 outline-none' : ' '} ${success ? ' !border-nyanza-300' : ''} ${className}`}
    />
  )
);
