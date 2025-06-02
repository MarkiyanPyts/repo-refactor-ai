import React from 'react';
import '../styles/global.css';
import styles from './showcase.module.css';
import pricingStyles from './pricing.module.css';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Heading, Subheading, Lead } from '../components/Text';
import { Button } from '../components/Button';
import { Gradient, GradientBackground } from '../components/Gradient';
import { LogoCloud } from '../components/LogoCloud';

const tiers = [
  {
    name: 'Starter',
    slug: 'starter',
    description: 'Everything you need to start selling.',
    priceMonthly: 99,
    href: '#',
    highlights: [
      { description: 'Up to 3 team members' },
      { description: 'Up to 5 deal progress boards' },
      { description: 'Source leads from select platforms' },
      { description: 'RadiantAI integrations', disabled: true },
      { description: 'Competitor analysis', disabled: true },
    ],
  },
  {
    name: 'Growth',
    slug: 'growth',
    description: 'All the extras for your growing team.',
    priceMonthly: 149,
    href: '#',
    highlights: [
      { description: 'Up to 10 team members' },
      { description: 'Unlimited deal progress boards' },
      { description: 'Source leads from over 50 verified platforms' },
      { description: 'RadiantAI integrations' },
      { description: '5 competitor analyses per month' },
    ],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'Added flexibility to close deals at scale.',
    priceMonthly: 299,
    href: '#',
    highlights: [
      { description: 'Unlimited active team members' },
      { description: 'Unlimited deal progress boards' },
      { description: 'Source leads from over 100 verified platforms' },
      { description: 'RadiantAI integrations' },
      { description: 'Unlimited competitor analyses' },
    ],
  },
];

function Header() {
  return (
    <Container className={`${styles.mt16} ${pricingStyles.pb16}`}>
      <Heading as="h1">Pricing that grows with your team size.</Heading>
      <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
        Companies all over the world have closed millions of deals with Radiant.
        Sign up today and start selling smarter.
      </Lead>
    </Container>
  );
}

function PricingCards() {
  return (
    <div className={`${styles.relative} ${pricingStyles.pricingSection}`}>
      <Gradient className={`${styles.absolute} ${pricingStyles.insetX2} ${pricingStyles.top48} ${styles.bottom0} ${styles.rounded4xl} ${styles.ring1} ${styles.ringBlackOpacity5} ${styles.ringInset}`} />
      <Container className={styles.relative}>
        <div className={`${styles.grid} ${styles.gridCols1} ${styles.gap8} ${pricingStyles.lgGridCols3}`}>
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className={pricingStyles.mt24} />
      </Container>
    </div>
  );
}

function PricingCard({ tier }: { tier: typeof tiers[number] }) {
  return (
    <div className={pricingStyles.pricingCardOuter}>
      <div className={pricingStyles.pricingCardMiddle}>
        <div className={pricingStyles.pricingCardInner}>
          <Subheading>{tier.name}</Subheading>
          <p className={`${styles.mt2} ${pricingStyles.cardDescription}`}>{tier.description}</p>
          <div className={`${styles.mt8} ${pricingStyles.priceContainer}`}>
            <div className={pricingStyles.priceAmount}>
              ${tier.priceMonthly}
            </div>
            <div className={pricingStyles.priceUnit}>
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className={styles.mt8}>
            <Button href={tier.href}>Start a free trial</Button>
          </div>
          <div className={styles.mt8}>
            <h3 className={pricingStyles.featuresTitle}>
              Start selling with:
            </h3>
            <ul className={pricingStyles.featuresList}>
              {tier.highlights.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex} {...feature} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string;
  disabled?: boolean;
}) {
  return (
    <li className={`${pricingStyles.featureItem} ${disabled ? pricingStyles.featureDisabled : ''}`}>
      <span className={pricingStyles.featureIcon}>
        <PlusIcon className={pricingStyles.plusIcon} />
      </span>
      {disabled && <span className={pricingStyles.srOnly}>Not included:</span>}
      {description}
    </li>
  );
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  );
}

