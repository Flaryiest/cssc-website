import React from 'react';
import styles from './community.module.css';
import NavbarTwo from '@/components/navbarTwo/navbarTwo';
import ScrollToTop from '@/components/scrollToTop/scrollToTop';

interface TeamMember {
  name: string;
  position: string;
  year: string;
  image: string;
}

interface AlumniMember {
  name: string;
  position?: string;
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

const alumniMembers: AlumniMember[] = [
  {
    name: "Roy Han",
    position: "Founder",
    year: "Class of 2025 Harvard University",
    image: "/alumni/roy.webp"
  },
  {
    name: "Debadrita Chowdhury",
    year: "Class of 2024 University of Alberta",
    image: "/alumni/deb.webp"
  },
  {
    name: "Ali Waseem",
    year: "Class of 2023 Dow International Medical College",
    image: "/alumni/ali.webp"
  },
  {
    name: "Aaron Abraham",
    year: "Class of 2023 University of Waterloo",
    image: "/alumni/aaron.webp"
  },
  {
    name: "Monica Aida Lopez Quiroz",
    year: "Class of 2020 – Westmount Charter School",
    image: "/alumni/monica.webp"
  },
  {
    name: "Yifan Wang",
    year: "Class of 2020 – Western Canada High School",
    image: "/alumni/yifan.webp"
  },
  {
    name: "Jason Xie",
    year: "Class of 2022 – Sir Winston Churchill High School",
    image: "/alumni/jason.webp"
  },
  {
    name: "Awad Khalid",
    year: "Class of 2022 – Webber Academy",
    image: "/alumni/awad.webp"
  },
  {
    name: "Eric Sun",
    year: "Alumni",
    image: "/alumni/eric.webp"
  },
  {
    name: "Nathan Zhao",
    year: "Alumni",
    image: "/alumni/nathan.webp"
  },
  {
    name: "Ryan Han",
    year: "Alumni",
    image: "/alumni/ryan.webp"
  },
  {
    name: "Weilan Zhang",
    year: "Alumni",
    image: "/alumni/weilan.webp"
  },
  {
    name: "Andrew Xu",
    year: "Alumni",
    image: "/alumni/andrew.webp"
  },
  {
    name: "Ahyan Kabir",
    year: "University of Waterloo",
    image: "/alumni/ahyan.webp"
  },
  {
    name: "Joshua Cheng",
    year: "Alumni",
    image: "/alumni/joshua.webp"
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

const HexagonAlumni: React.FC<{ member: AlumniMember }> = ({ member }) => {
  return (
    <div className={styles.hexagon}>
      <img src={member.image} alt={member.name} className={styles.hexagonImage} />
      <div className={styles.hexagonOverlay}>
        <div className={styles.memberInfo}>
          <h3>{member.name}</h3>
          {member.position && <p className={styles.position}>{member.position}</p>}
          <p className={styles.year}>{member.year}</p>
        </div>
      </div>
    </div>
  );
};

const Community: React.FC = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
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

        <section className={styles.alumniSection}>
          <div className={styles.container}>
            <h2>Our Alumni</h2>
            <p className={styles.alumniDescription}>
              We are proud of our alumni who have gone on to pursue their dreams in higher education and beyond. 
              Their contributions to CSSC have helped shape the competition into what it is today.
            </p>
            <div className={styles.hexagonMain}>
              <div className={styles.hexagonContainer}>
                {alumniMembers.map((member) => (
                  <HexagonAlumni key={member.name} member={member} />
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