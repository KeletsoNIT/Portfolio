import { useState } from "react";
import Reveal from "./Reveal";

const caseStudies = [
  {
    number: "01",
    icon: "🤖",
    category: "AI • AUTOMATION • HR TECH",
    title: "AI Recruitment Screening Platform",
    shortDescription:
      "An AI-powered recruitment platform designed to automate CV analysis, candidate matching, scoring and reporting.",
    technologies: ["Python", "AI / LLMs", "React", "Streamlit", "SQL", "REST APIs"],

    problem:
      "Recruitment teams can spend significant amounts of time manually reviewing CVs and comparing candidates against vacancy requirements. This can make the process repetitive, time-consuming and difficult to standardise.",

    solution:
      "Developed an AI-powered recruitment platform capable of extracting CV information, analysing candidate suitability, ranking applicants and generating recruitment reports.",

    contribution: [
      "Designed AI agent workflows",
      "Implemented CV information extraction",
      "Developed candidate matching logic",
      "Created candidate scoring and ranking",
      "Implemented automated recruitment reporting",
      "Explored email automation workflows",
    ],

    businessValue:
      "The platform demonstrates how AI and automation can reduce repetitive manual work, standardise candidate evaluation and support faster recruitment decision-making.",

    outcome:
      "A complete proof-of-concept showing how multiple AI capabilities can be combined into a practical business workflow.",
  },

  {
    number: "02",
    icon: "📊",
    category: "AI • DATA • DECISION SUPPORT",
    title: "FinancePilot",
    shortDescription:
      "An AI financial intelligence platform concept designed to transform financial data into meaningful insights and recommendations.",
    technologies: ["React", "Python", "AI Agents", "SQL", "Data Analysis"],

    problem:
      "Financial information can become difficult to understand when transactions, categories and financial patterns are fragmented across different sources.",

    solution:
      "Designed an AI financial intelligence platform concept that uses specialised agents to synchronise, categorise, forecast and analyse financial information.",

    contribution: [
      "Designed the multi-agent architecture",
      "Defined specialised financial AI agents",
      "Designed data categorisation workflows",
      "Explored financial forecasting",
      "Designed risk analysis capabilities",
      "Conceptualised an AI advisory experience",
    ],

    agents: [
      "Sync Agent",
      "Categorisation Agent",
      "Forecasting Agent",
      "Risk Agent",
      "Advisory Chat Agent",
    ],

    businessValue:
      "FinancePilot demonstrates how AI can transform raw financial information into insights that support better decisions, proactive planning and improved financial visibility.",

    outcome:
      "A practical AI product concept focused on turning fragmented financial data into an intelligent decision-support system.",
  },

  {
    number: "03",
    icon: "🔄",
    category: "ITSM • PROCESS • ENTERPRISE",
    title: "ITSM & Enterprise Workflow",
    shortDescription:
      "Practical exposure to enterprise systems, structured data, relationships and workflow configuration using BMC Helix.",
    technologies: ["BMC Helix", "ITSM", "Innovation Studio", "Workflows", "Process Design"],

    problem:
      "Enterprise organisations need structured systems and workflows to ensure that business processes are consistent, traceable and supported by reliable data relationships.",

    solution:
      "Gained practical exposure to BMC Helix and Innovation Studio concepts including record definitions, associations, forms, process-based applications and workflow configuration.",

    contribution: [
      "Worked with structured enterprise records",
      "Configured and explored record definitions",
      "Worked with associations between records",
      "Explored process-based applications",
      "Worked with forms and workflow configuration",
      "Troubleshot enterprise application configuration",
    ],

    businessValue:
      "This experience demonstrates an understanding of how business processes are translated into enterprise systems, and how structured data, relationships and workflows support operational processes.",

    outcome:
      "Developed practical understanding of the connection between business requirements, enterprise systems and workflow automation.",
  },
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);

  const closeCaseStudy = () => {
    setSelectedCase(null);
  };

  return (
    <>
      <section id="case-studies" className="case-studies-section">

        <div className="case-studies-header">

          <Reveal>
            <p className="section-kicker">
              SELECTED WORK
            </p>

            <h2 className="case-studies-title">
              I don't just build projects.
              <br />
              <span>I solve problems.</span>
            </h2>

            <p className="case-studies-intro">
              A selection of projects and practical experiences where
              technology, business thinking and problem solving come together.
            </p>
          </Reveal>

        </div>

        <div className="case-studies-grid">

          {caseStudies.map((study, index) => (

            <Reveal
              key={study.number}
              delay={0.05 + index * 0.1}
            >

              <button
                type="button"
                className="case-card"
                onClick={() => setSelectedCase(study)}
                aria-label={`View ${study.title} case study`}
              >

                <div className="case-card-top">

                  <span className="case-card-number">
                    {study.number}
                  </span>

                  <span className="case-card-arrow">
                    ↗
                  </span>

                </div>

                <div className="case-card-icon">
                  {study.icon}
                </div>

                <p className="case-card-category">
                  {study.category}
                </p>

                <h3 className="case-card-title">
                  {study.title}
                </h3>

                <p className="case-card-description">
                  {study.shortDescription}
                </p>

                <div className="case-card-bottom">

                  <div className="case-card-tech">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="case-card-link">
                    Explore →
                  </span>

                </div>

                <div className="case-card-glow" />

              </button>

            </Reveal>

          ))}

        </div>

      </section>


      {/* =====================================================
          CASE STUDY MODAL
      ====================================================== */}

      {selectedCase && (

        <div
          className="case-modal-backdrop"
          onClick={closeCaseStudy}
        >

          <div
            className="case-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="case-modal-close"
              onClick={closeCaseStudy}
              aria-label="Close case study"
            >
              ×
            </button>


            <div className="case-modal-header">

              <div className="case-modal-number">
                {selectedCase.number}
              </div>

              <div>

                <p className="case-modal-category">
                  {selectedCase.category}
                </p>

                <h2>
                  {selectedCase.title}
                </h2>

              </div>

            </div>


            <div className="case-modal-content">

              {/* PROBLEM */}

              <div className="case-modal-block">

                <span className="case-modal-label">
                  01 — THE PROBLEM
                </span>

                <p>
                  {selectedCase.problem}
                </p>

              </div>


              {/* SOLUTION */}

              <div className="case-modal-block">

                <span className="case-modal-label">
                  02 — THE SOLUTION
                </span>

                <p>
                  {selectedCase.solution}
                </p>

              </div>


              {/* CONTRIBUTION */}

              <div className="case-modal-block">

                <span className="case-modal-label">
                  03 — WHAT I CONTRIBUTED
                </span>

                <div className="case-contribution-grid">

                  {selectedCase.contribution.map((item, index) => (

                    <div
                      className="case-contribution-item"
                      key={item}
                    >

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </div>


              {/* AGENTS */}

              {selectedCase.agents && (

                <div className="case-modal-block">

                  <span className="case-modal-label">
                    04 — AI AGENTS
                  </span>

                  <div className="agent-list">

                    {selectedCase.agents.map((agent) => (

                      <div
                        className="agent-pill"
                        key={agent}
                      >
                        🤖 {agent}
                      </div>

                    ))}

                  </div>

                </div>

              )}


              {/* BUSINESS VALUE */}

              <div className="case-modal-block">

                <span className="case-modal-label">
                  05 — BUSINESS VALUE
                </span>

                <p>
                  {selectedCase.businessValue}
                </p>

              </div>


              {/* OUTCOME */}

              <div className="case-modal-block case-outcome">

                <span className="case-modal-label">
                  OUTCOME
                </span>

                <p>
                  {selectedCase.outcome}
                </p>

              </div>


              {/* TECHNOLOGIES */}

              <div className="case-modal-block">

                <span className="case-modal-label">
                  TECHNOLOGIES
                </span>

                <div className="case-tech-list">

                  {selectedCase.technologies.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>


            <div className="case-modal-footer">

              <span>
                Case Study {selectedCase.number}
              </span>

              <button
                type="button"
                className="case-close-button"
                onClick={closeCaseStudy}
              >
                Close Case Study
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}