import styles from './navbar.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.leftSection}>
            <div className={styles.logo}>
              <Link
                to="/"
                className={styles.logoLink}
                onClick={handleCloseMenu}
              >
                <img
                  className={styles.logoImage}
                  src="/wildrose-logo.webp"
                  alt="."
                />
                <p className={styles.logoTitle}>CSSC</p>
              </Link>
            </div>
          </div>

          <div className={styles.centerSection}>
            <ul
              className={`${styles.navList} ${menuOpen ? styles.active : ''}`}
            >
              <li>
                <Link
                  to="/info"
                  className={styles.navLink}
                  onClick={handleCloseMenu}
                >
                  Information
                </Link>
              </li>
            <li>
                <Link
                  to="/community"
                  className={styles.navLink}
                  onClick={handleCloseMenu}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className={styles.navLink}
                  onClick={handleCloseMenu}
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.rightSection}>
            <ul className={styles.registrationList}>
              <li>
                <Link
                  to="/contact"
                  className={styles.loginLink}
                  onClick={handleCloseMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={styles.signupLink}
                  onClick={handleCloseMenu}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <button
            className={`${styles.menuButton} ${menuOpen ? styles.active : ''}`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <ul className={styles.mobileNavList}>
              <li>
                <Link
                  to="/info"
                  className={styles.mobileNavLink}
                  onClick={handleCloseMenu}
                >
                  Information
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className={styles.mobileNavLink}
                  onClick={handleCloseMenu}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className={styles.mobileNavLink}
                  onClick={handleCloseMenu}
                >
                  Sponsors
                </Link>
              </li>
              <li className={styles.mobileLoginItem}>
                <Link
                  to="/contact"
                  className={styles.mobileLoginLink}
                  onClick={handleCloseMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={styles.mobileSignupLink}
                  onClick={handleCloseMenu}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}