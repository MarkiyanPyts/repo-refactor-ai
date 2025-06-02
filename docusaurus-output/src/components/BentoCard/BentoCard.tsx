import React from 'react';
import { Subheading } from '../Text';
import styles from './BentoCard.module.css';

interface BentoCardProps {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode;
  fade?: ('top' | 'bottom')[];
}

export function BentoCard({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: BentoCardProps) {
  return (
    <div
      className={`${styles.card} ${dark ? styles.cardDark : ''} ${className}`}
    >
      <div className={styles.graphicContainer}>
        {graphic}
        {fade.includes('top') && (
          <div className={`${styles.fadeOverlay} ${styles.fadeTop} ${dark ? styles.fadeTopDark : ''}`} />
        )}
        {fade.includes('bottom') && (
          <div className={`${styles.fadeOverlay} ${styles.fadeBottom} ${dark ? styles.fadeBottomDark : ''}`} />
        )}
      </div>
      <div className={styles.content}>
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className={`${styles.title} ${dark ? styles.titleDark : ''}`}>
          {title}
        </p>
        <p className={`${styles.description} ${dark ? styles.descriptionDark : ''}`}>
          {description}
        </p>
      </div>
    </div>
  );
}