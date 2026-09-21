import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cyan' | 'emerald' | 'outline' | 'mono';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'outline',
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = size === 'sm' 
    ? 'px-2 py-0.5 text-[0.6875rem] font-mono leading-none tracking-wide' 
    : 'px-2.5 py-1 text-xs font-mono leading-normal tracking-wide';

  const variantClasses = {
    primary: 'bg-primary-container/10 border border-primary-container/30 text-primary',
    secondary: 'bg-secondary-container/10 border border-secondary-container/30 text-secondary',
    cyan: 'bg-tertiary/10 border border-tertiary/30 text-tertiary',
    emerald: 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400',
    outline: 'bg-white/[0.03] border border-white/10 text-on-surface-variant hover:border-primary/40 hover:text-on-surface transition-colors',
    mono: 'bg-surface-variant/40 border border-outline-variant/30 text-tertiary font-mono',
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${sizeClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
};
