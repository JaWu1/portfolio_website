import Navbar from "./Navbar";
import About from "./page-components/About"
import Projects from "./page-components/Projects"
import AnimationComponent from "./page-components/Animation"
import Footer from "./page-components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AnimationComponent />

      <main className="pt-20 px-4">
        <About />
        <Projects />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
