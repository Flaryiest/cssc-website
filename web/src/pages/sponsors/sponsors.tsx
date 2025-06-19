import React from 'react';
import styles from './sponsors.module.css';
import NavbarTwo from '@/components/navbarTwo/navbarTwo';

interface Sponsor {
  name: string;
  description: string;
  image: string;
  website?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Calgary Foundation",
    description: "The Calgary Foundation is committed to building a healthy, vibrant community where everyone belongs and has the opportunity to thrive.",
    image: "/sponsors/calgary-foundation.webp",
    website: "https://calgaryfoundation.org"
  },
  {
    name: "Fortis Alberta",
    description: "Fortis Alberta is committed to providing safe and reliable electricity to Albertans while supporting community initiatives and education.",
    image: "/sponsors/fortis.webp",
    website: "https://www.fortisalberta.com"
  },
  {
    name: "University of Calgary",
    description: "The University of Calgary is a leading Canadian university located in one of Canada's most enterprising cities.",
    image: "/sponsors/uofc-sponsor.webp",
    website: "https://ucalgary.ca"
  },
  {
    name: "Optimist Club",
    description: "Optimist International brings out the best in children, in ourselves and in our communities through programs that focus on giving back.",
    image: "/sponsors/optimist-club-main-logo.webp",
    website: "https://optimist.org"
  }
];

const SponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
  const handleCardClick = () => {
    if (sponsor.website) {
      window.open(sponsor.website, '_blank');
    }
  };

  return (
    <div 
      className={styles.sponsorCard}
      onClick={handleCardClick}
      style={{ cursor: sponsor.website ? 'pointer' : 'default' }}
    >
      <div className={styles.sponsorImage}>
        <img src={sponsor.image} alt={sponsor.name} />
      </div>
      <div className={styles.sponsorContent}>
        <h3>{sponsor.name}</h3>
        <p>{sponsor.description}</p>
        {sponsor.website && (
          <div className={styles.visitButton}>
            <span>Visit Website</span>
            <i className="fas fa-external-link-alt"></i>
          </div>
        )}
      </div>
    </div>
  );
};

const Sponsors: React.FC = () => {
  return (
    <>
      <NavbarTwo />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Our Sponsors</h1>
            <p>Thank you to our amazing sponsors who make the Calgary Science Spelling Challenge possible</p>
          </div>
        </section>

        <section className={styles.sponsorsSection}>
          <div className={styles.container}>
            <div className={styles.introText}>
              <h2>Partners in Education</h2>
              <p>
                The Calgary Science Spelling Challenge is made possible through the generous support 
                of our sponsors. These organizations share our commitment to fostering scientific 
                literacy and educational excellence in our community.
              </p>
            </div>

            <div className={styles.sponsorsGrid}>
              {sponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>

            <div className={styles.partnershipSection}>
              <div className={styles.partnershipCard}>
                <h3>Become a Sponsor</h3>
                <p>
                  Join our mission to inspire the next generation of scientists. Partner with us 
                  to support educational excellence and scientific literacy in Calgary.
                </p>
                <a href="mailto:partnerships@csschallenge.org" className={styles.partnershipButton}>
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sponsors;