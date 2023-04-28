import "./App.css";
import Navbar from "./components/Navbar";
// import AllRoutes from "./components/AllRoutes";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { Heading } from "@chakra-ui/react";
import Stats from "./pages/Stats";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Heading
        id="skill"
        mt={{ md: "40px", base: "50px" }}
        mb={{ md: "50px", base: "40px" }}
      >
        Skills
      </Heading>
      <Skills />
      <Heading id="project" mt={{ base: "70px", lg: "" }}>
        Projects
      </Heading>
      <Projects />
      <Stats />
      <Contact />
    </div>
  );
}

export default App;
