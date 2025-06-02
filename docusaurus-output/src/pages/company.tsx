import React from 'react';
import '../styles/global.css';
import styles from './showcase.module.css';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Heading, Subheading, Lead } from '../components/Text';
import { Button } from '../components/Button';
import { LogoCloud } from '../components/LogoCloud';
import { Map } from '../components/Map';

function CompanyHero() {
  return (
    <section className={styles.section}>
      <Container>
        <Heading as="h1">Helping companies generate revenue.</Heading>
        <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
          We're on a mission to transform revenue organizations by harnessing vast
          amounts of customer data to provide insights that drive growth.
        </Lead>
      </Container>
    </section>
  );
}

function CompanyStats() {
  return (
    <section className={`${styles.section} ${styles.sectionGray}`}>
      <Container>
        <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols3} ${styles.gap8} ${styles.textCenter}`}>
          <div>
            <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
              500+
            </div>
            <p className={`${styles.mt6} ${styles.textGray600}`}>Companies Trust Us</p>
          </div>
          <div>
            <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
              50M+
            </div>
            <p className={`${styles.mt6} ${styles.textGray600}`}>Deals Closed</p>
          </div>
          <div>
            <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
              2019
            </div>
            <p className={`${styles.mt6} ${styles.textGray600}`}>Founded</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CompanyMission() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.gap12}`}>
          <div>
            <Subheading>Our Mission</Subheading>
            <Heading as="h3" className={styles.mt4}>
              Empowering sales teams worldwide
            </Heading>
            <p className={`${styles.mt6} ${styles.textGray600}`}>
              We believe that every sales professional deserves access to world-class tools 
              that help them succeed. Our platform combines cutting-edge technology with 
              intuitive design to create solutions that actually work in the real world.
            </p>
            <div className={styles.mt8}>
              <Button href="/pricing">Join Our Mission</Button>
            </div>
          </div>
          <div>
            <Subheading>Global Presence</Subheading>
            <Heading as="h3" className={styles.mt4}>
              Serving customers everywhere
            </Heading>
            <p className={`${styles.mt6} ${styles.textGray600}`}>
              From startups to enterprise organizations, our customers span across 
              continents and industries, all united by their commitment to sales excellence.
            </p>
            <div className={`${styles.mt8} ${styles.h96} ${styles.bgWhite} ${styles.roundedLg} ${styles.shadowLg} ${styles.overflow}`}>
              <Map />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CompanyPartners() {
  return (
    <section className={`${styles.section} ${styles.sectionGray}`}>
      <Container>
        <div className={`${styles.flexCenter} ${styles.textCenter} ${styles.mb12}`}>
          <Heading as="h2">Trusted by industry leaders</Heading>
        </div>
        <LogoCloud />
      </Container>
    </section>
  );
}

export default function Company() {
  return (
    <div className={styles.minHeight}>
      <Navbar />
      <main>
        <CompanyHero />
        <CompanyStats />
        <CompanyMission />
        <CompanyPartners />
      </main>
      <Footer />
    </div>
  );
}