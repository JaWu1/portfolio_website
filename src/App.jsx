import Navbar from "./Navbar";
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4">
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
