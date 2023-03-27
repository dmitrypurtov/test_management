import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>

      <p>Projects</p>
    </div>
  );
};
export default Projects;
