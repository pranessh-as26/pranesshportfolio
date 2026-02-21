import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Briefcase, GraduationCap, Code2, User, Layers } from 'lucide-react'
import './App.css'

const Section = ({ title, icon: Icon, children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <h2>
      <Icon size={18} />
      {title}
    </h2>
    {children}
  </motion.section>
)

function App() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Git & GitHub', 'Tailwind CSS']

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      description: 'Lead the development of multiple high-traffic React applications, improving performance by 40% and implementing a comprehensive design system.'
    },
    {
      role: 'Web Developer Intern',
      company: 'Creative Web Works',
      period: '2021 - 2022',
      description: 'Built responsive landing pages and contributed to a library of reusable UI components used across 10+ client projects.'
    }
  ]

  const projects = [
    {
      title: 'AI Portfolio Builder',
      description: 'A React-based web application that generates professional portfolios using AI.',
      tech: ['React', 'OpenAI', 'Framer Motion'],
      link: '#'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Real-time analytics dashboard for online merchants with advanced data visualization.',
      tech: ['TypeScript', 'D3.js', 'Next.js'],
      link: '#'
    }
  ]

  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Pranessh</h1>
        <p className="title">Senior Frontend Engineer</p>
        <div className="contact">
          <div className="contact-item">
            <Mail size={14} />
            <span>pranessh@example.com</span>
          </div>
          <div className="contact-item">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <MapPin size={14} />
            <span>Bengaluru, India</span>
          </div>
        </div>
        <div className="contact" style={{ marginTop: '0.5rem' }}>
          <a href="#" className="contact-item">
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <a href="#" className="contact-item">
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.header>

      <Section title="Profile" icon={User} delay={0.1}>
        <p>
          Visionary Frontend Engineer with 3+ years of experience specializing in building
          highly interactive and performant web applications. Expert in React ecosystem,
          dedicated to crafting seamless user experiences with clean, maintainable code.
        </p>
      </Section>

      <Section title="Skills" icon={Layers} delay={0.2}>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="skill-tag"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Section>

      <Section title="Experience" icon={Briefcase} delay={0.3}>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="job">
              <div className="job-header">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="job-content">
                <div className="job-meta">{exp.period}</div>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Featured Projects" icon={Code2} delay={0.4}>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skills-grid" style={{ marginTop: '1rem', gap: '0.5rem' }}>
                {project.tech.map(t => (
                  <span key={t} className="skill-tag" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="contact-item" style={{ fontSize: '0.875rem' }}>
                  <ExternalLink size={14} />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education" icon={GraduationCap} delay={0.5}>
        <div className="job">
          <div className="job-header">
            <h3>Bachelor of Computer Science</h3>
            <span className="company">Anna University</span>
          </div>
          <div className="job-content">
            <div className="job-meta">2018 - 2022</div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default App