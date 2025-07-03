import "./App.css";
import About from "./components/About";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default App;
