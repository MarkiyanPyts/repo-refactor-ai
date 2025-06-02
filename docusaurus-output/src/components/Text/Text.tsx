import React from 'react';
import styles from './Text.module.css';

type HeadingElement = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingElement;
  dark?: boolean;
  className?: string;
}

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      className={`${styles.heading} ${dark ? styles.headingDark : ''} ${className || ''}`}
    />
  );
}

export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      className={`${styles.subheading} ${dark ? styles.subheadingDark : ''} ${className || ''}`}
    />
  );
}

interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export function Lead({
  className,
  ...props
}: LeadProps) {
  return (
    <p
      className={`${styles.lead} ${className || ''}`}
      {...props}
    />
  );
}