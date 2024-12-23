import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import HomepageUseCases from '@site/src/components/HomepageUseCases';
import HomepageDemo from '@site/src/components/HomepageDemo';

import styles from './index.module.css';

function MainImage() {
  return (
    <section className={styles.mainImageSection}>
      <div className="container">
        <div className="text--center">
          <img 
            src="/img/main_image.png" 
            alt="Main architecture diagram"
            className={styles.mainImage}
          />
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started in 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <MainImage />
      <main>
        <HomepageFeatures />
        <HomepageDemo />
        <HomepageUseCases />

      </main>
    </Layout>
  );
}
