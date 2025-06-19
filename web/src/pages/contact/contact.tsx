import React, { useState, useEffect } from 'react';
import styles from './contact.module.css';
import NavbarTwo from '@/components/navbarTwo/navbarTwo';

interface FormData {
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Contact Form Submission');
      const body = encodeURIComponent(
        `Reply to: ${formData.email}\n\n${formData.message}`
      );
      const mailtoLink = `mailto:admin@csschallenge.org?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavbarTwo />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.heroBadge}>
                <span>Get in Touch</span>
              </div>
              <h1>Let's Start a Conversation</h1>
              <p>Have questions about CSSC? We're here to help.</p>
            </div>
            <div className={styles.heroGraphics}>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.cardContent}>
                  <h4>Quick Response</h4>
                  <p>24-48 hours</p>
                </div>
              </div>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-users"></i>
                </div>
                <div className={styles.cardContent}>
                  <h4>Expert Team</h4>
                  <p>Ready to help</p>
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

        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formHeader}>
                <h2>Send us a Message</h2>
                <p>We'll get back to you as soon as possible</p>
              </div>

              <div className={styles.formFields}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Your Email Address
                  </label>
                  <div className={styles.inputWrapper}>
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="message" className={styles.fieldLabel}>
                    Your Message
                  </label>
                  <div className={styles.textareaWrapper}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      className={styles.formTextarea}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`${styles.submitButton} ${isSubmitting ? styles.loading : ''}`}
                >
                  <span className={styles.buttonContent}>
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner}></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </span>
                  <div className={styles.buttonBg}></div>
                </button>

                {submitStatus === 'success' && (
                  <div className={`${styles.statusAlert} ${styles.success}`}>
                    <div className={styles.alertIcon}>
                      <i className="fas fa-check"></i>
                    </div>
                    <div className={styles.alertContent}>
                      <h4>Message sent!</h4>
                      <p>Your email client should open. If not, email us at admin@csschallenge.org</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className={`${styles.statusAlert} ${styles.error}`}>
                    <div className={styles.alertIcon}>
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className={styles.alertContent}>
                      <h4>Something went wrong</h4>
                      <p>Please try again or email us directly at admin@csschallenge.org</p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;