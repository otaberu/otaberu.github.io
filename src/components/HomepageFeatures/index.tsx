import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Decentralized Architecture',
    emoji: '🌐',
    description: (
      <>
        Built on libp2p protocol, enabling secure peer-to-peer communication without central servers.
      </>
    ),
  },
  {
    title: 'Docker Integration',
    emoji: '🐳',
    description: (
      <>
        Launch and manage Docker containers across your fleet with built-in terminal access.
      </>
    ),
  },
  {
    title: 'Web & CLI Interface',
    emoji: '💻',
    description: (
      <>
        Manage your fleet through an intuitive web interface or powerful command-line tools.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresHeader}>
            <Heading as="h2">Features</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
}
