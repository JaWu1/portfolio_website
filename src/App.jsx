import Navbar from "./Navbar";
import About from "./page-components/About"
import Projects from "./page-components/Projects"
import AnimationComponent from "./page-components/Animation"

function App() {
  return (
    <>
      <Navbar />
      <AnimationComponent />
      <main className="pt-20 px-4">
        
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
