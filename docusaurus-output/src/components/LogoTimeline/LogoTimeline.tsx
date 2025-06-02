import React from 'react';
import { Mark } from '../Logo';
import styles from './LogoTimeline.module.css';

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLineTop} />
      <div className={styles.rowLineBottom} />
      {children}
    </div>
  );
}

interface LogoProps {
  label: string;
  src: string;
  animationDelay: string;
  animationDuration: string;
}

function Logo({ label, src, animationDelay, animationDuration }: LogoProps) {
  return (
    <div
      className={styles.logoItem}
      style={{
        animationDelay,
        animationDuration,
      } as React.CSSProperties}
    >
      <img alt="" src={src} className={styles.logoIcon} />
      <span className={styles.logoLabel}>{label}</span>
    </div>
  );
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className={styles.logoTimeline}>
      <div className={styles.centerLogoContainer}>
        <div 
          className={styles.blurBackdrop}
          style={{
            maskImage: `url('data:image/svg+xml,<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>')`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
          }}
        />
        <div className={styles.centerLogo}>
          <Mark className={styles.centerLogoIcon} />
        </div>
      </div>
      <div className={styles.timelineGrid}>
        <Row>
          <Logo
            label="Loom"
            src="/logo-timeline/loom.svg"
            animationDelay="-26s"
            animationDuration="30s"
          />
          <Logo
            label="Gmail"
            src="/logo-timeline/gmail.svg"
            animationDelay="-8s"
            animationDuration="30s"
          />
        </Row>
        <Row>
          <Logo
            label="Asana"
            src="/logo-timeline/asana.svg"
            animationDelay="-40s"
            animationDuration="40s"
          />
          <Logo
            label="Microsoft Teams"
            src="/logo-timeline/microsoft-teams.svg"
            animationDelay="-20s"
            animationDuration="40s"
          />
        </Row>
        <Row>
          <Logo
            label="Google Calendar"
            src="/logo-timeline/google-calendar.svg"
            animationDelay="-10s"
            animationDuration="40s"
          />
          <Logo
            label="Google Drive"
            src="/logo-timeline/google-drive.svg"
            animationDelay="-32s"
            animationDuration="40s"
          />
        </Row>
        <Row>
          <Logo
            label="Basecamp"
            src="/logo-timeline/basecamp.svg"
            animationDelay="-45s"
            animationDuration="45s"
          />
          <Logo
            label="Discord"
            src="/logo-timeline/discord.svg"
            animationDelay="-23s"
            animationDuration="45s"
          />
        </Row>
        <Row>
          <Logo
            label="Hubspot"
            src="/logo-timeline/hubspot.svg"
            animationDelay="-55s"
            animationDuration="60s"
          />
          <Logo
            label="Slack"
            src="/logo-timeline/slack.svg"
            animationDelay="-20s"
            animationDuration="60s"
          />
        </Row>
        <Row>
          <Logo
            label="Adobe Creative Cloud"
            src="/logo-timeline/adobe-creative-cloud.svg"
            animationDelay="-9s"
            animationDuration="40s"
          />
          <Logo
            label="Zoom"
            src="/logo-timeline/zoom.svg"
            animationDelay="-28s"
            animationDuration="40s"
          />
        </Row>
      </div>
    </div>
  );
}