import { Typewriter } from "react-simple-typewriter";
import "./index.css";
import "./portfolio-additions.css";
import HowIThink from "./components/HowIThink";
//import HowIThink from "./components/HowIThink";
import CaseStudies from "./components/CaseStudies";
import NetworkBackground from "./components/NetworkBackground";
import Reveal from "./components/Reveal";
import TechStack from "./components/TechStack";
//import FeaturedProject from "./components/FeaturedProject";
import Timeline from "./components/Timeline";
import WhyHireMe from "./components/WhyHireMe";

export default function App() {
  return (
    <div className="app">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <NetworkBackground />

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <nav className="navbar">
        <h2>Keletso_Makalela</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#journey">Journey</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section id="home" className="hero">

        <div className="glass-card">

          <p className="hero-kicker">
  SOFTWARE DEVELOPMENT • BUSINESS ANALYSIS • AI • TECHNOLOGY
</p>

          <h1 className="hero-title">
            <Typewriter
              words={[
  "Hello, I'm Keletso Makalela",
  "Software Developer",
  "Business Analyst",
  "Agentic AI Builder",
  "Technology Problem Solver",
]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>

          <p className="hero-sub">
  I am a <strong>Software Developer, Business Analyst and AI Builder</strong> 
  who turns complex business problems into practical digital solutions.
  I combine software development, business analysis, artificial intelligence,
  data and ITSM to understand problems, design solutions and build them.
</p>

          <div className="hero-badges">
            <span>Business Analysis</span>
            <span>AI &amp; Automation</span>
            <span>SQL</span>
            <span>Python</span>
            <span>Power BI</span>
            <span>ITSM</span>
          </div>

          <div className="hero-cta">

            <a href="#contact" className="btn btn-primary">
              Let's Connect
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
              href="#"
              className="btn btn-secondary"
              onClick={(e) => e.preventDefault()}
            >
              💼 LinkedIn
            </a>

          </div>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          className="profile-img"
          alt="Keletso Makalela"
        />

      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section id="about" className="section">

        <Reveal>
          <p className="section-kicker">ABOUT ME</p>

          <h2 className="section-title">
            Technology meets business thinking.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card">

            <p className="text">
              I am a Bachelor of Science in Information Technology
              graduate with hands-on experience across software
              development, Artificial Intelligence, IT service management
              and technology-driven problem solving.
            </p>

            <p className="text">
              My interests sit at the intersection of{" "}
              <strong>Business Analysis, AI and technology</strong>. I enjoy
              understanding how a business operates, identifying problems,
              analysing requirements and translating those needs into
              practical digital solutions.
            </p>

            <p className="text">
              My experience includes building AI-powered applications,
              working with enterprise ITSM platforms, developing full-stack
              applications and exploring AI agent workflows.
            </p>

          </div>
        </Reveal>

      </section>

      {/* =====================================================
          WHAT I BRING
      ====================================================== */}
      <section id="capabilities" className="section">

        <Reveal>
          <p className="section-kicker">WHAT I BRING</p>

          <h2 className="section-title">
            Business thinking. Technical execution. AI innovation.
          </h2>
        </Reveal>

        <div className="capability-grid">

          <Reveal delay={0.05}>
            <div className="card capability-card">

              <div className="capability-icon">📊</div>

              <h3>Business Analysis</h3>

              <p>
                Understanding business needs and translating them into
                practical technology requirements and solutions.
              </p>

              <ul>
                <li>Requirements analysis</li>
                <li>Process analysis</li>
                <li>Workflow understanding</li>
                <li>Problem solving</li>
                <li>Solution thinking</li>
              </ul>

            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card capability-card">

              <div className="capability-icon">🤖</div>

              <h3>Artificial Intelligence</h3>

              <p>
                Building and exploring intelligent systems that automate
                processes and solve real-world problems.
              </p>

              <ul>
                <li>Agentic AI</li>
                <li>AI automation</li>
                <li>LLM applications</li>
                <li>Prompt engineering</li>
                <li>Semantic search</li>
              </ul>

            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card capability-card">

              <div className="capability-icon">💻</div>

              <h3>Technology</h3>

              <p>
                A practical development foundation that allows me to
                understand and communicate with technical teams.
              </p>

              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>SQL</li>
                <li>REST APIs</li>
              </ul>

            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card capability-card">

              <div className="capability-icon">🔄</div>

              <h3>Digital Transformation</h3>

              <p>
                Interested in improving business processes through
                automation, ITSM platforms, data and emerging technologies.
              </p>

              <ul>
                <li>ITSM</li>
                <li>BMC Helix</li>
                <li>Process automation</li>
                <li>Agile environments</li>
                <li>Systems thinking</li>
              </ul>

            </div>
          </Reveal>

        </div>

      </section>
     {/* =====================================================
          HOW I THINK
      ====================================================== */}

      <HowIThink />

      {/* =====================================================
          TECH STACK
      ====================================================== */}
      <TechStack />

      

   {/* =====================================================
    PROJECTS & CASE STUDIES
====================================================== */}
<section id="projects">
  <CaseStudies />
</section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}
      <section id="experience" className="section">

        <Reveal>
          <p className="section-kicker">
            EXPERIENCE
          </p>

          <h2 className="section-title">
            Experience &amp; practical exposure
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="card">

            <h3>
              Agentic AI / AI Solutions Intern
            </h3>

            <p className="meta">
              New Island Technologies | 2025 – 2026
            </p>

            <ul>

              <li>
                Worked on AI-driven solutions designed to automate
                and improve business processes.
              </li>

              <li>
                Explored Agentic AI architectures and specialised
                AI agents for real-world business use cases.
              </li>

              <li>
                Contributed to AI-powered recruitment workflows
                including CV analysis, candidate matching and
                automated reporting.
              </li>

              <li>
                Applied analytical and problem-solving skills to
                translate business problems into technology solutions.
              </li>

            </ul>

          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card">

            <h3>
              Software Developer Intern
            </h3>

            <p className="meta">
              Dev Shack | Jul 2025 – Nov 2025
            </p>

            <ul>

              <li>
                Built full-stack application features using
                React.js and Node.js.
              </li>

              <li>
                Integrated REST APIs and authentication functionality.
              </li>

              <li>
                Worked within an Agile development environment.
              </li>

              <li>
                Used Git and Docker as part of the development workflow.
              </li>

            </ul>

          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card">

            <h3>
              IT Support Technician
            </h3>

            <p className="meta">
              Richfield Institute | Feb 2024 – Nov 2024
            </p>

            <ul>

              <li>
                Provided first-line technical support to staff
                and students.
              </li>

              <li>
                Diagnosed and resolved hardware and software issues.
              </li>

              <li>
                Maintained computer lab infrastructure.
              </li>

            </ul>

          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="card">

            <h3>
              Software Engineering Tutor
            </h3>

            <p className="meta">
              Richfield Institute | 2023 – 2024
            </p>

            <ul>

              <li>
                Supported students across Java, Python, C++,
                C# and software engineering modules.
              </li>

              <li>
                Assisted with debugging and programming assignments.
              </li>

              <li>
                Strengthened communication and leadership abilities.
              </li>

            </ul>

          </div>
        </Reveal>

      </section>

      {/* =====================================================
          JOURNEY
      ====================================================== */}
      <section id="journey">
        <Timeline />
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}
      <section className="section">

        <Reveal>

          <p className="section-kicker">
            EDUCATION
          </p>

          <h2 className="section-title">
            Academic foundation
          </h2>

        </Reveal>

        <Reveal delay={0.1}>

          <div className="card">

            <h3>
              BSc Information Technology
            </h3>

            <p className="meta">
              Richfield Graduate Institute of Technology |
              2022 – 2024
            </p>

            <p>
              Academic Average: <strong>73%</strong>
            </p>

            <p>
              Built a strong foundation across software development,
              databases, systems analysis, information systems and
              technology-driven problem solving.
            </p>

          </div>

        </Reveal>

        <Reveal delay={0.15}>

          <div className="card">

            <h3>
              Leadership &amp; Recognition
            </h3>

            <ul>

              <li>
                Hackathon Participant — Team Leader
              </li>

              <li>
                Deputy Head Girl — RCL
              </li>

            </ul>

          </div>

        </Reveal>

      </section>

      {/* =====================================================
          WHY HIRE ME
      ====================================================== */}
      <WhyHireMe />

      {/* =====================================================
          SKILLS
      ====================================================== */}
      <section id="skills" className="section">

        <Reveal>

          <p className="section-kicker">
            SKILLS
          </p>

          <h2 className="section-title">
            My toolkit
          </h2>

        </Reveal>

        <Reveal delay={0.1}>

          <div className="card">

            <h3>
              Business Analysis
            </h3>

            <div className="pill-list">

              <li>Requirements Analysis</li>
              <li>Process Analysis</li>
              <li>Problem Solving</li>
              <li>Workflow Analysis</li>
              <li>Systems Thinking</li>
              <li>Solution Design</li>

            </div>

            <h3>
              AI &amp; Data
            </h3>

            <div className="pill-list">

              <li>Agentic AI</li>
              <li>AI / LLM Applications</li>
              <li>Prompt Engineering</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Power BI — Learning</li>

            </div>

            <h3>
              Development
            </h3>

            <div className="pill-list">

              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Flask</li>
              <li>REST APIs</li>
              <li>HTML5</li>
              <li>CSS3</li>

            </div>

            <h3>
              Enterprise Technology
            </h3>

            <div className="pill-list">

              <li>BMC Helix</li>
              <li>ITSM</li>
              <li>Innovation Studio</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Docker</li>

            </div>

            <h3>
              Professional Skills
            </h3>

            <div className="pill-list">

              <li>Communication</li>
              <li>Teamwork</li>
              <li>Leadership</li>
              <li>Analytical Thinking</li>
              <li>Attention to Detail</li>
              <li>Adaptability</li>

            </div>

          </div>

        </Reveal>

      </section>

      {/* =====================================================
          CURRENTLY LEARNING
      ====================================================== */}
      <section className="section">

        <Reveal>

          <p className="section-kicker">
            CURRENTLY LEARNING
          </p>

          <h2 className="section-title">
            Always building. Always improving.
          </h2>

        </Reveal>

        <div className="learning-grid">

          <Reveal delay={0.05}>

            <div className="card learning-card">

              <span className="learning-icon">
                📊
              </span>

              <h3>
                Power BI
              </h3>

              <p>
                Developing practical skills in data preparation,
                visualisation, dashboards and business intelligence.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="card learning-card">

              <span className="learning-icon">
                📋
              </span>

              <h3>
                Business Analysis
              </h3>

              <p>
                Strengthening skills in requirements, process analysis,
                stakeholder thinking and solution definition.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.15}>

            <div className="card learning-card">

              <span className="learning-icon">
                🤖
              </span>

              <h3>
                Agentic AI
              </h3>

              <p>
                Exploring intelligent agents, LLM workflows and
                AI-driven automation for real-world business problems.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section id="contact" className="section contact-section">

        <Reveal>

          <p className="section-kicker">
            GET IN TOUCH
          </p>

          <h2 className="section-title">
            Let's build something intelligent.
          </h2>

        </Reveal>

        <Reveal delay={0.1}>

          <div className="card contact-card">

            <p className="text">
              I am open to opportunities in Business Analysis, AI,
              Technology, Digital Transformation and Software Development.
            </p>

            <div className="contact-details">

              <p>
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:Keletso.makalela512@gmail.com">
                  Keletso.makalela512@gmail.com
                </a>
              </p>

              <p>
                📱 <strong>Phone:</strong> 073 749 0771
              </p>

              <p>
                📍 <strong>Location:</strong> Johannesburg, South Africa
              </p>

            </div>

            <div className="hero-cta">

              <a
                className="btn btn-primary"
                href="mailto:Keletso.makalela512@gmail.com"
              >
                Email Me
              </a>

              <a
                className="btn btn-secondary"
                href="https://github.com/KeletsoNIT"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </Reveal>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="footer">

        <p>
          © {new Date().getFullYear()} Keletso Makalela
        </p>

        <p>
          Business Analysis • AI • Technology
        </p>

      </footer>

    </div>
  );
}