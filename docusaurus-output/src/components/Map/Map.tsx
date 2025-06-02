import React from 'react';
import styles from './Map.module.css';

interface MarkerProps {
  src: string;
  top: number;
  offset: number;
  delay: number;
}

function Marker({ src, top, offset, delay }: MarkerProps) {
  return (
    <div
      style={{
        '--offset': `${offset}px`,
        '--delay': `${delay}s`,
        top: `${top}px`
      } as React.CSSProperties}
      className={styles.marker}
    >
      <svg fill="none" viewBox="0 0 38 38" className={styles.markerSvg}>
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className={styles.markerShadow}
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className={styles.markerBody}
        />
      </svg>
      <img
        alt=""
        src={src}
        className={styles.markerImage}
      />
    </div>
  );
}

export function Map() {
  return (
    <div aria-hidden="true" className={styles.map}>
      <div className={styles.mapBackground} />
      <div className={styles.markersContainer}>
        <Marker src="/map/1.jpg" top={96} offset={-128} delay={0.15} />
        <Marker src="/map/2.jpg" top={160} offset={-16} delay={0.4} />
        <Marker src="/map/3.jpg" top={144} offset={96} delay={0.3} />
        <Marker src="/map/4.jpg" top={192} offset={64} delay={0.6} />
        <Marker src="/map/5.jpg" top={224} offset={-32} delay={0.8} />
      </div>
    </div>
  );
}