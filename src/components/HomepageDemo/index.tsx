import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function HomepageDemo(): JSX.Element {
  return (
    <>
      <section className={styles.demoSection}>
        <div className="container">
          <div className={clsx('text--center', styles.demoHeader)}>
            <h2>Demo</h2>
          </div>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className={styles.demoWrapper}>
                <iframe
                  className={styles.demoVideo}
                  src="https://www.youtube.com/embed/yiFCDZLasyw"
                  title="Robot Agent Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
} 