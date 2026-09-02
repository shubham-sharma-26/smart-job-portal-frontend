import React from 'react';
import styles from './AdminDashboard.module.css';

const totalUsers = 1200;
const totalRecruiters = 150;
const totalJobs = 320;
const totalApplications = 2100;
const users = [
  'John Doe', 'Alice Smith', 'Rahul Verma', 'Priya Singh', 'Amit Kumar'
];
const recruiters = [
  'Innovatech Pvt Ltd', 'Tech Solutions', 'Designify', 'StartupX', 'HRPro Inc.'
];
const reports = [
  'Monthly User Growth', 'Recruiter Activity', 'Job Posting Trends', 'Application Conversion Rate'
];
const analytics = [
  { label: 'Active Users (30d)', value: '980' },
  { label: 'New Jobs (7d)', value: '42' },
  { label: 'Avg. Applications/Job', value: '6.6' },
  { label: 'Platform Uptime', value: '99.98%' },
];
const notifications = [
  'System maintenance scheduled for May 5th.',
  'New recruiter registered: HRPro Inc.',
  'User John Doe reported an issue.',
];
const systemHealth = [
  { label: 'API', status: 'Healthy' },
  { label: 'Database', status: 'Healthy' },
  { label: 'Email Service', status: 'Degraded' },
  { label: 'Storage', status: 'Healthy' },
];

function AdminDashboard() {
  return (
    <div className={styles['admin-dashboard-container']}>
      <div className={styles['admin-dashboard-content']}>
        <div className={styles['admin-dashboard-header']}>
          Admin Dashboard
        </div>
        <div className={styles['admin-dashboard-cards-row']}>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Total Users</div>
            <div className={styles['card-value']}>{totalUsers}</div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Total Recruiters</div>
            <div className={styles['card-value']}>{totalRecruiters}</div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Total Jobs Posted</div>
            <div className={styles['card-value']}>{totalJobs}</div>
          </div>
          <div className={styles['card']}>
            <div className={styles['card-title']}>Total Applications</div>
            <div className={styles['card-value']}>{totalApplications}</div>
          </div>
        </div>
        <div className={styles['admin-dashboard-main']}>
          <div className={styles['left-panel']}>
            <div className={styles['section']}>
              <div className={styles['section-title']}>Manage Users</div>
              <ul className={styles['section-list']}>
                {users.map((user, idx) => (
                  <li key={idx} className={styles['section-item']}>
                    {user}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['section']}>
              <div className={styles['section-title']}>Manage Recruiters</div>
              <ul className={styles['section-list']}>
                {recruiters.map((rec, idx) => (
                  <li key={idx} className={styles['section-item']}>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['section']}>
              <div className={styles['section-title']}>Reports</div>
              <ul className={styles['section-list']}>
                {reports.map((rep, idx) => (
                  <li key={idx} className={styles['section-item']}>
                    {rep}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles['analytics-section']}>
              <div className={styles['analytics-title']}>Platform Analytics</div>
              <div className={styles['analytics-metrics']}>
                {analytics.map((a, idx) => (
                  <div key={idx} className={styles['analytics-metric']}>
                    {a.label}: {a.value}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles['system-health-section']}>
              <div className={styles['system-health-title']}>System Health Overview</div>
              <div className={styles['health-status']}>
                {systemHealth.map((h, idx) => (
                  <div key={idx} className={styles['health-indicator']} style={{color: h.status === 'Healthy' ? '#00b894' : '#e17055'}}>
                    {h.label}: {h.status}
                  </div>
                ))}
              </div>
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

export default AdminDashboard;
