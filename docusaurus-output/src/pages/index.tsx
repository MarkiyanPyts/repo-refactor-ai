import React from 'react';
import '../styles/global.css';
import styles from './showcase.module.css';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Heading, Subheading, Lead } from '../components/Text';
import { Button } from '../components/Button';
import { Gradient, GradientBackground } from '../components/Gradient';
import { BentoCard } from '../components/BentoCard';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { LinkedAvatars } from '../components/LinkedAvatars';
import { LogoCloud } from '../components/LogoCloud';
import { LogoCluster } from '../components/LogoCluster';
import { LogoTimeline } from '../components/LogoTimeline';
import { Map } from '../components/Map';

// Component showcase sections
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <GradientBackground />
      <Container>
        <div className={`${styles.flexCenter} ${styles.textCenter}`}>
          <Subheading>Welcome to Radiant</Subheading>
          <Heading className={styles.mt6}>
            Close every deal with confidence
          </Heading>
          <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
            Transform your sales process with our powerful platform that helps you
            track, analyze, and close deals faster than ever before.
          </Lead>
          <div className={`${styles.mt10} ${styles.flexRow} ${styles.gap4}`}>
            <Button href="#features">Get Started</Button>
            <Button variant="outline" href="#demo">Watch Demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionGray}`}>
      <Container>
        <div className={`${styles.flexCenter} ${styles.textCenter} ${styles.mb12}`}>
          <Heading as="h2">Trusted by teams worldwide</Heading>
        </div>
        <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols3} ${styles.gap8} ${styles.textCenter}`}>
          <div>
            <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
              <AnimatedNumber start={0} end={10000} />+
            </div>
            <p className={`${styles.mt6} ${styles.textGray600}`}>Active Users</p>
          </div>
          <div>
            <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
              <AnimatedNumber start={0} end={95} />%
            </div>
            <p className={`${styles.mt6} ${styles.textGray600}`}>Customer Satisfaction</p>
          </div>
          <div>
            <div className={`${styles.text4xl} ${styles.fontBold} ${styles.textGray900}`}>
              $<AnimatedNumber start={0} end={2.5} decimals={1} />M
            </div>
            <p className={`${styles.mt6} ${styles.textGray600}`}>Revenue Generated</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <div className={`${styles.flexCenter} ${styles.textCenter} ${styles.mb12}`}>
          <Subheading>Features</Subheading>
          <Heading as="h2" className={styles.mt4}>
            Everything you need to succeed
          </Heading>
        </div>
        <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.gap8}`}>
          <BentoCard
            eyebrow="Analytics"
            title="Real-time insights"
            description="Get instant visibility into your sales pipeline with powerful analytics and reporting tools."
            graphic={
              <div className={`${styles.hFull} ${styles.gradientBlue}`} />
            }
            fade={['bottom']}
          />
          <BentoCard
            eyebrow="Automation"
            title="Streamline workflows"
            description="Automate repetitive tasks and focus on what matters most - building relationships."
            graphic={
              <div className={`${styles.hFull} ${styles.gradientGreen}`} />
            }
            fade={['bottom']}
          />
          <BentoCard
            dark
            eyebrow="Integration"
            title="Connect everything"
            description="Seamlessly integrate with your favorite tools and keep all your data in sync."
            graphic={
              <div className={`${styles.hFull} ${styles.flexCenter}`}>
                <LinkedAvatars />
              </div>
            }
            fade={['top', 'bottom']}
          />
          <BentoCard
            eyebrow="Collaboration"
            title="Work together"
            description="Share insights, collaborate on deals, and keep your entire team aligned."
            graphic={
              <div className={`${styles.hFull} ${styles.gradientPink}`} />
            }
            fade={['bottom']}
          />
        </div>
      </Container>
    </section>
  );
}

function LogosSection() {
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

function InteractiveSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.gap12}`}>
          <div>
            <Subheading>Network Effect</Subheading>
            <Heading as="h3" className={styles.mt4}>
              Connect with your ecosystem
            </Heading>
            <p className={`${styles.mt6} ${styles.textGray600}`}>
              Our platform creates powerful network effects, connecting you with
              partners, customers, and opportunities across your industry.
            </p>
            <div className={`${styles.mt8} ${styles.h96} ${styles.bgGray900} ${styles.roundedLg} ${styles.overflow}`}>
              <LogoCluster />
            </div>
          </div>
          <div>
            <Subheading>Integration Timeline</Subheading>
            <Heading as="h3" className={styles.mt4}>
              Seamless tool integration
            </Heading>
            <p className={`${styles.mt6} ${styles.textGray600}`}>
              Connect all your favorite tools in one place. Our timeline view
              shows how your tools work together in perfect harmony.
            </p>
            <div className={`${styles.mt8} ${styles.h96} ${styles.bgGray900} ${styles.roundedLg} ${styles.overflow}`}>
              <LogoTimeline />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MapSection() {
  return (
    <section className={`${styles.section} ${styles.sectionGray}`}>
      <Container>
        <div className={`${styles.flexCenter} ${styles.textCenter} ${styles.mb12}`}>
          <Subheading>Global Reach</Subheading>
          <Heading as="h2" className={styles.mt4}>
            Customers around the world
          </Heading>
        </div>
        <div className={`${styles.h96} ${styles.bgWhite} ${styles.roundedLg} ${styles.shadowLg} ${styles.overflow}`}>
          <Map />
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.minHeight}>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <LogosSection />
        <InteractiveSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}