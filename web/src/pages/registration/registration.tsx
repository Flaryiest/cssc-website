import React, { useState, useEffect } from 'react';
import styles from './registration.module.css';
import NavbarTwo from '@/components/navbarTwo/navbarTwo';

const Registration: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <NavbarTwo />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.heroBadge}>
                <span>Registration</span>
              </div>
              <h1>Join the Challenge</h1>
              <p>Be part of Calgary's premier science spelling competition</p>
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
                <i className="fas fa-clock"></i>
              </div>
              
              <div className={styles.statusContent}>
                <h2>Registration Opening Soon</h2>
                <p className={styles.statusMessage}>
                  Registration for the 2026 Calgary Science Spelling Challenge has not begun yet. 
                  Our team is currently working hard to prepare an amazing competition experience for you.
                </p>
                
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <i className="fas fa-cog fa-spin"></i>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Currently</h3>
                      <p>Planning and preparing for 2026</p>
                    </div>
                  </div>
                  
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <i className="fas fa-calendar-plus"></i>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Coming Soon</h3>
                      <p>Registration will open in early 2026</p>
                    </div>
                  </div>
                  
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Competition Day</h3>
                      <p>Spring 2026 - Date TBD</p>
                    </div>
                  </div>
                </div>

                <div className={styles.notifySection}>
                  <h3>Stay Updated</h3>
                  <p>Want to be the first to know when registration opens? Keep an eye on our website or contact us directly!</p>
                  
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
                  When registration opens, you'll be able to sign up individually or as a team. 
                  We'll provide all the details about competition format, rules, and requirements.
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