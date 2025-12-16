import React from 'react';
import './Portfolio.css';

const Projects = ({ setCurrentPage }) => {
  return (
    <div className="portfolio-container">
      
    {/* Navigation Bar */}
<nav className="navbar">
  <div className="navbar-content">
    <div className="navbar-logo">
      <h2 onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>AT</h2>
    </div>
    <div className="navbar-links">
      <button onClick={() => setCurrentPage('home')} className="nav-link">Home</button>
      <button onClick={() => setCurrentPage('projects')} className="nav-link">Projects</button>
    </div>
  </div>
</nav>


      {/* Projects Page Header */}
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">A collection of my work in AI, Machine Learning, and Software Development</p>
      </div>

      {/* Projects Grid */}
      <div className="projects-section">
        <div className="projects-grid">
          
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-icon">🌐</div>
            <h3>Networking System</h3>
            <p>The Redmi GitHub repository includes a set of Cisco Packet Tracer network projects designed to help IT students and beginners practice network design, configuration, and troubleshooting in a simulated environment.</p>
            <div className="project-tags">
              <span>VLAN Configurations</span>
              <span>DHCP & IP Addressing</span>
              <span>Routing Protocols</span>
              <span> Wireless Networks </span>
              <span>Security</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/AbdullahThweib2004/PacketTracer-Projects" target="_blank" rel="noopener noreferrer" className="project-link">
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-icon">🔐</div>
            <h3>Change IP Address Script</h3>
            <p>This script uses the requests and BeautifulSoup Python libraries to obtain the current IP address and then retrieve a new IP address and port number from a proxy website.</p>
            <div className="project-tags">
              <span>Python 3.x</span>
              <span>requests library</span>
              <span>BeautifulSoup library</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/AbdullahThweib2004/IPChanger" target="_blank" rel="noopener noreferrer" className="project-link">
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-icon">📊</div>
            <h3>React Dashboard</h3>
            <p> A clean React dashboard UI built with Vite, Material UI, and Nivo charts—featuring interactive data tables (Team/Tasks) and responsive visualizations (bar, pie, and network) with consistent theming.</p>
            <div className="project-tags">
              <span>React </span>
              <span>Material UI</span>
              <span>Vite </span>
            </div>
            <div className="project-links">
              <a href="https://github.com/AbdullahThweib2004/New-folder/tree/master" target="_blank" rel="noopener noreferrer" className="project-link">
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-icon">💳</div>
            <h3>Loan Risk Prediction(Under development)</h3>
            <p>Predictive model for assessing loan default risk using customer data and historical patterns. Achieved high precision in risk assessment using advanced ML algorithms.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>LightGBM</span>
              <span>Data Analysis</span>
              <span>Feature Engineering</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/AbdullahThweib2004" target="_blank" rel="noopener noreferrer" className="project-link">
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          </div>

     

        

        </div>
      </div>

      {/* Back to Home */}
      <div className="back-to-home">
        <button onClick={() => setCurrentPage('home')} className="back-button">← Back to Home</button>
      </div>

    </div>
  );
};

export default Projects;
