import React, { useState } from 'react';
import { Logo } from '../Logo';
import { PlusGrid, PlusGridItem, PlusGridRow } from '../PlusGrid';
import styles from './Navbar.module.css';

const links = [
  { href: 'pricing', label: 'Pricing' },
  { href: 'company', label: 'Company' },
  { href: 'login', label: 'Login' },
];

function DesktopNav() {
  const navigate = (page: string) => {
    (window as any).navigate(page);
  };

  return (
    <nav className={styles.desktopNav}>
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className={styles.navItemWrapper}>
          <button
            onClick={() => navigate(href)}
            className={styles.navLink}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {label}
          </button>
        </PlusGridItem>
      ))}
    </nav>
  );
}

interface MobileNavButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

function MobileNavButton({ onClick, isOpen }: MobileNavButtonProps) {
  return (
    <button
      className={styles.mobileMenuButton}
      aria-label="Open main menu"
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <svg 
        className={styles.menuIcon} 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 6h16M4 12h16M4 18h16" 
        />
      </svg>
    </button>
  );
}

interface MobileNavProps {
  isOpen: boolean;
}

function MobileNav({ isOpen }: MobileNavProps) {
  const navigate = (page: string) => {
    (window as any).navigate(page);
  };

  return (
    <div className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}>
      <div className={styles.mobileNavLinks}>
        {links.map(({ href, label }, linkIndex) => (
          <div
            key={href}
            className={styles.mobileNavLinkWrapper}
            style={{
              animationDelay: `${linkIndex * 0.1}s`
            }}
          >
            <button 
              onClick={() => navigate(href)} 
              className={styles.mobileNavLink}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {label}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.mobileNavBorders}>
        <div className={styles.borderTop1} />
        <div className={styles.borderTop2} />
      </div>
    </div>
  );
}

interface NavbarProps {
  banner?: React.ReactNode;
}

export function Navbar({ banner }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <PlusGrid>
        <PlusGridRow className={styles.navContainer}>
          <div className={styles.navLeft}>
            <PlusGridItem className={styles.logoWrapper}>
              <button 
                onClick={() => (window as any).navigate('home')} 
                title="Home"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <Logo className={styles.logo} />
              </button>
            </PlusGridItem>
            {banner && (
              <div className={styles.bannerWrapper}>
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            isOpen={isMobileMenuOpen}
          />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav isOpen={isMobileMenuOpen} />
    </header>
  );
}