function Testimonial() {
  return (
    <div className={pricingStyles.testimonialContainer}>
      <Container>
        <div className={`${styles.grid} ${styles.gridCols1} ${pricingStyles.lgTestimonialGrid}`}>
          <div className={pricingStyles.testimonialImageContainer}>
            <div className={pricingStyles.testimonialImageOuter}>
              <div className={pricingStyles.testimonialImageMiddle}>
                <div className={pricingStyles.testimonialImageInner}>
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className={pricingStyles.testimonialImage}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={pricingStyles.testimonialContent}>
            <figure className={pricingStyles.testimonialFigure}>
              <blockquote>
                <p className={pricingStyles.testimonialQuote}>
                  Thanks to Radiant, we&apos;re finding new leads that we never
                  would have found with legal methods.
                </p>
              </blockquote>
              <figcaption className={pricingStyles.testimonialCaption}>
                <p className={pricingStyles.testimonialName}>Tina Yards</p>
                <p className={pricingStyles.fontMedium}>
                  <span className={pricingStyles.testimonialTitle}>
                    VP of Sales, Protocol
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className={pricingStyles.faqSection}>
        <Subheading className={styles.textCenter}>
          Frequently asked questions
        </Subheading>
        <Heading as="div" className={`${styles.mt2} ${styles.textCenter}`}>
          Your questions answered.
        </Heading>
        <div className={pricingStyles.faqContainer}>
          <dl>
            <dt className={pricingStyles.faqQuestion}>
              What measures are in place to ensure the security of our data?
            </dt>
            <dd className={pricingStyles.faqAnswer}>
              Data security is a top priority for us, which is ironic given that
              our business depends on others not taking it very seriously. We
              understand that any breach could put both us and most of our
              customers out of business—and behind bars. We employ robust
              security measures, including data encryption, secure data centers,
              and regular security audits to ensure this never happens.
            </dd>
          </dl>
          <dl>
            <dt className={pricingStyles.faqQuestion}>
              Is there a mobile app available for your platform?
            </dt>
            <dd className={pricingStyles.faqAnswer}>
              Yes, we offer a mobile app that provides all the key
              functionalities of our desktop platform, allowing sales reps to
              manage deals on the go. Additionally, we have another app
              pre-installed on most modern smartphones that allows us to track
              your location, listen to your conversations, and access your
              camera and microphone at any time. This app is not available for
              download.
            </dd>
          </dl>
          <dl>
            <dt className={pricingStyles.faqQuestion}>
              Can I customize the workflow to match our company's deal process?
            </dt>
            <dd className={pricingStyles.faqAnswer}>
              Yes, our platform is highly customizable, although there should be
              no need. Before you sign up, we discreetly gather information
              about your company and its processes from a variety of sources. We
              then use this information to pre-configure the platform to match
              your existing workflows. This is why we ask for your social
              security number and access to your email account during the
              sign-up process.
            </dd>
          </dl>
          <dl>
            <dt className={pricingStyles.faqQuestion}>
              What kind of support do you offer?
            </dt>
            <dd className={pricingStyles.faqAnswer}>
              We offer comprehensive support through multiple channels,
              including 24/7 live chat, email, and phone support. However, since
              we have full access to your internal network, we will know if
              you're having issues before you do.
            </dd>
          </dl>
          <dl>
            <dt className={pricingStyles.faqQuestion}>
              Can I integrate the CRM with other sales intelligence tools?
            </dt>
            <dd className={pricingStyles.faqAnswer}>
              Yes, our solution integrates seamlessly with a variety of other
              systems. However, be warned that most of these integrations are
              short-lived. We have a dedicated team of engineers who
              reverse-engineer the APIs of other tools, enabling us to build
              their functionality into our product and eventually put them out
              of business.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  );
}

export default function Pricing() {
  return (
    <main className={styles.overflowHidden}>
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}