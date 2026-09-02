import Background from "./components/Background";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      
      <Background />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />

        <section
          id="github"
          className="flex min-h-screen items-center justify-center px-6"
        >
          <h2 className="text-4xl font-bold text-white">
            GitHub — Coming Next
          </h2>
        </section>
      </div>

    </div>
  );
}

export default App;