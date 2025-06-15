import React, { useEffect, useRef } from 'react';
import styles from './home.module.css';
import Navbar from '@/components/navbar/navbar';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.01;
          particle.vy -= (dy / distance) * force * 0.01;
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      resize();
      createParticles();
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particlesCanvas} />;
};

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return <>
    <Navbar/>
    <div className={styles.home}>
      <ParticleCanvas />
      <main>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleLine}>Calgary Science</span>
                <span className={styles.titleLine}>Spelling Challenge</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Igniting passion for science through the power of words
              </p>
              <div className={styles.heroButtons}>
                <button className={`${styles.btn} ${styles.btnPrimary}`}>
                  Register
                </button>
                <button className={`${styles.btn} ${styles.btnSecondary}`}>
                  Learn More
                </button>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.floatingElements}>
                <div className={`${styles.element} ${styles.element1}`}>H</div>
                <div className={`${styles.element} ${styles.element2}`}>DNA</div>
                <div className={`${styles.element} ${styles.element3}`}>π</div>
                <div className={`${styles.element} ${styles.element4}`}>∆E</div>
                <div className={`${styles.element} ${styles.element5}`}>CO₂</div>
              </div>
            </div>
          </div>
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollDot}></div>
          </div>
        </section>

        {/* Why CSSC Section */}
        <section id="why-cssc" className={styles.whyCssc}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why CSSC?</h2>
            <div className={styles.whyCsscContent}>
              <div className={styles.whyCsscText}>
                <div className={styles.subsection}>
                  <h3>Who are we?</h3>
                  <p>We are a student-led organization committed to providing a diverse and unique learning experience to junior high students in a setting that emphasizes both individuality and teamwork.</p>
                </div>
                <div className={styles.subsection}>
                  <h3>What do we do?</h3>
                  <p>Our mission is simple: bring students together to compete, to collaborate, and to spark deeper thinking about the connection between language and science.</p>
                </div>
              </div>
              <div className={styles.whyCsscImage}>
                <img src="/images/students-collaborating.jpg" alt="Students collaborating on science projects" />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="statistics" className={styles.statistics}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className={styles.statContent}>
                  <h3>2019</h3>
                  <p>The CSSC was founded in 2019 by a group of high school students across Calgary.</p>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-trophy"></i>
                </div>
                <div className={styles.statContent}>
                  <h3>6</h3>
                  <p>Successfully run competitions</p>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <i className="fas fa-users"></i>
                </div>
                <div className={styles.statContent}>
                  <h3>400+</h3>
                  <p>Over 400 total participants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Format Section */}
        <section id="format" className={styles.format}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Competition Format</h2>
            <p className={styles.sectionSubtitle}>The CSSC is split across three unique rounds:</p>
            
            <div className={styles.formatGrid}>
              <div className={styles.formatCard}>
                <div className={styles.formatHeader}>
                  <div className={styles.roundNumber}>Round 1</div>
                  <div className={styles.roundType}>Individual</div>
                </div>
                <div className={styles.formatImage}>
                  <img src="/images/individual-competition.jpg" alt="Student competing individually" />
                </div>
                <div className={styles.formatContent}>
                  <p>30 words from biology, chemistry, or physics worth 1, 2 or 3 points will be read out, one at a time, to competitors. To earn points, the competitor must write them correctly within a time limit. The most points wins!</p>
                </div>
              </div>

              <div className={styles.formatCard}>
                <div className={styles.formatHeader}>
                  <div className={styles.roundNumber}>Round 2</div>
                  <div className={styles.roundType}>Individual</div>
                </div>
                <div className={styles.formatImage}>
                  <img src="/images/spelling-knockout.jpg" alt="Students in knockout spelling round" />
                </div>
                <div className={styles.formatContent}>
                  <p>Competitors must first spell as many words as possible in 2 fast-paced rounds. The top performers then move to a knockout stage, taking turns to spell words verbally. The last person standing wins!</p>
                </div>
              </div>

              <div className={styles.formatCard}>
                <div className={styles.formatHeader}>
                  <div className={styles.roundNumber}>Round 3</div>
                  <div className={styles.roundType}>Team</div>
                </div>
                <div className={styles.formatImage}>
                  <img src="/images/team-competition.jpg" alt="Teams competing for the CSSC trophy" />
                </div>
                <div className={styles.formatContent}>
                  <p>After 3 preliminary cycles, the top 8 teams will compete in a bracket to determine the winner of the CSSC trophy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.contact}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.contactDescription}>
              If you have any questions, please do not hesitate to reach out!
            </p>
            <div className={styles.contactButton}>
              <a href="mailto:info@csschallenge.org" className={`${styles.btn} ${styles.btnPrimary}`}>
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

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
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('why-cssc')}>Why CSSC</button></li>
                <li><button onClick={() => scrollToSection('format')}>Format</button></li>
                <li><button onClick={() => scrollToSection('statistics')}>Stats</button></li>
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
};

export default Home;
