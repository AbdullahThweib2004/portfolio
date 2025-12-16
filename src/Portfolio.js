import React, { useState } from 'react';
import './Portfolio.css';
import {
  FaEnvelope, FaLinkedin, FaGithub, FaJava, FaPython, FaJs,
  FaDocker, FaDatabase, FaReact
} from 'react-icons/fa';
import { SiTypescript, SiMysql, SiScikitlearn } from 'react-icons/si';

const Portfolio = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('education');

  // Email copy state
  const email = "abdullahthweib111@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email); // copies to clipboard [web:14]
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // Fallback if clipboard is blocked (often non-HTTPS)
      window.prompt("Copy email:", email);
    }
  };

  return (
    <div className="portfolio-container">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <h2>AT</h2>
          </div>
          <div className="navbar-links">
            <button onClick={() => setCurrentPage('home')} className="nav-link">Home</button>
            <button onClick={() => setCurrentPage('projects')} className="nav-link">Projects</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Photo and Contact Icons */}
      <div className="hero-section">
        <div className="profile-image">
          <img src="/my_photo.jpg" alt="Profile" />
        </div>

        <h1>Abdallah Thuieb</h1>
        <p className="tagline">AI/ML Engineer & Full-Stack Developer</p>

        {/* About Text */}
        <p className="about-text">
          Building the future with AI, one line of code at a time.<br />
          ML/AI Engineer | Full-Stack Developer
        </p>

        <div className="social-icons">
          {/* ✅ Email: copy to clipboard instead of mailto */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="icon-link"
              aria-label="Copy email"
              title={email}
              style={{ background: "transparent", border: 0, padding: 0, cursor: "pointer" }}
            >
              <FaEnvelope size={40} />
            </button>

            {/* small tooltip */}
            {copied && (
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "110%",
                  transform: "translateX(-50%)",
                  fontSize: "12px",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  background: "rgba(0,0,0,0.75)",
                  color: "#fff",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                Copied!
              </span>
            )}
          </div>

          <a
            href="https://linkedin.com/in/abdullah-thweib"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin size={40} />
          </a>

          <a
            href="https://github.com/AbdullahThweib2004"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub size={40} />
          </a>
        </div>

        <div className="cv-buttons">
          <a href="/Abdallah_Thuieb_CV.pdf" download className="cv-button">
            📥 Download CV
          </a>
          <a href="/Abdallah_Thuieb_CV.pdf" target="_blank" rel="noopener noreferrer" className="cv-button view-button">
            👁️ View CV
          </a>
        </div>
      </div>

      {/* Tabs Section - Education & Experience */}
      <div className="experience-section">
        {/* Tabs Header */}
        <div className="tabs-header">
          <button
            className={activeTab === 'education' ? 'tab-button active' : 'tab-button'}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={activeTab === 'experience' ? 'tab-button active' : 'tab-button'}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>

        {/* Education Content */}
        {activeTab === 'education' && (
          <div className="tab-content">
            <h2>Education</h2>
            <div className="experience-grid">
              <div className="experience-box">
                <h3>🎓 Al-Quds University</h3>
                <p className="company">Bachelor's Degree</p>
                <p className="company">Computer Science</p>
                <p className="company">2022 - Present</p>
                <p className="location">📍 Abu Dis, Palestine</p>
              </div>
              <div className="experience-box">
                <h3>🎓 FU Berlin</h3>
                <p className="company">Erasmus+ Exchange</p>
                <p className="company">Computer Science</p>
                <p className="company">2024 - 2025</p>
                <p className="location">📍 Berlin, Germany</p>
              </div>
            </div>
          </div>
        )}

        {/* Experience Content */}
        {activeTab === 'experience' && (
          <div className="tab-content">
            <h2>Work Experience</h2>
            <div className="experience-grid">
              <div className="experience-box">
                <h3>💼 Palestine Bank</h3>
                <p className="company">Bank Of Palestine | 2023 - 2025</p>
                <ul>
                  <li>Software Development & Engineering</li>
                  <li>Network Infrastructure Management</li>
                  <li>Cybersecurity & Security Operations</li>
                  <li>Database Administration & Optimization</li>
                </ul>
              </div>
              <div className="experience-box">
                <h3>🤖 AI/ML Projects</h3>
                <p className="company">Freelance & Academic | 2023 - Present</p>
                <ul>
                  <li>Banking chatbot and loan risk prediction</li>
                  <li>Designed enterprise networks using Cisco Packet Tracer</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaJava size={60} color="#007396" />
            <p>Java</p>
          </div>
          <div className="skill-item">
            <FaPython size={60} color="#3776AB" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <FaJs size={60} color="#F7DF1E" />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <SiScikitlearn size={60} color="#F7931E" />
            <p>Machine Learning</p>
          </div>
          <div className="skill-item">
            <FaDocker size={60} color="#2496ED" />
            <p>Docker</p>
          </div>
          <div className="skill-item">
            <FaGithub size={60} color="#181717" />
            <p>GitHub</p>
          </div>
          <div className="skill-item">
            <SiMysql size={60} color="#4479A1" />
            <p>SQL</p>
          </div>
          <div className="skill-item">
            <FaDatabase size={60} color="#336791" />
            <p>Database</p>
          </div>
          <div className="skill-item">
            <FaReact size={60} color="#61DAFB" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <SiTypescript size={60} color="#3178C6" />
            <p>TypeScript</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
