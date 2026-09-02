import React from 'react';
import styles from './CandidateDashboard.module.css';

const candidateName = 'John Doe';
const profileSummary = {
  title: 'Frontend Developer',
  experience: '3+ years',
  location: 'Bangalore, India',
  skills: ['React', 'JavaScript', 'UI/UX', 'HTML', 'CSS'],
};
const appliedJobsCount = 12;
const savedJobsCount = 5;
const resumeScore = 82;
const recommendedJobs = [
  { title: 'React Developer', company: 'Tech Solutions', location: 'Remote' },
  { title: 'UI Engineer', company: 'Designify', location: 'Bangalore' },
  { title: 'Frontend Intern', company: 'StartupX', location: 'Remote' },
];
const recentApplications = [
  { job: 'React Developer', company: 'Tech Solutions', date: '2026-04-20', status: 'Under Review' },
  { job: 'UI Engineer', company: 'Designify', date: '2026-04-18', status: 'Interview' },
  { job: 'Frontend Intern', company: 'StartupX', date: '2026-04-15', status: 'Rejected' },
];
const notifications = [
  'Your application for UI Engineer is shortlisted!',
  'New job matches for React Developer.',
  'Update your resume for better matches.',
];

const quickActions = [
  { label: 'Upload Resume', onClick: () => {} },
  { label: 'Edit Profile', onClick: () => {} },
  { label: 'Find Jobs', onClick: () => {} },
];

function CandidateDashboard() {
  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['dashboard-content']}>
        <div className={styles['dashboard-header']}>
          <div className={styles['welcome-section']}>
            Welcome, {candidateName}
          </div>
          <div className={styles['quick-actions']}>
            {quickActions.map((action, idx) => (
              <button key={idx} className={styles['quick-action-btn']} onClick={action.onClick}>
                {action.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles['dashboard-cards-row']}>
          <div className={styles['card']} style={{minWidth: 260}}>
            <div className={styles['card-title']}>Profile Summary</div>
            <div className={styles['card-value']} style={{fontSize: '1.2rem', marginBottom: 6}}>{profileSummary.title}</div>
            <div style={{color: '#6b7a90', fontSize: '1rem', marginBottom: 4}}>{profileSummary.experience} • {profileSummary.location}</div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6}}>
              {profileSummary.skills.map(skill => (
                <span key={skill} style={{background: '#eaf6ff', color: '#3a7bd5', borderRadius: 6, padding: '2px 10px', fontSize: '0.97rem'}}>{skill}</span>
              ))}
            </div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Applied Jobs</div>
            <div className={styles['card-value']}>{appliedJobsCount}</div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Saved Jobs</div>
            <div className={styles['card-value']}>{savedJobsCount}</div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Resume Match Score</div>
            <div className={styles['resume-score']}>{resumeScore}%</div>
            <div className={styles['resume-score-label']}>Based on your profile</div>
          </div>
        </div>
        <div className={styles['dashboard-main']}>
          <div className={styles['left-panel']}>
            <div className={styles['recommended-jobs']}>
              <div className={styles['recommended-title']}>Recommended Jobs</div>
              <ul className={styles['recommended-list']}>
                {recommendedJobs.map((job, idx) => (
                  <li key={idx} className={styles['recommended-job']}>
                    <span className={styles['recommended-job-title']}>{job.title}</span>
                    <span className={styles['recommended-job-company']}>{job.company}</span>
                    <span className={styles['recommended-job-location']}>{job.location}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['recent-applications']}>
              <div className={styles['recent-title']}>Recent Applications</div>
              <table className={styles['applications-table']}>
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplications.map((app, idx) => (
                    <tr key={idx}>
                      <td>{app.job}</td>
                      <td>{app.company}</td>
                      <td>{app.date}</td>
                      <td>{app.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles['right-panel']}>
            <div className={styles['notifications-panel']}>
              <div className={styles['notifications-title']}>Notifications</div>
              <ul className={styles['notifications-list']}>
                {notifications.map((note, idx) => (
                  <li key={idx} className={styles['notification-item']}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;
