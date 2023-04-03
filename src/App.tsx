import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/HomePage";
import Project from "./views/Projects/ProjectPage";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    );
  }
}

export default App;
