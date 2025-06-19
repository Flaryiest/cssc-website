import React from 'react';
import styles from './community.module.css';
import NavbarTwo from '@/components/navbarTwo/navbarTwo';

interface TeamMember {
  name: string;
  position: string;
  year: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Janice Xie",
    position: "President",
    year: "Class of 2026 – Sir Winston Churchill High School",
    image: "/team/Janice.webp"
  },
  {
    name: "Cheri Dang",
    position: "Deputy Director",
    year: "Class of 2026 – Westmount Charter School",
    image: "/team/Cheri.webp"
  },
  {
    name: "Haotian Fang",
    position: "IT Director",
    year: "Class of 2026 – Sir Winston Churchill High School",
    image: "/team/Haotian.webp"
  },
  {
    name: "Misha Kapadia",
    position: "Outreach Director",
    year: "Class of 2026 – Westmount Charter School",
    image: "/team/Misha.webp"
  },
  {
    name: "Bohan Hao",
    position: "Finance Director",
    year: "Class of 2026 – Sir Winston Churchill High School",
    image: "/team/Bohan.webp"
  },
  {
    name: "Amy Liu",
    position: "Finance Director",
    year: "Class of 2026 – Sir Winston Churchill High School",
    image: "/team/Amy.webp"
  },
  {
    name: "Avani Deshpande",
    position: "Operations Director",
    year: "Class of 2026 – North Trail High School",
    image: "/team/Avani.webp"
  },
  {
    name: "Jasper Zhao",
    position: "Operations Director",
    year: "Class of 2027 – Western Canada High School",
    image: "/team/Jasper.webp"
  },
  {
    name: "Adonia Li",
    position: "Content Director",
    year: "Class of 2026 – Sir Winston Churchill High School",
    image: "/team/Adonia.webp"
  },
  {
    name: "Isabel W",
    position: "Content Director",
    year: "Class of 2027 – Westmount Charter School",
    image: "/team/Isabel.webp"
  }
];

const HexagonMember: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className={styles.hexagon}>
      <img src={member.image} alt={member.name} className={styles.hexagonImage} />
      <div className={styles.hexagonOverlay}>
        <div className={styles.memberInfo}>
          <h3>{member.name}</h3>
          <p className={styles.position}>{member.position}</p>
          <p className={styles.year}>{member.year}</p>
        </div>
      </div>
    </div>
  );
};

const Community: React.FC = () => {
  return (
    <>
      <NavbarTwo />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Our Community</h1>
            <p>Meet the dedicated team behind the Calgary Science Spelling Challenge</p>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.container}>
            <h2>Our Team</h2>
            <div className={styles.hexagonMain}>
              <div className={styles.hexagonContainer}>
                {teamMembers.map((member) => (
                  <HexagonMember key={member.name} member={member} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Community;