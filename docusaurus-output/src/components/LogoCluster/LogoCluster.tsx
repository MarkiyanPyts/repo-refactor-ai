import React from 'react';
import { Mark } from '../Logo';
import styles from './LogoCluster.module.css';

interface CircleProps {
  size: number;
  delay: number;
  opacity: string;
}

function Circle({ size, delay, opacity }: CircleProps) {
  return (
    <div
      style={{
        '--size': `${size}px`,
        '--opacity': opacity,
        animationDelay: `${delay}s`
      } as React.CSSProperties}
      className={styles.circle}
    />
  );
}

function Circles() {
  return (
    <div className={styles.circlesContainer}>
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} />
      <div className={styles.gradientOverlay} />
    </div>
  );
}

function MainLogo() {
  return (
    <div className={styles.mainLogo}>
      <Mark className={styles.mainLogoIcon} />
    </div>
  );
}

interface LogoProps {
  src: string;
  left: number;
  top: number;
  hover: { x: number; y: number; rotate: number; delay: number };
}

function Logo({ src, left, top, hover }: LogoProps) {
  return (
    <img
      alt=""
      src={src}
      style={{
        left: `${left}px`,
        top: `${top}px`,
        '--hover-x': `${hover.x}px`,
        '--hover-y': `${hover.y}px`,
        '--hover-rotate': `${hover.rotate}deg`,
        animationDelay: `${hover.delay}s`
      } as React.CSSProperties}
      className={styles.floatingLogo}
    />
  );
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className={styles.logoCluster}>
      <Circles />
      <div className={styles.logosContainer}>
        <MainLogo />
        <Logo
          src="/logo-cluster/career-builder.svg"
          left={360}
          top={144}
          hover={{ x: 6, y: 1, rotate: 5, delay: 0.38 }}
        />
        <Logo
          src="/logo-cluster/dribbble.svg"
          left={285}
          top={20}
          hover={{ x: 4, y: -5, rotate: 6, delay: 0.3 }}
        />
        <Logo
          src="/logo-cluster/glassdoor.svg"
          left={255}
          top={210}
          hover={{ x: 3, y: 5, rotate: 7, delay: 0.2 }}
        />
        <Logo
          src="/logo-cluster/linkedin.svg"
          left={144}
          top={40}
          hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
        />
        <Logo
          src="/logo-cluster/upwork.svg"
          left={36}
          top={56}
          hover={{ x: -4, y: -5, rotate: -6, delay: 0.35 }}
        />
        <Logo
          src="/logo-cluster/we-work-remotely.svg"
          left={96}
          top={176}
          hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
        />
      </div>
    </div>
  );
}