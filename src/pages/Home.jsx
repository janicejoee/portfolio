import React, { useMemo, useState } from 'react';
import { Search, BriefcaseBusiness, FolderGit2, Sparkles } from 'lucide-react';
import './Home.css';
import { workExperiences, projects, hobbies } from '../assets/data';
import { IconGitHub, IconLinkedIn } from '../assets/icons.jsx';

const SECTIONS = [
  { id: 'work', label: 'Work Experiences', icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'hobbies', label: 'Hobbies', icon: Sparkles },
];

export const Home = () => {
  const [activeSection, setActiveSection] = useState('work');
  const [search, setSearch] = useState('');
  const [selectedWorkId, setSelectedWorkId] = useState(
    workExperiences[0]?.id ?? null,
  );
  const [selectedProjectId, setSelectedProjectId] = useState(
    projects[0]?.id ?? null,
  );
  const [selectedHobbyId, setSelectedHobbyId] = useState(
    hobbies[0]?.id ?? null,
  );

  const filteredWorkExperiences = useMemo(() => {
    if (!search.trim()) return workExperiences;
    const q = search.toLowerCase();
    return workExperiences.filter(
      (exp) =>
        exp.company.toLowerCase().includes(q) ||
        exp.role.toLowerCase().includes(q) ||
        exp.location.toLowerCase().includes(q),
    );
  }, [search]);

  const filteredProjects = useMemo(() => {
    if (!search.trim()) return projects;
    const q = search.toLowerCase();
    return projects.filter(
      (proj) =>
        proj.title.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q),
    );
  }, [search]);

  const filteredHobbies = useMemo(() => {
    if (!search.trim()) return hobbies;
    const q = search.toLowerCase();
    return hobbies.filter((hobby) =>
      hobby.title.toLowerCase().includes(q),
    );
  }, [search]);

  const selectedExperience =
    filteredWorkExperiences.find((exp) => exp.id === selectedWorkId) ??
    filteredWorkExperiences[0] ??
    null;

  const selectedProject =
    filteredProjects.find((proj) => proj.id === selectedProjectId) ??
    filteredProjects[0] ??
    null;

  const selectedHobby =
    filteredHobbies.find((hobby) => hobby.id === selectedHobbyId) ??
    filteredHobbies[0] ??
    null;

  return (
    <div className="chat-page">
      <div className="chat-shell">
        {/* Left rail */}
        <aside className="left-rail">
          <div className="left-rail-icons">
            <div className="avatar-circle">VJ</div>
            <div className="left-rail-divider" />
            {SECTIONS.map(({ id, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={`rail-icon-btn ${
                  activeSection === id ? 'rail-icon-btn-active' : ''
                }`}
                onClick={() => setActiveSection(id)}
              >
                <Icon size={22} />
              </button>
            ))}
          </div>

          <div className="left-panel">
            <div className="left-panel-header">
              <h1 className="left-panel-title">
                {SECTIONS.find((s) => s.id === activeSection)?.label}
              </h1>
              <p className="left-panel-subtitle">
                {activeSection === 'work'
                  ? 'Browse my internships and roles'
                  : activeSection === 'projects'
                  ? 'Explore my personal and academic projects'
                  : 'Take a look at my hobbies and interests!'}
              </p>

              <div className="left-panel-search">
                <Search size={18} className="left-panel-search-icon" />
                <input
                  className="left-panel-search-input"
                  placeholder={
                    activeSection === 'work'
                      ? 'Search companies or roles'
                      : 'Search'
                  }
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {activeSection === 'work' && (
              <div className="thread-list">
                {filteredWorkExperiences.map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    className={`thread-list-item ${
                      selectedExperience?.id === exp.id
                        ? 'thread-list-item-active'
                        : ''
                    }`}
                    onClick={() => setSelectedWorkId(exp.id)}
                  >
                    <div className="thread-avatar">
                      <span>{exp.company[0]}</span>
                    </div>
                    <div className="thread-text">
                      <div className="thread-title-row">
                        <span className="thread-title">{exp.company}</span>
                        <span className="thread-period">{exp.period}</span>
                      </div>
                      <p className="thread-subtitle">{exp.role}</p>
                      <p className="thread-snippet">{exp.summary}</p>
                    </div>
                  </button>
                ))}

                {filteredWorkExperiences.length === 0 && (
                  <div className="thread-empty">
                    No work experiences match “{search}”.
                  </div>
                )}
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="thread-list">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    type="button"
                    className={`thread-list-item ${
                      selectedProject?.id === proj.id
                        ? 'thread-list-item-active'
                        : ''
                    }`}
                    onClick={() => setSelectedProjectId(proj.id)}
                  >
                    <div className="thread-avatar">
                      <span>{proj.title[0]}</span>
                    </div>
                    <div className="thread-text">
                      <div className="thread-title-row">
                        <span className="thread-title">{proj.title}</span>
                      </div>
                      <p className="thread-subtitle">
                        {proj.tags?.slice(0, 3).join(' · ')}
                      </p>
                      <p className="thread-snippet">{proj.summary}</p>
                    </div>
                  </button>
                ))}

                {filteredProjects.length === 0 && (
                  <div className="thread-empty">
                    No projects match “{search}”.
                  </div>
                )}
              </div>
            )}

            {activeSection === 'hobbies' && (
              <div className="thread-list">
                {filteredHobbies.map((hobby) => (
                  <button
                    key={hobby.id}
                    type="button"
                    className={`thread-list-item ${
                      selectedHobby?.id === hobby.id
                        ? 'thread-list-item-active'
                        : ''
                    }`}
                    onClick={() => setSelectedHobbyId(hobby.id)}
                  >
                    <div className="thread-avatar">
                      <span>{hobby.title[0]}</span>
                    </div>
                    <div className="thread-text">
                      <div className="thread-title-row">
                        <span className="thread-title">{hobby.title}</span>
                      </div>
                      <p className="thread-snippet">{hobby.summary}</p>
                    </div>
                  </button>
                ))}

                {filteredHobbies.length === 0 && (
                  <div className="thread-empty">
                    No hobbies match “{search}”.
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* Right content */}
        <main className="chat-main">
          <header className="chat-header">
            <div className="chat-header-top">
              <div>
                <h2 className="chat-title">Veronica Janice Joe</h2>
                <p className="chat-subtitle">
                  Columbia&apos;26 · Mathematics &amp; Computer Science
                </p>
              </div>
              <div className="chat-header-actions">
                <a
                  href="https://github.com/janicejoee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-header-link"
                >
                  <IconGitHub size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/janicejoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-header-link"
                >
                  <IconLinkedIn size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {activeSection === 'work' && selectedExperience && (
              <div className="chat-work-header">
                <div className="chat-work-company">
                  <div className="chat-work-avatar">
                    <span>{selectedExperience.company[0]}</span>
                  </div>
                  <div>
                    <p className="chat-work-company-name">
                      {selectedExperience.company}
                    </p>
                    <p className="chat-work-role">
                      {selectedExperience.role} · {selectedExperience.location}
                    </p>
                  </div>
                </div>
                <span className="chat-work-pill">
                  {selectedExperience.period}
                </span>
              </div>
            )}

            {activeSection === 'projects' && selectedProject && (
              <div className="chat-work-header">
                <div className="chat-work-company">
                  <div className="chat-work-avatar">
                    <span>{selectedProject.title[0]}</span>
                  </div>
                  <div>
                    <p className="chat-work-company-name">
                      {selectedProject.title}
                    </p>
                    <p className="chat-work-role">
                      {selectedProject.tags?.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>
                <span className="chat-work-pill">Project overview</span>
              </div>
            )}

            {activeSection === 'hobbies' && selectedHobby && (
              <div className="chat-work-header">
                <div className="chat-work-company">
                  <div className="chat-work-avatar">
                    <span>{selectedHobby.title[0]}</span>
                  </div>
                  <div>
                    <p className="chat-work-company-name">
                      {selectedHobby.title}
                    </p>
                    <p className="chat-work-role">{selectedHobby.summary}</p>
                  </div>
                </div>
                <span className="chat-work-pill">Hobby spotlight</span>
              </div>
            )}
          </header>

          <section className="chat-thread">
            {activeSection === 'work' && selectedExperience ? (
              <>
                {selectedExperience.messages.map((msg) =>
                  msg.type === 'question' ? (
                    <div key={msg.id} className="bubble-row bubble-row-left">
                      <div className="bubble bubble-question">
                        {msg.label}
                      </div>
                    </div>
                  ) : (
                    <div key={msg.id} className="bubble-row bubble-row-right">
                      <div className="bubble bubble-answer">
                        {msg.content}
                      </div>
                    </div>
                  ),
                )}
              </>
            ) : null}

            {activeSection === 'projects' && selectedProject && (
              <>
                {selectedProject.messages?.map((msg) =>
                  msg.type === 'question' ? (
                    <div key={msg.id} className="bubble-row bubble-row-left">
                      <div className="bubble bubble-question">{msg.label}</div>
                    </div>
                  ) : (
                    <div key={msg.id} className="bubble-row bubble-row-right">
                      <div className="bubble bubble-answer">
                        {msg.content}
                      </div>
                    </div>
                  ),
                )}

                {selectedProject.link &&
                  selectedProject.link.startsWith('http') && (
                  <>
                    <div className="bubble-row bubble-row-left">
                      <div className="bubble bubble-question">
                        Can I take a look at this project?
                      </div>
                    </div>
                    <div className="bubble-row bubble-row-right">
                      <div className="bubble bubble-answer">
                        Yes, of course! Here:{' '}
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bubble-link"
                        >
                          {selectedProject.link}
                        </a>
                      </div>
                    </div>
                  </>
                )}

                {selectedProject.image &&
                  !selectedProject.image.includes('YOUR_IMAGE_URL_HERE') && (
                    <div className="bubble-row bubble-row-right">
                      <div className="bubble bubble-media">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="bubble-media-img"
                        />
                      </div>
                    </div>
                  )}
              </>
            )}

            {activeSection === 'hobbies' && selectedHobby && (
              <>
                {selectedHobby.messages?.map((msg) =>
                  msg.type === 'question' ? (
                    <div key={msg.id} className="bubble-row bubble-row-left">
                      <div className="bubble bubble-question">{msg.label}</div>
                    </div>
                  ) : (
                    <div key={msg.id} className="bubble-row bubble-row-right">
                      <div className="bubble bubble-answer">
                        {msg.content}
                      </div>
                    </div>
                  ),
                )}

                {selectedHobby.link && selectedHobby.link.startsWith('http') && (
                  <>
                    <div className="bubble-row bubble-row-left">
                      <div className="bubble bubble-question">
                        Can I see more from this hobby?
                      </div>
                    </div>
                    <div className="bubble-row bubble-row-right">
                      <div className="bubble bubble-answer">
                        Yes, of course! Here:{' '}
                        <a
                          href={selectedHobby.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bubble-link"
                        >
                          {selectedHobby.link}
                        </a>
                      </div>
                    </div>
                  </>
                )}

                {selectedHobby.image && (
                  <div className="bubble-row bubble-row-right">
                    <div className="bubble bubble-media">
                      <img
                        src={selectedHobby.image}
                        alt={selectedHobby.title}
                        className="bubble-media-img"
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            {!selectedExperience &&
              !selectedProject &&
              !selectedHobby && (
                <div className="thread-empty-centered">
                  Choose an item from the left to see the chat-style breakdown.
                </div>
              )}
          </section>
        </main>
      </div>
    </div>
  );
};