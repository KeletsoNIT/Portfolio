import { Typewriter } from "react-simple-typewriter";
import "./index.css";
import "./portfolio-additions.css";

import NetworkBackground from "./components/NetworkBackground";
import Reveal from "./components/Reveal";
import TechStack from "./components/TechStack";
import FeaturedProject from "./components/FeaturedProject";
import Timeline from "./components/Timeline";
import WhyHireMe from "./components/WhyHireMe";

export default function App() {
  return (
    <div className="app">

      {/* Ambient network animation, sits behind everything */}
      <NetworkBackground />

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Keletso_Makalela</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#summary">Summary</a>
          <a href="#featured-project">Project</a>
          <a href="#experience">Experience</a>
          <a href="#timeline">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="glass-card">
          <h1 className="hero-title">
  <Typewriter
    words={['Keletso Makalela', 'Software Developer', 'AI Systems Builder']}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={2000}
  />
</h1>

          <p className="hero-sub">
            Building scalable software systems, automation tools, and full-stack applications using React, Node.js, Python, and modern cloud workflows.
          </p>

          <div className="hero-badges">
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Docker</span>
          </div>

          <div className="hero-cta">
            <div className="hero-cta">
  <a href="#contact" className="btn btn-primary">
    Hire Me
  </a>

  <a
    href="Keletso_Makalela_2026_CV.pdf"
    download="Keletso_Makalela_2026_CV.pdf"
    className="btn btn-secondary"
  >
    📄 Download CV
  </a>

  <a
    href="https://github.com/KeletsoNIT"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-secondary"
  >
    💻 GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/YOUR-LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-secondary"
  >
    💼 LinkedIn
  </a>
</div>
          </div>
        </div>

        <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  className="profile-img"
  alt="Keletso Makalela"
/>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="section">
        <Reveal>
          <h2 className="section-title">Professional Summary</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text">
            Passionate and results-driven Software Developer with a Bachelor of Science in Information Technology and hands-on experience building intelligent software solutions, AI-powered applications, and scalable backend systems. Skilled in designing and developing full-stack applications using Python, React, JavaScript, Flask, SQL, and modern development tools, with a strong focus on automation, artificial intelligence, and user-centered design.
            <br /><br />
            Demonstrated ability to transform complex business problems into practical software solutions through projects such as an AI-powered Recruitment Agent capable of CV parsing, semantic candidate matching, automated email communication, PDF report generation, and intelligent recruitment workflows. Passionate about writing clean, maintainable code, learning emerging technologies, and continuously improving software performance and user experience.
            <br /><br />
            A proactive learner with strong analytical and problem-solving abilities, excellent collaboration skills, and a commitment to delivering high-quality software. Seeking opportunities to contribute to innovative teams where I can leverage my technical expertise, expand my knowledge of cloud technologies and AI, and build impactful solutions that drive business success.
          </p>
        </Reveal>
      </section>

      {/* TECH STACK LOGOS */}
      <TechStack />

      {/* CORE COMPETENCIES */}
      <section className="section">
        <Reveal>
          <h2 className="section-title">Core Competencies</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card">
            <h3>Programming Languages</h3>
            <ul className="pill-list">
              <li>Python</li><li>Java</li><li>C++</li><li>C#</li><li>PHP</li>
              <li>JavaScript</li><li>HTML5</li><li>CSS3</li><li>SQL</li>
            </ul>

            <h3>Frameworks &amp; Libraries</h3>
            <ul className="pill-list">
              <li>React</li><li>Flask</li><li>Node.js</li>
            </ul>

            <h3>AI &amp; Automation</h3>
            <ul className="pill-list">
              <li>OpenAI API</li><li>AI Agents</li><li>Prompt Engineering</li>
              <li>Semantic Search (FAISS)</li><li>Process Automation</li><li>Email Automation</li>
            </ul>

            <h3>Backend &amp; Databases</h3>
            <ul className="pill-list">
              <li>REST APIs</li><li>SQLite</li><li>MySQL</li><li>Database Design</li>
            </ul>

            <h3>Tools &amp; Technologies</h3>
            <ul className="pill-list">
              <li>Git</li><li>GitHub</li><li>Docker</li><li>VS Code</li><li>Linux</li>
            </ul>

            <h3>Software Engineering</h3>
            <ul className="pill-list">
              <li>Agile Development</li><li>Debugging</li><li>Object-Oriented Programming</li>
              <li>System Design</li><li>Problem Solving</li><li>Software Testing</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* FEATURED PROJECT */}
      <FeaturedProject />

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <Reveal>
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card">
            <h3>Software Developer Intern</h3>
            <p className="meta">Dev Shack | Jul 2025 – Nov 2025</p>
            <ul>
              <li>Built full-stack features using React.js and Node.js improving system usability</li>
              <li>Integrated REST APIs and authentication systems for secure user access</li>
              <li>Worked in Agile team delivering production-ready features under deadlines</li>
              <li>Used Docker environments to streamline deployment workflows</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card">
            <h3>IT Support Technician</h3>
            <p className="meta">Richfield Institute | Feb 2024 – Nov 2024</p>
            <ul>
              <li>Resolved hardware/software issues reducing system downtime for staff & students</li>
              <li>Maintained and optimized computer lab infrastructure</li>
              <li>Provided first-line technical support and troubleshooting under pressure</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="card">
            <h3>Software Engineering Tutor</h3>
            <p className="meta">Richfield Institute | 2023 – 2024</p>
            <ul>
              <li>Tutored Java, Python, C++, C# improving student coding proficiency</li>
              <li>Supported debugging and assignments across multiple programming modules</li>
              <li>Improved student pass rates through structured guidance</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* TIMELINE (replaces separate education cards) */}
      <Timeline />

      {/* ACHIEVEMENTS (kept separate — not part of the chronological journey) */}
      <section id="education" className="section">
        <Reveal>
          <h2 className="section-title">Achievements</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card">
            <h3>BSc Information Technology</h3>
            <p className="meta">Richfield Graduate Institute | 2022 – 2024</p>
            <p>Academic Average: 73%</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="card">
            <h3>Recognition</h3>
            <ul>
              <li>Hackathon Participant (Team Leader)</li>
              <li>Deputy Head Girl (RCL)</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* WHY HIRE ME */}
      <WhyHireMe />

      {/* SKILLS */}
      <section id="skills" className="section">
        <Reveal>
          <h2 className="section-title">Technical Skills</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card">
            <p>Java, C++, C#, Python, JavaScript, PHP, SQL</p>
            <p>React, HTML, CSS, REST APIs</p>
            <p>MySQL, SQL Server, Git, Docker (Basic)</p>
            <p>Agile, Debugging, Software Testing</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="section-title">Soft Skills</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="card">
            <p>Communication | Teamwork | Problem Solving</p>
            <p>Time Management | Attention to Detail</p>
            <p>Pressure Handling | Leadership</p>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <Reveal>
          <h2 className="section-title">Let's Work Together</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card">
            <p>Email: Keletso.makalela512@gmail.com</p>
            <p>Phone: 073 749 0771</p>
            <p>Location: Johannesburg, South Africa</p>
            <p>LinkedIn: Keletso Makalela</p>

            <a className="hero-cta" href="mailto:Keletso.makalela512@gmail.com">
              Email Me
            </a>
          </div>
        </Reveal>
      </section>

    </div>
  );
}