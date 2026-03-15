import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "VizNest",
    category: "Home Decor E-Commerce Platform",
    tools: "MongoDB, Express.js, React, Node.js, Tailwind CSS, Razorpay",
    image: "/images/viznest.png",
    link: "https://viznest.vercel.app/",
  },
  {
    title: "Your Therapist",
    category: "Mental Health AI Platform",
    tools: "React, Node.js, AI APIs",
    image: "/images/therapist.png",
    link: "https://yourtherapist.designschool.in/",
  },
  {
    title: "Ayush Herb Portal",
    category: "Herb Information Platform",
    tools: "HTML, Tailwind CSS, PHP, SQL",
    image: "/images/ayush.png",
    link: "https://ayushherb.infinityfreeapp.com/",
  },
  {
    title: "Sudoku Solver Visualizer",
    category: "Algorithm Visualizer",
    tools: "React.js, DSA, Backtracking Algorithm",
    image: "/images/sudoku.png",
    link: "https://sudoku-solver-theta-nine.vercel.app/",
  },
  {
    title: "Grasp AI",
    category: "AI-Powered Learning Tool",
    tools: "React, Node.js, AI Integration",
    image: "/images/graspai.png",
    link: "https://arun.is-great.net/?i=1",
  },
  {
    title: "AI Debt Planner",
    category: "AI Financial Planning Tool",
    tools: "React, Node.js, AI Integration",
    image: "/images/debtplanner.png",
    link: "https://arun.42web.io/?i=2",
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
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="carousel-title-link"
                          data-cursor="disable"
                        >
                          <h4>{project.title} <span className="carousel-title-arrow">↗</span></h4>
                        </a>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;