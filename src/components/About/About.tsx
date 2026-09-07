import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <div className="about-image-wrapper">
          <img src="/projects/about-workspace.jpg" alt="Developer workspace setup" />
        </div>
      </div>

      <div className="about-content">
        <p className="about-label">ABOUT ME</p>
        <h2 className="about-heading">
          A dedicated Full-Stack Developer &amp; aspiring Data Engineer based in
          Kigali, Rwanda <span>&#x1F4CD;</span>
        </h2>
        <p className="about-text">
          As a Full-Stack Developer, I bring a strong skill set spanning both
          front-end and back-end technologies including React, Next.js, Spring
          Boot, and PostgreSQL. I excel in designing and building robust,
          scalable applications with clean and maintainable code. My growing
          passion for Data Engineering drives me to explore tools like Python,
          Snowflake, and Jupyter Notebook for building efficient data pipelines.
          I am a team player who thrives in collaborating with cross-functional
          teams to deliver outstanding solutions from concept to deployment.
        </p>
      </div>
    </section>
  );
};

export default About;
