const skills = [
  { group: "Research", items: ["Hydroclimatology", "Climate extremes", "Environmental analysis"] },
  { group: "Methods", items: ["Statistical modeling", "Machine learning", "Computational analysis"] },
  { group: "Practice", items: ["Data visualization", "Research communication", "Insight development"] },
];

const researchPapers = [
  {
    number: "01",
    category: "PUBLISHED / PEER-REVIEWED",
    title:
      "Investigating the spatial and temporal characteristics of compound dry hazard occurrences across the pan-Asian region",
    authors: "Davy Jean Abella and Kuk-Hyun Ahn",
    journal: "Weather and Climate Extremes",
    year: "2024",
    volume: "44",
    articleNumber: "100669",
    doi: "https://doi.org/10.1016/j.wace.2024.100669",
    publicationUrl:
      "https://www.sciencedirect.com/science/article/pii/S2212094724000306",
    overview:
      "This study investigates the co-occurrence of heatwaves, droughts, fire dangers, and extreme winds across the Pan-Asian region over 1980–2021.",
    objectives: [
      "Evaluate the interannual variability of compound dry hazards.",
      "Identify geographical hotspots.",
      "Analyze changes in the frequency and duration of cascading events.",
      "Examine the dependence structure among compound hazards.",
    ],
    methods: [
      "ERA5 reanalysis dataset.",
      "Threshold-based hazard identification.",
      "Spatial and temporal analysis.",
      "Cascading-event analysis.",
      "Mann–Kendall trend test and Sen's slope.",
      "Likelihood multiplication factor.",
    ],
    findings: [
      "Compound dry hazards have increased in spatial extent across Asia.",
      "Hotspots are concentrated mainly in East, South, and Southeast Asia.",
      "Cascading events have increased in frequency and duration in several Asian subregions.",
      "Compound hazards exhibit varying degrees of dependence.",
    ],
    skills: [
      "Python",
      "Statistical analysis",
      "Climate data processing",
      "Geospatial analysis",
      "Data visualization",
      "Scientific communication",
    ],
    contributionPlaceholder: "Add your individual contribution to this study.",
  },
];

