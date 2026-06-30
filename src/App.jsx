import React from 'react';

const linkedInUrl = 'https://www.linkedin.com/in/bima-aldi-rahmadani-8b1a6830a/';

const navItems = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About me', href: '#about-me' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
];

const stats = [
  { value: 'Laravel', label: 'Web application focus' },
  { value: 'ERP CRM SCM', label: 'Business system interest' },
  { value: 'UMKM', label: 'Digital solution mindset' },
];

const services = [
  {
    title: 'Business Web Apps',
    description:
      'Structured applications for workshops, commerce flows, surveys, and internal operations.',
  },
  {
    title: 'Information Systems',
    description:
      'ERP, CRM, and SCM-oriented systems that connect business needs with practical workflows.',
  },
  {
    title: 'Digital Solutions for UMKM',
    description:
      'Useful tools that help small businesses manage products, customers, decisions, and daily work.',
  },
];

const projects = [
  {
    title: 'Workshop Management App',
    type: 'Laravel / Operations',
    description:
      'A web-based system concept for service records, customer handling, transactions, and workflow visibility.',
  },
  {
    title: 'E-commerce Platform',
    type: 'Web Commerce',
    description:
      'A clean storefront and admin flow designed around products, orders, and manageable business growth.',
  },
  {
    title: 'Decision Support System',
    type: 'Data / Survey',
    description:
      'A structured digital survey and decision workflow that turns inputs into more useful business insight.',
  },
];

const techStack = ['Laravel', 'React', 'Vite', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'];

const workflow = [
  'Understand the business problem and the people who use the system.',
  'Design clear data flows, screens, and features before writing the core logic.',
  'Build maintainable interfaces and backend structures that are easy to extend.',
  'Refine usability, performance, and reliability until the system feels practical.',
];

const faqs = [
  {
    question: 'What kind of projects do you focus on?',
    answer:
      'I focus on web applications, Laravel-based systems, business information systems, and digital tools for UMKM.',
  },
  {
    question: 'Do you only build technical demos?',
    answer:
      'No. My goal is to build systems that solve real problems, support business processes, and remain easy to use.',
  },
  {
    question: 'How can I contact you?',
    answer:
      'The fastest way is through LinkedIn. Use the Contact me button anywhere on this page.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Bima Aldi Rahmadani home">
          <span className="brand-mark">
            <img src="/Foto-Utama.png" alt="" />
          </span>
          <span>Bima Aldi Rahmadani</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href={linkedInUrl} target="_blank" rel="noreferrer">
            Contact me
          </a>
        </nav>

        <button className="menu-button" aria-label="Open navigation menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Bima Aldi Rahmadani</p>
            <h1 id="hero-title">
              Web developer for
              <span>practical business systems</span>
            </h1>
            <p className="hero-description">
              I build structured, usable, and business-aware web applications with
              a strong interest in Laravel, ERP, CRM, SCM, and digital solutions
              for growing small businesses.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href={linkedInUrl} target="_blank" rel="noreferrer">
                Contact me
              </a>
              <a className="button-link" href="#portfolio">
                View projects
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="grid-block" />
            <span className="geo-square square-lg" />
            <span className="geo-square square-md" />
            <span className="geo-square square-sm" />
            <img src="/Foto-Utama.png" alt="" />
          </div>
        </section>

        <section className="stats-strip" aria-label="Professional focus">
          {stats.map((item) => (
            <div className="stat-item" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="content-section about-section" id="about-me" aria-labelledby="about-title">
          <div className="section-heading align-left">
            <p className="section-kicker">ABOUT ME</p>
            <h2 id="about-title">I connect business needs with clean technical execution.</h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                I am Bima Aldi Rahmadani, a web and information technology developer
                with a strong interest in Laravel-based application development,
                business information systems such as ERP, CRM, and SCM, and digital
                solutions for UMKM.
              </p>
              <p>
                I am used to combining business requirements with technical solutions
                that are clean, structured, and easy to use. My focus is not only on
                making software run, but on building systems that create real value.
              </p>
              <p>
                I actively work on web-based projects, from workshop applications and
                e-commerce platforms to decision support systems and digital surveys.
              </p>
            </div>

            <div className="profile-panel">
              <span>Current focus</span>
              <strong>Laravel, business systems, and useful digital products.</strong>
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="content-section" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-kicker">SERVICES</p>
            <h2 id="services-title">What I can help build</h2>
          </div>

          <div className="project-grid">
            {services.map((service) => (
              <article className="project-card" key={service.title}>
                <p>FOCUS AREA</p>
                <h3>{service.title}</h3>
                <span>{service.description}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
          <div className="section-heading">
            <p className="section-kicker">PORTFOLIO</p>
            <h2 id="portfolio-title">Discover what I've created</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-section" aria-labelledby="stack-title">
          <div className="section-heading align-left">
            <p className="section-kicker">STACK</p>
            <h2 id="stack-title">Technologies I work with</h2>
          </div>

          <div className="stack-cloud">
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        <section className="content-section process-section" aria-labelledby="process-title">
          <div className="section-heading">
            <p className="section-kicker">PROCESS</p>
            <h2 id="process-title">How I approach a build</h2>
          </div>

          <div className="timeline">
            {workflow.map((step, index) => (
              <div className="timeline-item" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-heading align-left">
            <p className="section-kicker">FAQ</p>
            <h2 id="faq-title">Quick answers</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact" aria-labelledby="contact-title">
          <p className="section-kicker">CONTACT</p>
          <h2 id="contact-title">Have a business system idea to discuss?</h2>
          <a className="button-primary" href={linkedInUrl} target="_blank" rel="noreferrer">
            Contact me on LinkedIn
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>Bima Aldi Rahmadani</span>
        <a href={linkedInUrl} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
