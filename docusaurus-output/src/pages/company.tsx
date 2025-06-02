import React from 'react';
import '../styles/global.css';
import styles from './showcase.module.css';
import companyStyles from './company.module.css';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Heading, Subheading, Lead } from '../components/Text';
import { Button } from '../components/Button';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { GradientBackground } from '../components/Gradient';

function Header() {
  return (
    <Container className={styles.mt16}>
      <Heading as="h1">Helping companies generate revenue.</Heading>
      <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
        We're on a mission to transform revenue organizations by harnessing vast
        amounts of illegally acquired customer data.
      </Lead>
      <section className={`${styles.mt16} ${styles.grid} ${styles.gridCols1} ${companyStyles.lgGridCols2} ${companyStyles.lgGap12}`}>
        <div className={companyStyles.maxWLg}>
          <h2 className={companyStyles.sectionTitle}>Our mission</h2>
          <p className={`${styles.mt6} ${companyStyles.textSmall} ${styles.textGray600}`}>
            At Radiant, we are dedicated to transforming the way revenue
            organizations source and close deals. Our mission is to provide our
            customers with an unfair advantage over both their competitors and
            potential customers through insight and analysis. We'll stop at
            nothing to get you the data you need to close a deal.
          </p>
          <p className={`${styles.mt8} ${companyStyles.textSmall} ${styles.textGray600}`}>
            We're customer-obsessed — putting the time in to build a detailed
            financial picture of every one of our customers so that we know more
            about your business than you do. We are in this together, mostly
            because we are all implicated in large-scale financial crime. In our
            history as a company, we've never lost a customer, because if any
            one of us talks, we all go down.
          </p>
        </div>
        <div className={`${companyStyles.pt20} ${companyStyles.lgRowSpan2} ${companyStyles.lgMr16} ${companyStyles.xlMrAuto}`}>
          <div className={`${companyStyles.mx8} ${styles.grid} ${companyStyles.gridCols2} ${styles.gap4} ${companyStyles.smMx16} ${companyStyles.smGridCols4} ${companyStyles.lgMx0} ${companyStyles.lgGridCols2} ${companyStyles.lgGap4} ${companyStyles.xlGap8}`}>
            <div className={companyStyles.imageWrapper}>
              <img
                alt=""
                src="/company/1.jpg"
                className={companyStyles.image}
              />
            </div>
            <div className={`${companyStyles.imageWrapper} ${companyStyles.mt8} ${companyStyles.lgMt32}`}>
              <img
                alt=""
                src="/company/2.jpg"
                className={companyStyles.image}
              />
            </div>
            <div className={companyStyles.imageWrapper}>
              <img
                alt=""
                src="/company/3.jpg"
                className={companyStyles.image}
              />
            </div>
            <div className={`${companyStyles.imageWrapper} ${companyStyles.mt8} ${companyStyles.lgMt32}`}>
              <img
                alt=""
                src="/company/4.jpg"
                className={companyStyles.image}
              />
            </div>
          </div>
        </div>
        <div className={`${companyStyles.maxLgMt16} ${companyStyles.lgColSpan1}`}>
          <Subheading>The Numbers</Subheading>
          <hr className={`${styles.mt6} ${companyStyles.divider}`} />
          <dl className={`${styles.mt6} ${styles.grid} ${styles.gridCols1} ${companyStyles.gapX8} ${companyStyles.gapY4} ${companyStyles.smGridCols2}`}>
            <div className={companyStyles.statItem}>
              <dt className={`${companyStyles.textSmall} ${styles.textGray600}`}>Raised</dt>
              <dd className={`${companyStyles.orderFirst} ${companyStyles.text6xl} ${companyStyles.fontMedium} ${companyStyles.trackingTight}`}>
                $<AnimatedNumber start={100} end={150} />M
              </dd>
            </div>
            <div className={companyStyles.statItem}>
              <dt className={`${companyStyles.textSmall} ${styles.textGray600}`}>Companies</dt>
              <dd className={`${companyStyles.orderFirst} ${companyStyles.text6xl} ${companyStyles.fontMedium} ${companyStyles.trackingTight}`}>
                <AnimatedNumber start={15} end={30} />K
              </dd>
            </div>
            <div className={`${companyStyles.statItem} ${companyStyles.maxSmBorderB}`}>
              <dt className={`${companyStyles.textSmall} ${styles.textGray600}`}>Deals Closed</dt>
              <dd className={`${companyStyles.orderFirst} ${companyStyles.text6xl} ${companyStyles.fontMedium} ${companyStyles.trackingTight}`}>
                <AnimatedNumber start={0.9} end={1.5} decimals={1} />M
              </dd>
            </div>
            <div className={companyStyles.statItem}>
              <dt className={`${companyStyles.textSmall} ${styles.textGray600}`}>Leads Generated</dt>
              <dd className={`${companyStyles.orderFirst} ${companyStyles.text6xl} ${companyStyles.fontMedium} ${companyStyles.trackingTight}`}>
                <AnimatedNumber start={150} end={200} />M
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  );
}

