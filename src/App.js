import "./App.css";
import Navbar from "./components/Navbar";
// import AllRoutes from "./components/AllRoutes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AllRoutes /> */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
