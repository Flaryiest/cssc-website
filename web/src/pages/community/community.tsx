import React from 'react';
import styles from './community.module.css';
import Navbar from '@/components/navbar/navbar';

interface TeamMember {
  name: string;
  role: string;
  school: string;
  image: string;
}

interface Alumni {
  name: string;
  year: string;
  currentStatus: string;
}

const Community: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Chen",
      role: "Executive Director",
      school: "University of Calgary",
      image: "/images/team/sarah.jpg"
    },
    {
      name: "Marcus Thompson",
      role: "Competition Coordinator",
      school: "Western Canada High School",
      image: "/images/team/marcus.jpg"
    },
    {
      name: "Aisha Patel",
      role: "Communications Lead",
      school: "Sir Winston Churchill High School",
      image: "/images/team/aisha.jpg"
    },
    {
      name: "David Kim",
      role: "Technical Director",
      school: "University of Calgary",
      image: "/images/team/david.jpg"
    }
  ];

  const alumni: Alumni[] = [
    { name: "Jennifer Wu", year: "2019-2022", currentStatus: "Engineering Student at UofC" },
    { name: "Alex Rodriguez", year: "2019-2021", currentStatus: "Pre-Med at University of Alberta" },
    { name: "Emma Johnson", year: "2020-2023", currentStatus: "Computer Science at SAIT" },
    { name: "Ryan Park", year: "2019-2020", currentStatus: "Medicine at University of Calgary" },
    { name: "Sophie Martin", year: "2021-2023", currentStatus: "Chemistry at Mount Royal University" }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.community}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.floatingElements}>
              <div className={`${styles.element} ${styles.element1}`}>TEAM</div>
              <div className={`${styles.element} ${styles.element2}`}>👥</div>
              <div className={`${styles.element} ${styles.element3}`}>UNITY</div>
              <div className={`${styles.element} ${styles.element4}`}>🎓</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Our Community</h1>
              <p className={styles.heroSubtitle}>
                Meet the passionate individuals who make the CSSC possible
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className={styles.mission}>
          <div className={styles.container}>
            <div className={styles.missionContent}>
              <div className={styles.missionText}>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.missionStatement}>
                  "We believe that science education should be engaging, accessible, and inspiring. Through the Calgary Science Spelling Challenge, we create opportunities for students to explore the beautiful intersection of language and science, fostering both academic excellence and a lifelong love of learning."
                </p>
                <div className={styles.missionValues}>
                  <div className={styles.value}>
                    <i className="fas fa-lightbulb"></i>
                    <h3>Innovation</h3>
                    <p>Creating unique learning experiences</p>
                  </div>
                  <div className={styles.value}>
                    <i className="fas fa-users"></i>
                    <h3>Community</h3>
                    <p>Building connections through collaboration</p>
                  </div>
                  <div className={styles.value}>
                    <i className="fas fa-star"></i>
                    <h3>Excellence</h3>
                    <p>Striving for the highest standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className={styles.team}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <p className={styles.sectionSubtitle}>
              Led by passionate students and recent graduates who are dedicated to science education
            </p>
            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <div key={index} className={styles.teamCard}>
                  <div className={styles.teamImage}>
                    <img src={member.image} alt={member.name} />
                    <div className={styles.teamOverlay}>
                      <div className={styles.teamSocial}>
                        <i className="fab fa-linkedin"></i>
                        <i className="fas fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                  <div className={styles.teamInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.teamRole}>{member.role}</p>
                    <p className={styles.teamSchool}>{member.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Photos */}
        <section className={styles.photos}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Event Highlights</h2>
            <p className={styles.sectionSubtitle}>
              Memories from our previous competitions and community events
            </p>
            <div className={styles.photoGrid}>
              <div className={styles.photoCard}>
                <img src="/images/events/competition-2023.jpg" alt="CSSC 2023 Competition" />
                <div className={styles.photoOverlay}>
                  <h3>CSSC 2023 Finals</h3>
                  <p>Intense competition at the final round</p>
                </div>
              </div>
              <div className={styles.photoCard}>
                <img src="/images/events/team-celebration.jpg" alt="Team Celebration" />
                <div className={styles.photoOverlay}>
                  <h3>Victory Celebration</h3>
                  <p>Champions celebrating their success</p>
                </div>
              </div>
              <div className={styles.photoCard}>
                <img src="/images/events/preparation.jpg" alt="Competition Preparation" />
                <div className={styles.photoOverlay}>
                  <h3>Behind the Scenes</h3>
                  <p>Our team preparing for the event</p>
                </div>
              </div>
              <div className={styles.photoCard}>
                <img src="/images/events/awards-ceremony.jpg" alt="Awards Ceremony" />
                <div className={styles.photoOverlay}>
                  <h3>Awards Ceremony</h3>
                  <p>Recognizing outstanding achievements</p>
                </div>
              </div>
              <div className={styles.photoCard}>
                <img src="/images/events/workshops.jpg" alt="Science Workshops" />
                <div className={styles.photoOverlay}>
                  <h3>Science Workshops</h3>
                  <p>Educational sessions for participants</p>
                </div>
              </div>
              <div className={styles.photoCard}>
                <img src="/images/events/networking.jpg" alt="Community Networking" />
                <div className={styles.photoOverlay}>
                  <h3>Community Building</h3>
                  <p>Students connecting and learning together</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section className={styles.alumni}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Alumni</h2>
            <p className={styles.sectionSubtitle}>
              Former team members who have gone on to pursue their passion for science
            </p>
            <div className={styles.alumniGrid}>
              {alumni.map((alum, index) => (
                <div key={index} className={styles.alumniCard}>
                  <div className={styles.alumniInfo}>
                    <h3>{alum.name}</h3>
                    <p className={styles.alumniYear}>{alum.year}</p>
                    <p className={styles.alumniStatus}>{alum.currentStatus}</p>
                  </div>
                  <div className={styles.alumniIcon}>
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <div className={styles.footerSection}>
                <div className={styles.footerLogo}>
                  <i className="fas fa-atom"></i>
                  <span>Calgary Science Spelling Challenge</span>
                </div>
                <p>Inspiring the next generation of scientists through the power of words.</p>
              </div>
              <div className={styles.footerSection}>
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/information">Information</a></li>
                  <li><a href="/community">Community</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h3>Contact</h3>
                <ul>
                  <li><i className="fas fa-envelope"></i> info@csschallenge.org</li>
                  <li><i className="fas fa-phone"></i> (403) 555-0123</li>
                  <li><i className="fas fa-map-marker-alt"></i> Calgary, AB</li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>&copy; 2024 Calgary Science Spelling Challenge. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Community;
