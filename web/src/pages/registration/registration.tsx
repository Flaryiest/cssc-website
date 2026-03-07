import React, { useState, useEffect } from 'react';
import styles from './registration.module.css';
import NavbarTwo from '@/components/navbarTwo/navbarTwo';
import ScrollToTop from '@/components/scrollToTop/scrollToTop';
const Registration: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <NavbarTwo />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.heroBadge}>
                <span>Registration Open</span>
              </div>
              <h1>Join the Challenge</h1>
              <p>Registration for the 8th CSSC is now open!</p>
            </div>
            <div className={styles.heroGraphics}>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-users"></i>
                </div>
                <div className={styles.cardContent}>
                  <h4>Team Competition</h4>
                  <p>3 students per team</p>
                </div>
              </div>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-trophy"></i>
                </div>
                <div className={styles.cardContent}>
                  <h4>3 Rounds</h4>
                  <p>Individual & Team</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroBackground}>
            <div className={styles.gradientBlob}></div>
            <div className={styles.gradientBlob}></div>
            <div className={styles.gradientBlob}></div>
          </div>
        </section>

        <section className={styles.statusSection}>
          <div className={styles.container}>
            <div className={styles.statusCard}>
              <div className={styles.statusIcon}>
                <i className="fas fa-check-circle"></i>
              </div>
              
              <div className={styles.statusContent}>
                <h2>Registration is Now Open!</h2>
                <p className={styles.statusMessage}>
                  Registration for the 8th Calgary Science Spelling Challenge is officially open.
                  Sign up your team and get ready for an exciting day of science and spelling!
                </p>

                <div className={styles.detailsGrid}>
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <h3>Date</h3>
                    <p>April 19th, 2026</p>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Location</h3>
                    <p>UofC MS Building</p>
                  </div>
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <i className="fas fa-clock"></i>
                    </div>
                    <h3>Time</h3>
                    <p>9:30 AM – 4:30 PM</p>
                  </div>
                </div>
                
                <div className={styles.registerCta}>
                  <a
                    href="https://bit.ly/8thCSSC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    <i className="fas fa-pen"></i>
                    Register Now
                  </a>
                </div>

                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={`${styles.timelineIcon} ${styles.timelineComplete}`}>
                      <i className="fas fa-check"></i>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Registration Open</h3>
                      <p>Sign up your team today</p>
                    </div>
                  </div>
                  
                  <div className={styles.timelineItem}>
                    <div className={`${styles.timelineIcon} ${styles.timelineComplete}`}>
                      <i className="fas fa-check"></i>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Prepare</h3>
                      <p>
                        <a
                          href="/general/8th CSSC Practice List.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.practiceListLink}
                        >
                          <i className="fas fa-download"></i> Download Practice Word List
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Competition Day</h3>
                      <p>April 19th, 2026</p>
                    </div>
                  </div>
                </div>

                <div className={styles.notifySection}>
                  <h3>Questions?</h3>
                  <p>If you have any questions about registration or the competition, feel free to reach out to us!</p>
                  <div className={styles.actionButtons}>
                    <a href="mailto:admin@csschallenge.org" className={styles.secondaryButton}>
                      <i className="fas fa-envelope"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-info-circle"></i>
                </div>
                <h3>What to Expect</h3>
                <p>
                  Sign up individually or as a team of three. Check out the competition format 
                  on our home page for details on the three rounds.
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Eligibility</h3>
                <p>
                  The competition is open to junior high school students in the Calgary area. 
                  Teams can be formed across different schools and grade levels.
                </p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fas fa-medal"></i>
                </div>
                <h3>Prizes & Recognition</h3>
                <p>
                  Winners receive trophies and recognition for their achievements. 
                  All participants gain valuable experience and knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registration;