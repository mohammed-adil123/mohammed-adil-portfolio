import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-mono font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-xs sm:text-sm',
    lg: 'px-6 py-3 text-sm sm:text-base',
  }[size];

  const variantClasses = {
    primary:   'bg-gradient-to-r from-[#7c3aed] to-[#0891b2] text-white border border-white/10 hover:brightness-110 shadow-glow-primary',
    secondary: 'bg-white/[0.04] text-on-surface border border-[rgba(167,139,250,0.18)] hover:bg-[rgba(167,139,250,0.08)] hover:border-[rgba(167,139,250,0.45)] hover:text-white',
    outline:   'bg-transparent text-[#a78bfa] border border-[rgba(167,139,250,0.38)] hover:bg-[rgba(167,139,250,0.10)] hover:border-[rgba(167,139,250,0.70)]',
    ghost:     'bg-transparent text-on-surface-variant hover:text-[#a78bfa] hover:bg-white/[0.04]',
  }[variant];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
