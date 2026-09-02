import React, { useState } from 'react';
import styles from './SignupPage.module.css';

function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Candidate');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
  };

  return (
    <div className={styles['signup-container']}>
      <div className={styles['illustration-section']}>
        <img src="/illustration-login.svg" alt="Smart Recruitment Illustration" />
        <div className={styles['illustration-title']}>Smart Recruitment Management System</div>
        <div className={styles['illustration-desc']}>
          Join the platform that connects top talent and recruiters. Manage your career or hiring process with ease and intelligence.
        </div>
      </div>
      <div className={styles['signup-form-section']}>
        <div className={styles['signup-card']}>
          <div className={styles['signup-title']}>Create your account</div>
          <div className={styles['signup-subtitle']}>Sign up to get started!</div>
          <form className={styles['signup-form']} onSubmit={handleSubmit} autoComplete="on">
            <div className={styles['input-group']}>
              <label className={styles['input-label']} htmlFor="fullName">Full Name</label>
              <input
                className={styles['input-field']}
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
                autoFocus
              />
            </div>
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
              />
            </div>
            <div className={styles['input-group']}>
              <label className={styles['input-label']} htmlFor="password">Password</label>
              <input
                className={styles['input-field']}
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Create a password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <div style={{marginTop: 4}}>
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  style={{ marginRight: 6 }}
                />
                <label htmlFor="showPassword" style={{ fontSize: '0.97rem', color: '#6b7a90' }}>Show Password</label>
              </div>
            </div>
            <div className={styles['input-group']}>
              <label className={styles['input-label']} htmlFor="confirmPassword">Confirm Password</label>
              <input
                className={styles['input-field']}
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
              />
              <div style={{marginTop: 4}}>
                <input
                  type="checkbox"
                  id="showConfirmPassword"
                  checked={showConfirmPassword}
                  onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ marginRight: 6 }}
                />
                <label htmlFor="showConfirmPassword" style={{ fontSize: '0.97rem', color: '#6b7a90' }}>Show Confirm Password</label>
              </div>
            </div>
            <div className={styles['input-group']}>
              <label className={styles['input-label']} htmlFor="role">Role</label>
              <select
                className={styles['input-field']}
                id="role"
                name="role"
                value={role}
                onChange={e => setRole(e.target.value)}
                required
              >
                <option value="Candidate">Candidate</option>
                <option value="Recruiter">Recruiter</option>
              </select>
            </div>
            <button className={styles['signup-btn']} type="submit">Sign Up</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: 18, fontSize: '1rem', color: '#6b7a90' }}>
            Already have an account?
            <a href="#" className={styles['login-link']}>Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
