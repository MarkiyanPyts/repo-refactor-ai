import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={`${styles.containerOuter} ${className || ''}`}>
      <div className={styles.containerInner}>{children}</div>
    </div>
  );
}