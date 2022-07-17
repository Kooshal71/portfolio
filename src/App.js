import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Resume />
    </>
  );
}

export default App;
