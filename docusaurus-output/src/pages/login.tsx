import React, { useState } from 'react';
import '../styles/global.css';
import styles from './showcase.module.css';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Heading, Subheading } from '../components/Text';
import { Button } from '../components/Button';
import { Gradient } from '../components/Gradient';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo form - just show alert
    alert('This is a demo login form!');
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={`${styles.maxW3xl} ${styles.mxAuto}`}>
          <div className={`${styles.flexCenter} ${styles.textCenter} ${styles.mb12}`}>
            <Subheading>Welcome Back</Subheading>
            <Heading as="h1" className={styles.mt4}>
              Sign in to your account
            </Heading>
          </div>
          
          <div className={`${styles.bgWhite} ${styles.roundedLg} ${styles.shadowLg}`} style={{ padding: '3rem' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label 
                  htmlFor="email" 
                  style={{ 
                    display: 'block', 
                    fontSize: '0.875rem', 
                    fontWeight: '500', 
                    color: '#374151',
                    marginBottom: '0.5rem' 
                  }}
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label 
                  htmlFor="password" 
                  style={{ 
                    display: 'block', 
                    fontSize: '0.875rem', 
                    fontWeight: '500', 
                    color: '#374151',
                    marginBottom: '0.5rem' 
                  }}
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
                    <input 
                      type="checkbox" 
                      style={{ marginRight: '0.5rem' }}
                    />
                    Remember me
                  </label>
                  <a 
                    href="#" 
                    style={{ 
                      fontSize: '0.875rem', 
                      color: '#3b82f6', 
                      textDecoration: 'none' 
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Sign in
              </Button>
            </form>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Don't have an account?{' '}
                <a 
                  href="#" 
                  style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '500' }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Login() {
  return (
    <div className={styles.minHeight} style={{ backgroundColor: '#f9fafb' }}>
      <Navbar />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}