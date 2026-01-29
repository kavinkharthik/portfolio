import React, { useState, useEffect } from 'react'
import { fallbackProfile } from './data/fallbackProfile'
import Pill from './components/Pill'
import Section from './components/Section'
import StatCard from './components/StatCard'
import ProjectCard from './components/ProjectCard'
import ContactCard from './components/ContactCard'
import TypingText from './components/TypingText'
import ParticleBackground from './components/ParticleBackground'
import ScrollReveal from './components/ScrollReveal'
import SkillBar from './components/SkillBar'
import WelcomeModal from './components/WelcomeModal'
import './style.css'


function App() {
  const profile = fallbackProfile
  const education = profile.education || []
  const skills = profile.skills || {}
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showWelcomeModal, setShowWelcomeModal] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      setShowBackToTop(window.scrollY > 500)

      // Scroll progress calculation
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { label: 'Email', href: profile.contact?.email ? `mailto:${profile.contact.email}` : '', icon: '📧' },
    { label: 'LinkedIn', href: profile.contact?.linkedin || '', icon: '🌐' },
    { label: 'GitHub', href: profile.contact?.github || '', icon: '💻' },
    {
      label: 'LeetCode',
      href: profile.contact?.leetcode || '',
      iconImage: 'https://leetcode.com/static/images/LeetCode_logo.png',
      iconAlt: 'LeetCode'
    }
  ].filter(link => link.href)

  const stats = [
    { label: 'Projects', value: '4' },
    { label: 'Certifications', value: '5' },
    { label: 'Hackathons', value: '3' },
    { label: 'Paper Presentation', value: '5' }
  ]

  const skillIcons = {
    languages: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    frontend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    backend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }

  const categoryLabels = {
    languages: 'Programming Languages',
    frontend: 'Front-end',
    backend: 'Back-end',
    database: 'Database',
    tools: 'Tools'
  }

  const skillLevels = {
    languages: { C: 75, Java: 80, Python: 70 },
    frontend: { HTML: 90, CSS: 85, JavaScript: 80, Bootstrap: 75, React: 85 },
    backend: { 'Node.js': 75, Express: 80 },
    database: { MySQL: 70, MongoDB: 75 },
    tools: { GitHub: 85, JIRA: 70 }
  }

  const projectImages = {
    'ATM Security using AI': '/atm.png',
    'Book Library (MERN Stack)': '/book.png',
    'Vivo Showroom Order Management': '/vivo.png'
  }

  const projectTechs = {
    'ATM Security using AI': ['Python', 'AI/ML', 'OpenCV'],
    'Book Library (MERN Stack)': ['MongoDB', 'Express', 'React', 'Node.js'],
    'Vivo Showroom Order Management': ['Node.js', 'CSS', 'HTML']
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="page">
      {showWelcomeModal && (
        <WelcomeModal onClose={() => setShowWelcomeModal(false)} />
      )}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <ParticleBackground particleCount={50} />
      <div className="bg-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="shell">
        <header className="topbar">
          <div className="brand">
            <img src="/profile.jpg" alt="Logo" className="brand__logo" />
            <span className="brand__text">{profile.name}</span>
          </div>
          <nav className="nav">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>
        </header>

        <header className="hero">
          <div className="hero__main">
            <div className="hero__image-wrapper">
              <img src="/profile.jpg" alt={profile.name} className="hero__image" />
              <div className="hero__image-glow" />
            </div>
            <p className="eyebrow">Full Stack Developer</p>
            <h1>
              <TypingText text={profile.name} speed={100} />
            </h1>
            <p className="subtitle">{profile.title}</p>
            {profile.careerObjective && (
              <p className="lede">{profile.careerObjective}</p>
            )}
          </div>
          <div className="hero__stats">
            {stats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </header>

        <main>
          <ScrollReveal animation="fade-up" delay={200}>
            <Section title="About" id="about">
              <div className="about">
                <div className="about-card interests">
                  <h3>Interests</h3>
                  <div className="pill-row">
                    {(profile.areasOfInterest || []).map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
                <div className="about-card soft-skills">
                  <h3>Soft Skills</h3>
                  <div className="pill-row">
                    {(profile.softSkills || []).map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
                <div className="about-card languages">
                  <h3>Languages</h3>
                  <div className="pill-row">
                    {(profile.languagesSpoken || []).map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <Section title="Projects" id="projects">
              <div className="grid">
                {(profile.projects || []).map((project, index) => (
                  <div key={project.name} className="project-card-wrapper">
                    <div className="card project-card">
                      {projectImages[project.name] && (
                        <div className="project-card__image">
                          <img src={projectImages[project.name]} alt={project.name} />
                        </div>
                      )}
                      <div className="card__content">
                        <h3>{project.name}</h3>
                        <p className="muted">{project.description}</p>
                        {projectTechs[project.name] && (
                          <div className="project-card__techs">
                            {projectTechs[project.name].map(tech => (
                              <span key={tech} className="tech-badge">{tech}</span>
                            ))}
                          </div>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                            <span>View Code</span>
                            <span className="project-link__icon">→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </ScrollReveal>

          <Section title="Skills" id="skills">
            <div className="skills-new-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className={`skill-new-card ${category}`}>
                  <div className="skill-new-card__header">
                    <div className="skill-new-card__icon">
                      {skillIcons[category] || '⭐'}
                    </div>
                    <h3>{categoryLabels[category] || category}</h3>
                  </div>
                  <div className="skill-new-divider"></div>
                  <div className="skill-new-card__body">
                    <div className="skill-new-tags">
                      {(items || []).map((skill) => (
                        <span key={skill} className="skill-new-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <ScrollReveal animation="fade-up" delay={500}>
            <Section title="Education" id="education">
              <div className="timeline">
                {education.map((item) => (
                  <div className="timeline__item" key={`${item.level}-${item.institution}`}>
                    <div className="timeline__bullet" />
                    <div className="timeline__content">
                      <div className="edu__header">
                        <h3>{item.level}</h3>
                        <span className="muted">{item.years || item.year || ''}</span>
                      </div>
                      <p className="muted">{item.institution}</p>
                      {(item.score || item.scoreLabel) && (
                        <p className="score">
                          {item.scoreLabel}: {item.score}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={600}>
            <Section title="Certifications & Achievements" id="certifications">
              <div className="grid two">
                <div className="card">
                  <h3>Certifications</h3>
                  <ul className="list">
                    {(profile.certifications || []).map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3>Achievements</h3>
                  <ul className="list">
                    {(profile.achievements || []).map((ach) => (
                      <li key={ach}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={700}>
            <Section title="Contact" id="contact">
              <div className="contact-grid">
                {profile.contact?.email && (
                  <ContactCard
                    label="Email"
                    value={profile.contact.email}
                    href={`mailto:${profile.contact.email}`}
                    icon="📧"
                  />
                )}
                {profile.contact?.phone && (
                  <ContactCard
                    label="Phone"
                    value={profile.contact.phone}
                    href={`tel:${profile.contact.phone}`}
                    icon="📞"
                  />
                )}
                {profile.contact?.linkedin && (
                  <ContactCard
                    label="LinkedIn"
                    value="Visit Profile"
                    href={profile.contact.linkedin}
                    iconImage="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    icon="💼"
                  />
                )}
                {profile.contact?.github && (
                  <ContactCard
                    label="GitHub"
                    value="View Profile"
                    href={profile.contact.github}
                    iconImage="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    icon="💻"
                  />
                )}
                {profile.contact?.leetcode && (
                  <ContactCard
                    label="LeetCode"
                    value="Visit Profile"
                    href={profile.contact.leetcode}
                    iconImage="https://leetcode.com/static/images/LeetCode_logo.png"
                  />
                )}
              </div>
            </Section>
          </ScrollReveal>
        </main>

        <footer className="footer">
          <span className="footer__text">© {new Date().getFullYear()} {profile.name}</span>
        </footer>
      </div>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <span>↑</span>
        </button>
      )}
    </div>
  )
}

export default App
