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
// Note: Screenshot and Testimonials components need to be created

function HeroSection() {
  return (
    <div className={styles.relative}>
      <Gradient className={`${styles.absolute} ${styles.inset2} ${styles.bottom0} ${styles.rounded4xl} ${styles.ring1} ${styles.ringBlackOpacity5} ${styles.ringInset}`} />
      <Container className={styles.relative}>
        <Navbar />
        <div className={`${styles.pt16} ${styles.pb24} ${styles.smPt24} ${styles.smPb32} ${styles.mdPt32} ${styles.mdPb48}`}>
          <h1 className={styles.heroTitle}>
            Close every deal.
          </h1>
          <p className={`${styles.mt8} ${styles.maxWLg} ${styles.heroSubtitle}`}>
            Radiant helps you sell more by revealing sensitive information about
            your customers.
          </p>
          <div className={`${styles.mt12} ${styles.flex} ${styles.flexCol} ${styles.gapX6} ${styles.gapY4} ${styles.smFlexRow}`}>
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
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

function FeatureSection() {
  return (
    <div className={styles.overflowHidden}>
      <Container className={styles.pb24}>
        <Heading as="h2" className={styles.maxW3xl}>
          A snapshot of your entire sales pipeline.
        </Heading>
        <div className={`${styles.mt16} ${styles.screenshotContainer}`}>
          <img 
            width={1216}
            height={768}
            src="/screenshots/app.png" 
            alt="Application screenshot"
            className={styles.screenshot}
          />
        </div>
      </Container>
    </div>
  );
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className={`${styles.mt2} ${styles.maxW3xl}`}>
        Know more about your customers than they do.
      </Heading>

      <div className={`${styles.mt10} ${styles.grid} ${styles.gridCols1} ${styles.gap4} ${styles.smMt16} ${styles.lgGridCols6} ${styles.lgGridRows2}`}>
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className={styles.profileScreenshot} />
          }
          fade={['bottom']}
          className={`${styles.maxLgRoundedT4xl} ${styles.lgColSpan3} ${styles.lgRoundedTl4xl}`}
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you'll know which companies your leads are talking to and exactly how much they're being charged."
          graphic={
            <div className={styles.competitorsScreenshot} />
          }
          fade={['bottom']}
          className={`${styles.lgColSpan3} ${styles.lgRoundedTr4xl}`}
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It's never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className={`${styles.flexSizeFull} ${styles.pt10} ${styles.pl10}`}>
              <div className={styles.keyboardPlaceholder}>⌘⇧D</div>
            </div>
          }
          className={`${styles.lgColSpan2} ${styles.lgRoundedBl4xl}`}
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className={styles.lgColSpan2}
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className={`${styles.maxLgRoundedB4xl} ${styles.lgColSpan2} ${styles.lgRoundedBr4xl}`}
        />
      </div>
    </Container>
  );
}

function DarkBentoSection() {
  return (
    <div className={`${styles.mx2} ${styles.mt2} ${styles.rounded4xl} ${styles.bgGray900} ${styles.py32}`}>
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className={`${styles.mt2} ${styles.maxW3xl}`}>
          Customer outreach has never been easier.
        </Heading>

        <div className={`${styles.mt10} ${styles.grid} ${styles.gridCols1} ${styles.gap4} ${styles.smMt16} ${styles.lgGridCols6} ${styles.lgGridRows2}`}>
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className={styles.networkingScreenshot} />
            }
            fade={['top']}
            className={`${styles.maxLgRoundedT4xl} ${styles.lgColSpan4} ${styles.lgRoundedTl4xl}`}
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            className={`${styles.zIndex10} ${styles.overflowVisible} ${styles.lgColSpan2} ${styles.lgRoundedTr4xl}`}
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className={`${styles.lgColSpan2} ${styles.lgRoundedBl4xl}`}
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className={styles.engagementScreenshot} />
            }
            fade={['top']}
            className={`${styles.maxLgRoundedB4xl} ${styles.lgColSpan4} ${styles.lgRoundedBr4xl}`}
          />
        </div>
      </Container>
    </div>
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
    <div className={styles.overflowHidden}>
      <HeroSection />
      <main>
        <Container className={styles.mt10}>
          <LogoCloud />
        </Container>
        <div className={`${styles.bgLinearToB} ${styles.fromWhite} ${styles.fromFiftyPercent} ${styles.toGray100} ${styles.py32}`}>
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Footer />
    </div>
  );
}