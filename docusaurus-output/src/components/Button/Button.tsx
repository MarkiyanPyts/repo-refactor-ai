import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonPropsBase {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonPropsAsButton = ButtonPropsBase & 
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonPropsAsLink = ButtonPropsBase & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonPropsAsButton | ButtonPropsAsLink;

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClass = styles[variant];
  const combinedClassName = `${styles.button} ${variantClass} ${className || ''}`;

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button 
      className={combinedClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
}