const projects = [
  {
    number: "02",
    category: "CLIMATE RESEARCH",
    title: "Compound dry hazards across Asia",
    description:
      "An investigation of where and when drought, heatwave, fire danger, and extreme wind events occur together across the Pan-Asian region.",
    tags: ["Hydroclimatology", "Climate extremes", "Regional analysis"],
    art: "hazards",
    artLabel: "Illustrated map-like pattern representing compound climate hazards",
  },
  {
    number: "03",
    category: "ONGOING RESEARCH",
    title: "The 2023 compound climate extremes",
    description:
      "Exploring the characteristics and potential drivers of compound heatwave, drought, and dry-air conditions across Asia.",
    tags: ["Climate data", "Computational analysis", "Attribution"],
    art: "extremes",
    artLabel: "Abstract temperature and rainfall chart for 2023 climate extremes",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a href="#top" className="wordmark">DJA<span>.</span></a>
          <p className="nav-note">Data scientist | Analyst | Researcher</p>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Selected work</a>
            <a href="#contact">Contact <span aria-hidden="true">-&gt;</span></a>
          </div>
        </nav>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> DATA SCIENCE | DATA ANALYSIS | RESEARCH</p>
          <h1>DAVY JEAN<br /><span>ABELLA</span></h1>
          <div className="hero-bottom">
            <p className="hero-statement">I turn complex data into <em>clearer insight.</em></p>
            <a className="round-link" href="#work" aria-label="Explore selected work">v</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract visualization of research data, analytical relationships, and trends" role="img">
          <svg className="analysis-visual" viewBox="0 0 520 420" aria-hidden="true">
            <g className="plot-grid">
              <path d="M38 70H486M38 130H486M38 190H486M38 250H486M38 310H486M38 370H486" />
              <path d="M98 48V370M158 48V370M218 48V370M278 48V370M338 48V370M398 48V370M458 48V370" />
            </g>
            <path className="plot-axis" d="M38 48V370H486" />
            <path className="plot-line plot-line-a" d="M48 286 C92 274 100 215 144 232 S202 295 242 210 S300 171 335 186 S391 120 422 143 S458 95 480 105" />
            <path className="plot-line plot-line-b" d="M48 325 C94 304 119 327 150 287 S207 272 238 285 S286 230 320 249 S366 222 392 232 S448 181 480 193" />
            <g className="plot-points"><circle cx="144" cy="232" r="5"/><circle cx="242" cy="210" r="5"/><circle cx="335" cy="186" r="5"/><circle cx="422" cy="143" r="5"/><circle cx="150" cy="287" r="4"/><circle cx="320" cy="249" r="4"/><circle cx="392" cy="232" r="4"/></g>
            <circle className="focus-ring" cx="335" cy="186" r="18" />
          </svg>
          <div className="art-stamp">FIELD NOTES<br /><span>01 / 2026</span></div>
          <div className="art-caption">QUESTION<br />- ANALYZE<br />- EXPLAIN</div>
          <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
        </div>
        <div className="hero-index"><span>01</span><span>PORTFOLIO / 2026</span><span>SCROLL TO EXPLORE v</span></div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 - ABOUT ME</p>
          <span className="section-mark">PROFILE</span>
        </div>
        <div className="about-grid">
          <h2>Curiosity,<br />with <em>purpose.</em></h2>
          <div className="about-copy">
            <p className="lead">I work at the intersection of climate research and data science, using computational and statistical methods to make complex environmental questions easier to understand.</p>
            <p>My work focuses on climate variability, extreme events, and environmental risks. I am interested in finding the patterns behind the data and communicating what they can tell us.</p>
            <a href="#contact" className="text-link">A little more about working together <span>-&gt;</span></a>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-group" key={skill.group}>
              <p className="skill-number">0{index + 1}</p>
              <h3>{skill.group}</h3>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-wrap work-wrap">
          <div className="section-heading">
            <p className="eyebrow">02 - SELECTED WORK</p>
            <span className="section-mark">RESEARCH / 03</span>
          </div>
          <div className="work-intro">
            <h2>Questions worth<br /><em>looking closer at.</em></h2>
            <p>Published and ongoing research on climate hazards and compound extremes across Asia.</p>
          </div>
          <div className="project-list">
            {researchPapers.map((paper) => (
              <article className="project-card publication-card" key={paper.doi}>
                <div className="project-art publication-art">
                  <div className="publication-status">
                    <span>PEER-REVIEWED</span>
                    <span>OPEN ACCESS</span>
                  </div>
                  <div className="publication-journal">
                    <span>JOURNAL</span>
                    <strong>{paper.journal}</strong>
                  </div>
                  <div className="publication-volume">
                    <span>{paper.year} / VOL. {paper.volume}</span>
                    <span>ARTICLE {paper.articleNumber}</span>
                  </div>
                </div>
                <div className="project-info publication-info">
                  <div className="project-meta">
                    <span>{paper.category}</span>
                    <span>{paper.number} / 03</span>
                  </div>
                  <h3>{paper.title}</h3>
                  <p className="publication-authors">{paper.authors}</p>
                  <p className="publication-citation">
                    {paper.journal} · {paper.year} · Volume {paper.volume} · Article {paper.articleNumber}
                  </p>
                  <a className="publication-doi" href={paper.doi} target="_blank" rel="noreferrer">
                    DOI: 10.1016/j.wace.2024.100669
                  </a>
                </div>
                <details className="case-study publication-details">
                  <summary>View Research <span aria-hidden="true">+</span></summary>
                  <div className="research-details-content">
                    <section className="research-detail-section research-overview">
                      <h4>Research overview</h4>
                      <p>{paper.overview}</p>
                    </section>
                    <section className="research-detail-section">
                      <h4>Research objectives</h4>
                      <ul>{paper.objectives.map((item) => <li key={item}>{item}</li>)}</ul>
                    </section>
                    <section className="research-detail-section">
                      <h4>Data and methods</h4>
                      <ul>{paper.methods.map((item) => <li key={item}>{item}</li>)}</ul>
                    </section>
                    <section className="research-detail-section">
                      <h4>Key findings</h4>
                      <ul>{paper.findings.map((item) => <li key={item}>{item}</li>)}</ul>
                    </section>
                    <section className="research-detail-section">
                      <h4>Technologies and skills</h4>
                      <div className="tag-list">
                        {paper.skills.map((skill) => <span key={skill}>{skill}</span>)}
                      </div>
                    </section>
                    <section className="research-detail-section contribution-section">
                      <h4>My Contribution</h4>
                      <p>{paper.contributionPlaceholder}</p>
                    </section>
                    <a className="publication-full-link" href={paper.publicationUrl} target="_blank" rel="noreferrer">
                      Read the open-access paper <span aria-hidden="true">-&gt;</span>
                    </a>
                  </div>
                </details>
              </article>
            ))}
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.art}`} role="img" aria-label={project.artLabel}>
                  {project.art === "hazards" ? <>
                    <div className="hazard-map"><i /><i /><i /><i /><i /><i /><i /></div>
                    <span className="map-label map-label-a">ASIA / NORTH</span><span className="map-label map-label-b">DRY ZONE</span>
                    <span className="art-coordinate">35 N<br />104 E</span>
                  </> : <>
                    <div className="chart-label">CLIMATE ANOMALY / 2023</div>
                    <svg className="chart-lines" viewBox="0 0 600 300" aria-hidden="true" preserveAspectRatio="none">
                      <path className="chart-grid" d="M0 50H600M0 100H600M0 150H600M0 200H600M0 250H600M100 0V300M200 0V300M300 0V300M400 0V300M500 0V300" />
                      <path className="chart-series" d="M0 216 C35 202 45 175 78 188 S128 225 157 168 S207 126 240 145 S283 173 315 113 S365 81 398 100 S445 133 475 77 S528 50 551 64 S582 82 600 34" />
                      <circle className="chart-point" cx="315" cy="113" r="7"/><circle className="chart-point" cx="475" cy="77" r="7"/><circle className="chart-point" cx="600" cy="34" r="7"/>
                    </svg>
                    <div className="chart-axis"><span>JAN</span><span>APR</span><span>JUL</span><span>OCT</span></div>
                    <span className="chart-value">+2.4 deg</span>
                  </>}
                </div>
                <div className="project-info">
                  <div className="project-meta"><span>{project.category}</span><span>{project.number} / 03</span></div>
                  <h3>{project.title}</h3>
                  <details className="case-study">
                    <summary>Explore case study <span aria-hidden="true">+</span></summary>
                    <div className="case-study-content">
                      <p>{project.description}</p>
                      <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="background section-wrap">
        <div className="section-heading">
          <p className="eyebrow">03 - APPROACH</p>
          <span className="section-mark">HOW I WORK</span>
        </div>
        <div className="approach-grid">
          <h2>From raw data<br />to <em>real context.</em></h2>
          <div className="approach-steps">
            <div><span>01</span><p><strong>Ask a better question.</strong> Start with the environmental process and the decision the research can support.</p></div>
            <div><span>02</span><p><strong>Follow the evidence.</strong> Use careful analysis to reveal patterns, relationships, and uncertainty.</p></div>
            <div><span>03</span><p><strong>Make it understandable.</strong> Turn findings into a clear story that helps people see the bigger picture.</p></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-wrap contact-wrap">
          <p className="eyebrow">04 - GET IN TOUCH</p>
          <div className="contact-row">
            <h2>Have a question<br />worth <em>exploring?</em></h2>
            <span className="contact-link">Let us connect <span aria-hidden="true">-&gt;</span></span>
          </div>
          <div className="contact-foot"><span>DAVY JEAN ABELLA</span><span>CLIMATE RESEARCH | DATA SCIENCE</span><a href="#top">BACK TO TOP ^</a></div>
        </div>
      </section>

      <footer className="footer"><span>(c) 2026 Davy Jean Abella</span><span>Built around curiosity.</span></footer>
    </main>
  );
}


