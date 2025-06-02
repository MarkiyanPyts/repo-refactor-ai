import React from 'react';
import styles from './PlusGrid.module.css';

interface PlusGridProps {
  className?: string;
  children: React.ReactNode;
}

export function PlusGrid({ className = '', children }: PlusGridProps) {
  return (
    <div className={`${styles.plusGrid} ${className}`}>
      {children}
    </div>
  );
}

export function PlusGridRow({ className = '', children }: PlusGridProps) {
  return (
    <div className={`${styles.plusGridRow} ${className}`}>
      <div aria-hidden="true" className={styles.rowBorders}>
        <div className={styles.borderTop1}></div>
        <div className={styles.borderTop2}></div>
        <div className={styles.borderBottom1}></div>
        <div className={styles.borderBottom2}></div>
      </div>
      {children}
    </div>
  );
}

export function PlusGridItem({ className = '', children }: PlusGridProps) {
  return (
    <div className={`${styles.plusGridItem} ${className}`}>
      <PlusGridIcon placement="top left" className={styles.iconTopLeft} />
      <PlusGridIcon placement="top right" className={styles.iconTopRight} />
      <PlusGridIcon placement="bottom left" className={styles.iconBottomLeft} />
      <PlusGridIcon placement="bottom right" className={styles.iconBottomRight} />
      {children}
    </div>
  );
}

interface PlusGridIconProps {
  className?: string;
  placement: `${'top' | 'bottom'} ${'right' | 'left'}`;
}

export function PlusGridIcon({ className = '', placement }: PlusGridIconProps) {
  const [yAxis, xAxis] = placement.split(' ') as ['top' | 'bottom', 'right' | 'left'];
  
  const positionClasses = `${styles.plusIcon} ${styles[`icon-${yAxis}`]} ${styles[`icon-${xAxis}`]}`;
  
  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={`${positionClasses} ${className}`}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  );
}