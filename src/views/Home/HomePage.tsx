import { Component } from "react";
import { Link } from "react-router-dom";
import Counter from "../../components/counter/Counter";
import User from "../../components/user/User";

class HomePage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home2</Link>
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
        <br />
        <br />
        <br />
        <User />
      </div>
    );
  }
}

export default HomePage;
