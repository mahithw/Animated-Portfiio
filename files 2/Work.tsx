import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "EPICS: Big 5 Animal Preservation",
    category: "Embedded Systems / IoT",
    tools: "Raspberry Pi Pico, LoRaWAN, GPS Sensors, Python, SolidWorks",
    image: "",
    link: "https://github.com/mahithw/SaveTheChubbyUnicorns",
  },
  {
    title: "Student Discussion Platform",
    category: "Full Stack / DevOps",
    tools: "Java, JavaFX, MySQL, GitHub Actions, Python",
    image: "",
    link: "https://github.com/mahithw/tp3",
  },
  {
    title: "Autonomous Robotics Maze Solver",
    category: "Robotics / Systems",
    tools: "Python, ROS, MATLAB, Sensor Fusion",
    image: "",
    link: "",
  },
  {
    title: "P2P Distributed Hash Table Network",
    category: "Distributed Systems / Networking",
    tools: "Python, Sockets, DHT Protocol",
    image: "",
    link: "https://github.com/mahithw/434",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section section-container" id="work">
      <div className="work-container">
        <h2>
          My <span>work</span>
        </h2>
        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev}>
            <MdArrowBack />
          </button>
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-link"
                            style={{ marginTop: "16px", display: "inline-block", color: "var(--accentColor)", fontSize: "14px", letterSpacing: "0.05em" }}
                          >
                            View on GitHub →
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext}>
            <MdArrowForward />
          </button>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
