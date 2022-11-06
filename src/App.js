import "./App.css";
import Navbar from "./components/Navbar";
// import AllRoutes from "./components/AllRoutes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { Heading } from "@chakra-ui/react";
import Stats from "./pages/Stats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading
        id="about"
        mt={{ base: "40px", md: "40px", sm: "0px" }}
        mb={{ md: "20px", sm: "20px" }}
      >
        About Me
      </Heading>
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
