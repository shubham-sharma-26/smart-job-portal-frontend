
import React, { useState } from 'react';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['illustration-section']}>
        <img src="/illustration-login.svg" alt="Smart Recruitment Illustration" />
        <div className={styles['illustration-title']}>Smart Recruitment Management System</div>
        <div className={styles['illustration-desc']}>
          Streamline your hiring process with a modern, AI-powered platform. Connect with top talent and manage recruitment efficiently.
        </div>
      </div>
      <div className={styles['login-form-section']}>
        <div className={styles['login-card']}>
          <div className={styles['login-title']}>Sign in to your account</div>
          <div className={styles['login-subtitle']}>Welcome back! Please enter your details.</div>
          <form className={styles['login-form']} onSubmit={handleSubmit} autoComplete="on">
            <div className={styles['input-group']}>
              <label className={styles['input-label']} htmlFor="email">Email</label>
              <input
                className={styles['input-field']}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className={styles['input-group']}>
              <label className={styles['input-label']} htmlFor="password">Password</label>
              <input
                className={styles['input-field']}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles['login-actions']}>
              <div>
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  style={{ marginRight: 6 }}
                />
                <label htmlFor="showPassword" style={{ fontSize: '0.97rem', color: '#6b7a90' }}>Show Password</label>
              </div>
              <a href="#" className={styles['forgot-link']}>Forgot password?</a>
            </div>
            <button className={styles['login-btn']} type="submit">Login</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: 18, fontSize: '1rem', color: '#6b7a90' }}>
            Don&apos;t have an account?
            <a href="#" className={styles['signup-link']}>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;