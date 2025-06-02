import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedNumber.module.css';

interface AnimatedNumberProps {
  start: number;
  end: number;
  decimals?: number;
  duration?: number;
}

export function AnimatedNumber({
  start,
  end,
  decimals = 0,
  duration = 2000,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue(start, end, duration);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [start, end, duration, hasAnimated]);

  const animateValue = (startValue: number, endValue: number, duration: number) => {
    const startTime = Date.now();
    const difference = endValue - startValue;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (difference * easeOutProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} className={styles.animatedNumber}>
      {displayValue.toFixed(decimals)}
    </span>
  );
}