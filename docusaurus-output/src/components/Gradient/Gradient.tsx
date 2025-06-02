import React from 'react';
import styles from './Gradient.module.css';

interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Gradient({ className, ...props }: GradientProps) {
  return (
    <div
      {...props}
      className={`${styles.gradient} ${className || ''}`}
    />
  );
}

export function GradientBackground() {
  return (
    <div className={styles.gradientBackgroundContainer}>
      <div className={styles.gradientBackgroundBlob} />
    </div>
  );
}