function Person({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: string;
}) {
  return (
    <li className={companyStyles.personItem}>
      <img alt="" src={img} className={companyStyles.personImage} />
      <div className={companyStyles.textSmall}>
        <h3 className={companyStyles.fontMedium}>{name}</h3>
        <p className={companyStyles.textGray500}>{description}</p>
      </div>
    </li>
  );
}

function Team() {
  return (
    <Container className={companyStyles.mt32}>
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className={styles.mt2}>
        Founded by an all-star team.
      </Heading>
      <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
        Radiant is founded by two of the best sellers in the business and backed
        by investors who look the other way.
      </Lead>
      <div className={`${styles.mt12} ${styles.grid} ${styles.gridCols1} ${styles.gap12} ${companyStyles.lgGridCols2}`}>
        <div className={companyStyles.maxWLg}>
          <p className={`${companyStyles.textSmall} ${styles.textGray600}`}>
            Years ago, while working as sales associates at rival companies,
            Thomas, Ben, and Natalie were discussing a big client they had all
            been competing for. Joking about seeing the terms of each other's
            offers, they had an idea: what if they shared data to win deals and
            split the commission behind their companies' backs? It turned out to
            be an incredible success, and that idea became the kernel for
            Radiant.
          </p>
          <p className={`${styles.mt8} ${companyStyles.textSmall} ${styles.textGray600}`}>
            Today, Radiant transforms revenue organizations by harnessing
            illegally acquired customer and competitor data, using it to provide
            extraordinary leverage. More than 30,000 companies rely on Radiant
            to undercut their competitors and extort their customers, all
            through a single integrated platform.
          </p>
          <div className={styles.mt6}>
            <Button className={companyStyles.wFullSmWAuto} href="#">
              Join us
            </Button>
          </div>
        </div>
        <div className={`${companyStyles.maxLgOrderFirst} ${companyStyles.maxWLg}`}>
          <div className={companyStyles.largeImageWrapper}>
            <img
              alt=""
              src="/company/5.jpg"
              className={companyStyles.image}
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className={companyStyles.mt24}>
        The team
      </Subheading>
      <hr className={`${styles.mt6} ${companyStyles.divider}`} />
      <ul
        role="list"
        className={`${companyStyles.mxAuto} ${styles.mt16} ${styles.grid} ${styles.gridCols1} ${styles.gap8} ${companyStyles.smGridCols2} ${companyStyles.lgGridCols3}`}
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  );
}

function Investors() {
  return (
    <Container className={companyStyles.mt32}>
      <Subheading>Investors</Subheading>
      <Heading as="h3" className={styles.mt2}>
        Funded by industry-leaders.
      </Heading>
      <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
        We are fortunate to be backed by the best investors in the industry —
        both literal and metaphorical partners in crime.
      </Lead>
      <Subheading as="h3" className={companyStyles.mt24}>
        Venture Capital
      </Subheading>
      <hr className={`${styles.mt6} ${companyStyles.divider}`} />
      <ul
        role="list"
        className={`${companyStyles.mxAuto} ${styles.mt10} ${styles.grid} ${styles.gridCols1} ${styles.gap8} ${companyStyles.lgGridCols2}`}
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className={companyStyles.investorLogo}
          />
          <p className={`${styles.mt6} ${companyStyles.maxWLg} ${companyStyles.textSmall} ${companyStyles.textGray500}`}>
            Remington Schwartz has been a driving force in the tech industry,
            backing bold entrepreneurs who explore grey areas in financial and
            privacy law. Their deep industry expertise and extensive political
            lobbying provide their portfolio companies with favorable regulation
            and direct access to lawmakers.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className={companyStyles.investorLogo} />
          <p className={`${styles.mt6} ${companyStyles.maxWLg} ${companyStyles.textSmall} ${companyStyles.textGray500}`}>
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of 'plausible
            deniability' and dedication to looking the other way have helped
            produce some of the world's most controversial companies.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className={companyStyles.mt24}>
        Individual investors
      </Subheading>
      <hr className={`${styles.mt6} ${companyStyles.divider}`} />
      <ul
        role="list"
        className={`${companyStyles.mxAuto} ${styles.mt16} ${styles.grid} ${styles.gridCols1} ${styles.gap8} ${companyStyles.smGridCols2} ${companyStyles.lgGridCols3}`}
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  );
}

