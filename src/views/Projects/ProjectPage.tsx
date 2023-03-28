import { Component } from "react";
import { Link } from "react-router-dom";

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>

        <p>Project</p>
      </div>
    );
  }
}
export default ProjectPage;
