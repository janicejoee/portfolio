import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { projects, hobbies, skills } from '../assets/data';
import './Home.css';
import {IconGitHub, IconLinkedIn} from '../assets/icons.jsx';

export const Home = () => {
  return (
    <div className="page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-inner">
            <div className="nav-brand">Veronica Janice Joe</div>
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#hobbies" className="nav-link">Hobbies</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-title-accent">Janice</span>
          </h1>
          <p className="hero-subtitle">
            Columbia'26 | Mathematics & Computer Science
          </p>
          <div className="hero-actions">
            <a href="https://github.com/janicejoee" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <IconGitHub size={22} />
              <span>GitHub</span>
            </a>
            <a href="https://drive.google.com/file/d/1yLS9Fg-Byuh8vC165zAXgWyx4lEyky-Q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <ExternalLink size={20} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-inner">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I've had the chance to work across multiple countries and industries—from a wealth management firm in Hong Kong, to a private bank in Indonesia, and most recently at Amazon in the United States. These roles exposed me to diverse teams, fast-moving environments, and complex problem-solving, all of which helped shape the way I approach both technical and collaborative work.
            <br/><br/>
            Throughout my academic and professional journey, I've also worked on a wide range of projects spanning AI, data analytics, and full-stack development. Whether it's building predictive models, analyzing real-world datasets, or creating end-to-end applications, I enjoy working across the stack and turning ideas into practical solutions.
            </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-alt">
        <div className="section-inner-wide">
          <h2 className="section-title-spaced">My Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {project.image && !project.image.includes('YOUR_IMAGE_URL_HERE') ? (
                  <img src={project.image} alt={project.title} className="project-card-image" />
                ) : (
                  <div className="project-card-placeholder"></div>
                )}
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project <ExternalLink size={16} className="project-link-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        
      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-inner">
          <h2 className="section-title-spaced">Skills & Technologies</h2>
          <div className="skills-list">
            {skills.map((group, idx) => (
              <div key={idx} className="skill-group">
                <h3 className="skill-group-title">{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((skill, index) => (
                    <div key={index} className="skill-tag">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hobbies Section */}
      <section id="hobbies" className="section-alt">
        <div className="section-inner-wide">
          <h2 className="section-title-spaced">Hobbies</h2>
          <div className="hobby-grid">
            {hobbies.map((hobby, index) => (
              <a
                key={index}
                href={hobby.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group hobby-card"
              >
                <div className="hobby-image-wrap">
                  <img src={hobby.image} alt={hobby.title} className="hobby-image" />
                  <div className="hobby-overlay">
                    <h3 className="hobby-title">{hobby.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="contact-inner">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-text">
            I'm on the lookout for full-time job opportunities starting summer 2026!
          </p>
          <div className="contact-links">
            <a href="mailto:janice.joe@columbia.edu" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="https://github.com/janicejoee" target="_blank" rel="noopener noreferrer" className="contact-link">
              <IconGitHub size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/janicejoe" target="_blank" rel="noopener noreferrer" className="contact-link">
              <IconLinkedIn size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p>&copy; 2025 Veronica Janice Joe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}