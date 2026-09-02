import React from 'react';
import styles from './RecruiterDashboard.module.css';

const recruiterName = 'Jane Smith';
const companyProfile = {
  name: 'Innovatech Pvt Ltd',
  industry: 'Information Technology',
  location: 'Gurgaon, India',
  size: '201-500 employees',
};
const jobsPosted = 8;
const activeApplications = 34;
const manageJobs = [
  { title: 'React Developer', status: 'Active' },
  { title: 'UI/UX Designer', status: 'Closed' },
  { title: 'Backend Engineer', status: 'Active' },
];
const shortlistedCandidates = [
  'Rahul Verma (React Developer)',
  'Priya Singh (UI/UX Designer)',
  'Amit Kumar (Backend Engineer)',
];
const recentApplicants = [
  { name: 'Rahul Verma', job: 'React Developer', date: '2026-04-28', status: 'Shortlisted' },
  { name: 'Priya Singh', job: 'UI/UX Designer', date: '2026-04-27', status: 'Interview' },
  { name: 'Amit Kumar', job: 'Backend Engineer', date: '2026-04-25', status: 'Applied' },
];
const notifications = [
  'New application for React Developer.',
  'Priya Singh scheduled for interview.',
  'Backend Engineer position closed.',
];

function RecruiterDashboard() {
  return (
    <div className={styles['recruiter-dashboard-container']}>
      <div className={styles['recruiter-dashboard-content']}>
        <div className={styles['recruiter-dashboard-header']}>
          <div className={styles['welcome-section']}>
            Welcome, {recruiterName}
          </div>
          <button className={styles['post-job-btn']}>Post New Job</button>
        </div>
        <div className={styles['recruiter-dashboard-cards-row']}>
          <div className={styles['card']} style={{minWidth: 260}}>
            <div className={styles['card-title']}>Company Profile</div>
            <div className={styles['card-value']} style={{fontSize: '1.2rem', marginBottom: 6}}>{companyProfile.name}</div>
            <div style={{color: '#6b7a90', fontSize: '1rem', marginBottom: 4}}>{companyProfile.industry} • {companyProfile.location}</div>
            <div style={{color: '#3a7bd5', fontWeight: 600, fontSize: '1rem'}}>{companyProfile.size}</div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Jobs Posted</div>
            <div className={styles['card-value']}>{jobsPosted}</div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Active Applications</div>
            <div className={styles['card-value']}>{activeApplications}</div>
          </div>
        </div>
        <div className={styles['recruiter-dashboard-main']}>
          <div className={styles['left-panel']}>
            <div className={styles['manage-jobs-section']}>
              <div className={styles['manage-title']}>Manage Jobs</div>
              <ul className={styles['jobs-list']}>
                {manageJobs.map((job, idx) => (
                  <li key={idx} className={styles['job-item']}>
                    <span className={styles['job-title']}>{job.title}</span>
                    <span className={styles['job-status']}>{job.status}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['shortlisted-section']}>
              <div className={styles['shortlisted-title']}>Shortlisted Candidates</div>
              <ul className={styles['shortlisted-list']}>
                {shortlistedCandidates.map((candidate, idx) => (
                  <li key={idx} className={styles['shortlisted-item']}>
                    {candidate}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['recent-applicants-section']}>
              <div className={styles['recent-title']}>Recent Applicants</div>
              <table className={styles['applicants-table']}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplicants.map((app, idx) => (
                    <tr key={idx}>
                      <td>{app.name}</td>
                      <td>{app.job}</td>
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

export default RecruiterDashboard;