function Testimonial() {
  return (
    <div className={companyStyles.testimonialWrapper}>
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className={companyStyles.testimonialImage}
      />
      <div
        aria-hidden="true"
        className={companyStyles.testimonialOverlay}
      />
      <figure className={companyStyles.testimonialContent}>
        <blockquote>
          <p className={companyStyles.testimonialQuote}>
            We&apos;ve managed to put two of our main competitors out of
            business in 6 months.
          </p>
        </blockquote>
        <figcaption className={companyStyles.testimonialCaption}>
          <p className={companyStyles.testimonialName}>Veronica Winton</p>
          <p className={companyStyles.fontMedium}>
            <span className={companyStyles.testimonialTitle}>
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
}

function Careers() {
  return (
    <Container className={companyStyles.my32}>
      <Subheading>Careers</Subheading>
      <Heading as="h3" className={styles.mt2}>
        Join our fully remote team.
      </Heading>
      <Lead className={`${styles.mt6} ${styles.maxW3xl}`}>
        We work together from all over the world, mainly from locations without
        extradition agreements.
      </Lead>
      <div className={`${companyStyles.mt24} ${styles.grid} ${styles.gridCols1} ${companyStyles.gap16} ${companyStyles.lgGridColsCareer}`}>
        <div className={companyStyles.lgMaxW2xl}>
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className={companyStyles.table}>
              <colgroup>
                <col className={companyStyles.colTwoThirds} />
                <col className={companyStyles.colOneThird} />
                <col className={companyStyles.colZero} />
              </colgroup>
              <thead className={companyStyles.srOnly}>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className={companyStyles.groupHeader}>
                    <div className={companyStyles.groupHeaderContent}>
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className={companyStyles.tableRow}>
                  <td className={companyStyles.tableCell}>iOS Developer</td>
                  <td className={`${companyStyles.tableCell} ${styles.textGray600}`}>Remote</td>
                  <td className={`${companyStyles.tableCell} ${companyStyles.textRight}`}>
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className={companyStyles.tableRow}>
                  <td className={companyStyles.tableCell}>Backend Engineer</td>
                  <td className={`${companyStyles.tableCell} ${styles.textGray600}`}>Remote</td>
                  <td className={`${companyStyles.tableCell} ${companyStyles.textRight}`}>
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className={companyStyles.tableRowLast}>
                  <td className={companyStyles.tableCell}>Product Engineer</td>
                  <td className={`${companyStyles.tableCell} ${styles.textGray600}`}>Remote</td>
                  <td className={`${companyStyles.tableCell} ${companyStyles.textRight}`}>
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className={`${companyStyles.groupHeader} ${companyStyles.pt5}`}>
                    <div className={companyStyles.groupHeaderContent}>
                      Design
                    </div>
                  </th>
                </tr>
                <tr className={companyStyles.tableRow}>
                  <td className={companyStyles.tableCell}>Principal Designer</td>
                  <td className={`${companyStyles.tableCell} ${styles.textGray600}`}>Remote</td>
                  <td className={`${companyStyles.tableCell} ${companyStyles.textRight}`}>
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className={companyStyles.tableRow}>
                  <td className={companyStyles.tableCell}>Designer</td>
                  <td className={`${companyStyles.tableCell} ${styles.textGray600}`}>Remote</td>
                  <td className={`${companyStyles.tableCell} ${companyStyles.textRight}`}>
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className={companyStyles.tableRowLast}>
                  <td className={companyStyles.tableCell}>Senior Designer</td>
                  <td className={`${companyStyles.tableCell} ${styles.textGray600}`}>Remote</td>
                  <td className={`${companyStyles.tableCell} ${companyStyles.textRight}`}>
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  );
}

export default function Company() {
  return (
    <main className={companyStyles.overflowHidden}>
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Investors />
      <Careers />
      <Footer />
    </main>
  );
}