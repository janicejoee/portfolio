import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { projects, hobbies, skills, workExperiences, leadershipExperiences } from '../assets/data';
import './Home.css';
import { IconGitHub, IconLinkedIn } from '../assets/icons.jsx';

const pad = (n) => String(n).padStart(2, '0');

export const Home = () => {
  return (
    <div className="page">
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="#hero" className="nav-brand">
            <span className="nav-mark">VJJ</span>
            <span className="nav-name">Janice's Portfolio</span>
          </a>
          <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#leadership" className="nav-link">Leadership</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#hobbies" className="nav-link">Hobbies</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="wrap">
          <p className="hero-kicker">Columbia University '26 · Mathematics &amp; Computer Science</p>
          <h1 className="hero-title">Veronica Janice Joe</h1>
          <p className="hero-places">Indonesia · Hong Kong · United States</p>
          <div className="hero-actions">
            <a href="https://github.com/janicejoee" target="_blank" rel="noopener noreferrer" className="hero-link">
              <IconGitHub size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/janicejoe" target="_blank" rel="noopener noreferrer" className="hero-link">
              <IconLinkedIn size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:janice.joe@columbia.edu" className="hero-link">
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap">
          <header className="section-header">
            <span className="section-num">{pad(1)}</span>
            <h2 className="section-title">About</h2>
          </header>
          <div className="about-text">
            <p>
              I've had the chance to work across multiple countries and industries—from a wealth management firm in Hong Kong, to a private bank in Indonesia, and most recently at Amazon in the United States. These roles exposed me to diverse teams, fast-moving environments, and complex problem-solving, all of which helped shape the way I approach both technical and collaborative work.
            </p>
            <p>
              Throughout my academic and professional journey, I've also worked on a wide range of projects spanning AI, data analytics, and full-stack development. Whether it's building predictive models, analyzing real-world datasets, or creating end-to-end applications, I enjoy working across the stack and turning ideas into practical solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="wrap">
          <header className="section-header">
            <span className="section-num">{pad(2)}</span>
            <h2 className="section-title">Work</h2>
          </header>
          <div className="leadership-list">
            {workExperiences.map((experience, index) => (
              <article key={index} className="work-item">
                <div className="work-logo">
                  {experience.logo ? (
                    <img src={experience.logo} alt={`${experience.company} logo`} />
                  ) : (
                    <span>{experience.company.slice(0, 1)}</span>
                  )}
                </div>
                <div className="work-body">
                  <div className="leadership-card-header">
                    <div>
                      <h3 className="leadership-org">{experience.company}</h3>
                      <p className="leadership-role">{experience.role}</p>
                    </div>
                    <div className="leadership-meta">
                      <p className="leadership-location">{experience.location}</p>
                      <p className="leadership-period">{experience.period}</p>
                    </div>
                  </div>
                  <p className="work-summary">{experience.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="section">
        <div className="wrap">
          <header className="section-header">
            <span className="section-num">{pad(3)}</span>
            <h2 className="section-title">Leadership</h2>
          </header>
          <div className="leadership-list">
            {leadershipExperiences.map((experience, index) => (
              <article key={index} className="leadership-item">
                <div className="leadership-card-header">
                  <div>
                    <h3 className="leadership-org">{experience.organization}</h3>
                    <p className="leadership-role">{experience.role}</p>
                  </div>
                  <div className="leadership-meta">
                    <p className="leadership-location">{experience.location}</p>
                    <p className="leadership-period">{experience.period}</p>
                  </div>
                </div>
                <ul className="leadership-highlights">
                  {experience.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="wrap">
          <header className="section-header">
            <span className="section-num">{pad(4)}</span>
            <h2 className="section-title">Projects</h2>
          </header>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <span className="project-num">{pad(index + 1)}</span>
                <div className="project-card-body">
                  <div className="project-card-top">
                    <h3 className="project-card-title">{project.title}</h3>
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`View ${project.title}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="project-card-desc">{project.description}</p>
                  <p className="project-tags">
                    {project.tags.join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="wrap">
          <header className="section-header">
            <span className="section-num">{pad(5)}</span>
            <h2 className="section-title">Skills</h2>
          </header>
          <div className="skills-list">
            {skills.map((group, idx) => (
              <div key={idx} className="skill-group">
                <h3 className="skill-group-title">{group.category}</h3>
                <p className="skill-items">{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hobbies" className="section">
        <div className="wrap">
          <header className="section-header">
            <span className="section-num">{pad(6)}</span>
            <h2 className="section-title">Hobbies</h2>
          </header>
          <div className="hobby-grid">
            {hobbies.map((hobby, index) => {
              const Tag = hobby.link && hobby.link !== '#' ? 'a' : 'div';
              const linkProps = Tag === 'a'
                ? { href: hobby.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
                <Tag
                  key={index}
                  className="hobby-card"
                  {...linkProps}
                >
                  <div className="hobby-image-wrap">
                    <img src={hobby.image} alt={hobby.title} className="hobby-image" />
                    <div className="hobby-overlay">
                      <h3 className="hobby-title">{hobby.title}</h3>
                    </div>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="wrap">
          <header className="section-header">
            <span className="section-num">{pad(7)}</span>
            <h2 className="section-title">Contact</h2>
          </header>
          <p className="contact-text">
            I'm on the lookout for full-time opportunities starting summer 2026.
          </p>
          <div className="contact-links">
            <a href="mailto:janice.joe@columbia.edu" className="hero-link">
              <Mail size={18} />
              <span>janice.joe@columbia.edu</span>
            </a>
            <a href="https://github.com/janicejoee" target="_blank" rel="noopener noreferrer" className="hero-link">
              <IconGitHub size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/janicejoe" target="_blank" rel="noopener noreferrer" className="hero-link">
              <IconLinkedIn size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>© 2026 Veronica Janice Joe</p>
        </div>
      </footer>
    </div>
  );
};
