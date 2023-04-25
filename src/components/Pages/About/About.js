const About = () => {
  return (
    <div className="about-container">
      <div className="inner-box">
        <div className="ab-left-section">
          <h2>About Me</h2>
          <p>
            I'm a self-taught Front End developer from India.
            <br />I build websites with a focus on providing the experience
            <br /> for everyone using them and responsiveness. <br />
            Curious to learn more about developing
            <br /> scalable distribution systems, love problem solving, and
            <br /> care about writing and maintainable code. <br />A responsive
            design makes your website accessible to all users,
            <br /> regardless of their devices.
          </p>

          <ul>
            <h2>Skills</h2>
            <div className="skills">
              <div className="list-left">
                <li>HTML5/CSS3</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>React JS</li>
              </div>

              <div className="list-right">
                <li>Material UI</li>
                <li>Redux</li>
                <li>Git/GitHub</li>
              </div>
            </div>
          </ul>
        </div>
        <div className="ab-right-section"></div>
      </div>
    </div>
  );
};

export default About;
