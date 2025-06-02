import React from 'react';
import '../styles/global.css';
import styles from './showcase.module.css';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Heading, Subheading, Lead } from '../components/Text';
import { Button } from '../components/Button';
import { BentoCard } from '../components/BentoCard';

function PricingHero() {
  return (
    <section className={`${styles.section}`}>
      <Container>
        <div className={`${styles.flexCenter} ${styles.textCenter}`}>
          <Subheading>Pricing</Subheading>
          <Heading className={styles.mt6}>
            Simple, transparent pricing
          </Heading>
          <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
            Choose the plan that fits your team's needs. All plans include our core features with different limits and support levels.
          </Lead>
        </div>
      </Container>
    </section>
  );
}

function PricingPlans() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols3} ${styles.gap8}`}>
          <BentoCard
            eyebrow="Starter"
            title="$29/month"
            description="Perfect for small teams getting started with sales automation."
            graphic={
              <div className={`${styles.hFull} ${styles.flexCenter}`}>
                <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
                  $29
                </div>
              </div>
            }
            fade={['bottom']}
          />
          <BentoCard
            eyebrow="Professional"
            title="$79/month"
            description="Advanced features for growing teams with complex sales processes."
            graphic={
              <div className={`${styles.hFull} ${styles.flexCenter}`}>
                <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
                  $79
                </div>
              </div>
            }
            fade={['bottom']}
          />
          <BentoCard
            dark
            eyebrow="Enterprise"
            title="Custom"
            description="Tailored solutions for large organizations with dedicated support."
            graphic={
              <div className={`${styles.hFull} ${styles.flexCenter}`}>
                <div className={`${styles.text4xl} ${styles.fontBold}`} style={{ color: 'white' }}>
                  Custom
                </div>
              </div>
            }
            fade={['bottom']}
          />
        </div>
        <div className={`${styles.textCenter} ${styles.mt12}`}>
          <Button href="/">Get Started Today</Button>
        </div>
      </Container>
    </section>
  );
}

export default function Pricing() {
  return (
    <div className={styles.minHeight}>
      <Navbar />
      <main>
        <PricingHero />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
}