import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Background />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />

          <section
            id="github"
            className="flex min-h-screen items-center justify-center px-6"
          >
            <h2 className="text-4xl font-bold">
              GitHub — Coming Next
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;