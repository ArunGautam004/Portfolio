import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation</h4>
                <h5>Guru Dronacharya Public School, Jind</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built a strong foundation in mathematics and science during
                schooling years.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Hari Bhoomi Senior Secondary School, Jind</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed a strong interest in computer science and programming
                fundamentals during secondary education.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science</h4>
                <h5>Lovely Professional University, Phagwara</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing B.Tech in CSE with CGPA 8.58. Building full-stack
              projects, solving 300+ DSA problems, and deploying cloud
              infrastructure on Azure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;