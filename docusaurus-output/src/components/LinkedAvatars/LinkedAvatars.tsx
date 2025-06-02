import React from 'react';
import styles from './LinkedAvatars.module.css';

function Rings() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      className={styles.rings}
    >
      {Array.from(Array(42).keys()).map((n) => (
        <circle
          key={n}
          cx="250"
          cy="250"
          r={n * 14 + 4}
          className={styles.ring}
          style={{
            animationDelay: `${n * 0.05}s`
          }}
        />
      ))}
    </svg>
  );
}

function Checkmark() {
  return (
    <div className={styles.checkmarkContainer}>
      <div className={styles.checkmark}>
        <svg 
          className={styles.checkIcon} 
          viewBox="0 0 16 16" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    </div>
  );
}

function Photos() {
  return (
    <div className={styles.photosContainer}>
      <div className={styles.photosWrapper}>
        <img
          alt=""
          src="/linked-avatars/customer.jpg"
          className={styles.avatar}
        />
        <img
          alt=""
          src="/linked-avatars/manager.jpg"
          className={styles.avatar}
        />
      </div>
    </div>
  );
}

export function LinkedAvatars() {
  return (
    <div aria-hidden="true" className={styles.linkedAvatars}>
      <Rings />
      <Photos />
      <Checkmark />
    </div>
  );
}