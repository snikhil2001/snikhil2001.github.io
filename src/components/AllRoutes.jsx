import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
