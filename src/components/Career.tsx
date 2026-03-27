import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.S. Computer Science</h4>
                <h5>Arizona State University, Tempe AZ</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Pursuing a B.S. in Computer Science with a Certificate in International Studies. Relevant coursework: Data Structures & Algorithms, Computer Networks, Operating Systems, Data Analysis in R & Python.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Aide</h4>
                <h5>SAS Infra, India</h5>
              </div>
              <h3>May–Aug 2024</h3>
            </div>
            <p>
              Supported internal infrastructure tasks across development and deployment workflows. Worked with Python-based scripts and tooling to support team operations. Assisted with documentation and issue tracking for repeatable support processes.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain Lab Aide</h4>
                <h5>W. P. Carey School of Business, ASU</h5>
              </div>
              <h3>Jun 2024–Present</h3>
            </div>
            <p>
              Supporting and monitoring 20+ actively deployed embedded systems used by external clients. Enabled remote configuration updates via MQTT, eliminating manual device reconfiguration in the field. Validated system behavior across 16+ configuration and sensor variables to catch edge-case failures.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
