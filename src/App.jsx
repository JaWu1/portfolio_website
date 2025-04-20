import Navbar from "./Navbar";
import About from "./components/About"
import Projects from "./components/Projects"
import AnimationComponent from "./components/Animation"

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
