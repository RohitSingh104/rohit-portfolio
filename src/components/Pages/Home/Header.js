import { Link } from "react-router-dom";
import HomePage from "./HomePage";
const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <ul className="left-section">
          <li>
            <Link to="/">RK</Link>
          </li>
        </ul>

        <ul className="right-section">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="about">
            <Link to="/About">About</Link>
          </li>
          <li className="project">
            <Link to="/Project">Projects</Link>
          </li>
          <li className="contact">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="resume">
            <Link
              to="https://drive.google.com/drive/folders/1guJoAkf9cYv3YZGGlsSl976mssp3k2CV"
              target="_blank"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
      <HomePage />
    </>
  );
};

export default Header;
