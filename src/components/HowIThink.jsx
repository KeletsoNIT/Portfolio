import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "Define the business problem, stakeholders and desired outcome.",
    focus: "Problem • People • Objectives",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "Examine requirements, processes, data and constraints.",
    focus: "Requirements • Process • Data",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Translate business needs into a practical solution.",
    focus: "Solution • Workflow • Systems",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Use technology, AI and automation to bring the solution to life.",
    focus: "Technology • AI • Automation",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Measure the result and identify opportunities for optimisation.",
    focus: "Insights • Results • Growth",
  },
];

export default function HowIThink() {
  return (
    <section id="how-i-think" className="thinking-section">

      <div className="thinking-container">

        {/* HEADER */}

        <Reveal>
          <div className="thinking-header">

            <p className="section-kicker">
              MY APPROACH
            </p>

            <h2 className="thinking-title">
              How I turn
              <br />
              <span>problems into solutions.</span>
            </h2>

            <p className="thinking-intro">
              A structured approach to understanding business problems,
              designing solutions and using technology to create measurable
              value.
            </p>

          </div>
        </Reveal>


        {/* PROCESS */}

        <div className="thinking-process">

          <div className="thinking-connection" />

          {STEPS.map((step, index) => (

            <Reveal
              key={step.number}
              delay={index * 0.08}
            >

              <article className="thinking-step">

                <div className="thinking-top">

                  <span className="thinking-number">
                    {step.number}
                  </span>

                  <div className="thinking-node">
                    <span />
                  </div>

                </div>


                <div className="thinking-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                  <span className="thinking-focus">
                    {step.focus}
                  </span>

                </div>

              </article>

            </Reveal>

          ))}

        </div>


        {/* BOTTOM STATEMENT */}

        <Reveal delay={0.5}>

          <div className="thinking-result">

            <span className="thinking-result-line" />

            <p>
              <strong>Business thinking</strong>
              <span>→</span>
              <strong>Technical execution</strong>
              <span>→</span>
              <strong>Measurable value</strong>
            </p>

            <span className="thinking-result-line" />

          </div>

        </Reveal>

      </div>

    </section>
  );
}