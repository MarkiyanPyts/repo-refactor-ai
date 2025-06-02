import React from 'react';
import styles from './LogoCloud.module.css';

interface LogoCloudProps {
  className?: string;
}

export function LogoCloud({ className }: LogoCloudProps) {
  const logos = [
    { name: 'SavvyCal', src: '/logo-cloud/savvycal.svg' },
    { name: 'Laravel', src: '/logo-cloud/laravel.svg' },
    { name: 'Tuple', src: '/logo-cloud/tuple.svg' },
    { name: 'Transistor', src: '/logo-cloud/transistor.svg' },
    { name: 'Statamic', src: '/logo-cloud/statamic.svg' },
  ];

  return (
    <div className={`${styles.logoCloud} ${className || ''}`}>
      {logos.map((logo) => (
        <img
          key={logo.name}
          alt={logo.name}
          src={logo.src}
          className={styles.logo}
        />
      ))}
    </div>
  );
}