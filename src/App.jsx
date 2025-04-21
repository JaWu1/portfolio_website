import Navbar from "./Navbar";
import About from "./page-components/About";
import Projects from "./page-components/Projects";
import AnimationComponent from "./page-components/Animation";
import Footer from "./page-components/Footer";

function App() {
  return (
    <>
      <div id="home"><Navbar /></div>
      <AnimationComponent />

      <main className="pt-20 px-4">
        <About />
        <div id="projects"><Projects /></div>
      </main>
      
      <div id="contact"><Footer /></div>
    </>
  );
}

export default App;
