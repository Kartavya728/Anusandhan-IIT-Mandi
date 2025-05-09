// components/ui/GradientText.tsx
import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => {
  return (
    <span
      className={`
        text-transparent bg-clip-text bg-gradient-to-r
        from-[var(--gradient-from-color)]
        to-[var(--gradient-to-color)]
        ${className || ''}
      `}
    >
      {children}
    </span>
  );
};

export default GradientText;