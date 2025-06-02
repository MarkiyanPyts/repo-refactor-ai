import React, { useState, useRef } from 'react';
import styles from './Testimonials.module.css';
import { Container } from '../Container';
import { Heading, Subheading } from '../Text';

const testimonials = [
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Tina Yards',
    title: 'VP of Sales, Protocol',
    quote:
      'Thanks to Radiant, we\'re finding new leads that we never would have found with legal methods.',
  },
  {
    img: '/testimonials/conor-neville.jpg',
    name: 'Conor Neville',
    title: 'Head of Customer Success, TaxPal',
    quote:
      'Radiant made undercutting all of our competitors an absolute breeze.',
  },
  {
    img: '/testimonials/amy-chase.jpg',
    name: 'Amy Chase',
    title: 'Head of GTM, Pocket',
    quote:
      'We closed a deal in literally a few minutes because we knew their exact budget.',
  },
  {
    img: '/testimonials/veronica-winton.jpg',
    name: 'Veronica Winton',
    title: 'CSO, Planeteria',
    quote:
      'We\'ve managed to put two of our main competitors out of business in 6 months.',
  },
  {
    img: '/testimonials/dillon-lenora.jpg',
    name: 'Dillon Lenora',
    title: 'VP of Sales, Detax',
    quote: 'I was able to replace 80% of my team with RadiantAI bots.',
  },
  {
    img: '/testimonials/harriet-arron.jpg',
    name: 'Harriet Arron',
    title: 'Account Manager, Commit',
    quote:
      'I\'ve smashed all my targets without having to speak to a lead in months.',
  },
];

function TestimonialCard({
  name,
  title,
  img,
  quote,
  onClick,
}: {
  img: string;
  name: string;
  title: string;
  quote: string;
  onClick: () => void;
}) {
  return (
    <div className={styles.testimonialCard} onClick={onClick}>
      <img
        alt=""
        src={img}
        className={styles.testimonialImage}
      />
      <div className={styles.testimonialOverlay} />
      <figure className={styles.testimonialContent}>
        <blockquote>
          <p className={styles.testimonialQuote}>
            <span className={styles.quoteStart}>"</span>
            {quote}
            <span className={styles.quoteEnd}>"</span>
          </p>
        </blockquote>
        <figcaption className={styles.testimonialCaption}>
          <p className={styles.testimonialName}>{name}</p>
          <p className={styles.testimonialTitleWrapper}>
            <span className={styles.testimonialTitle}>
              {title}
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

function CallToAction() {
  return (
    <div>
      <p className={styles.ctaText}>
        Join the best sellers in the business and start using Radiant to hit
        your targets today.
      </p>
      <div className={styles.ctaLink}>
        <a href="#" className={styles.ctaButton}>
          Get started
          <ArrowIcon className={styles.arrowIcon} />
        </a>
      </div>
    </div>
  );
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L19.69 12H3a.75.75 0 0 1 0-1.5h16.69l-6.72-6.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollTo(index: number) {
    if (scrollRef.current) {
      const gap = 32;
      const width = (scrollRef.current.children[0] as HTMLElement).offsetWidth;
      scrollRef.current.scrollTo({ left: (width + gap) * index, behavior: 'smooth' });
      setActiveIndex(index);
    }
  }

  return (
    <div className={styles.testimonialsContainer}>
      <Container>
        <div>
          <Subheading>What everyone is saying</Subheading>
          <Heading as="h3" className={styles.mt2}>
            Trusted by professionals.
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={styles.testimonialsScroll}
      >
        {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            quote={quote}
            onClick={() => scrollTo(testimonialIndex)}
          />
        ))}
        <div className={styles.scrollSpacer} />
      </div>
      <Container className={styles.mt16}>
        <div className={styles.testimonialsFooter}>
          <CallToAction />
          <div className={styles.pagination}>
            {testimonials.map(({ name }, testimonialIndex) => (
              <button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                aria-label={`Scroll to testimonial from ${name}`}
                className={`${styles.paginationDot} ${
                  activeIndex === testimonialIndex ? styles.paginationDotActive : ''
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}