import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LineGradient from "./components/LineGradient";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import ImageGallery from "./components/ImageGallery";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <LineGradient />
      <About />
      <LineGradient />
      <Skills />
      <LineGradient />
      <ImageGallery />
      <LineGradient />
      <Projects />
      <LineGradient />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
