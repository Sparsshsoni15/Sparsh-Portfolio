import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]">
      {/* Animated background */}
      <Background />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;