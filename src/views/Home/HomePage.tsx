import { Component } from "react";
import { Link } from "react-router-dom";
import Counter from "../../components/counter/Counter";

class HomePage extends Component {
  render() {
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

        <p>Home</p>
        <br />
        <br />
        <br />
        <Counter />
      </div>
    );
  }
}

export default HomePage;
