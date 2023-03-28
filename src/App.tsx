import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/HomePage";
import Project from "./views/Projects/ProjectPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};
export default App;
