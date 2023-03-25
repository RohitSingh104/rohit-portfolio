import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="About"> See about Page</Link>
      <Link to="Project"> See project Page</Link>
      <Link to="Contact"> See Contact Page</Link>
    </div>
  );
};

export default Home;
