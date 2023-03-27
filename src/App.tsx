import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};
export default App;
