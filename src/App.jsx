import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Hackathons from "./sections/Hackathons";
import Achievements from "./sections/Achievements";
import GitHubActivity from "./sections/GitHubActivity";
import CurrentlyExploring from "./sections/CurrentlyExploring";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseEffects from "./components/MouseEffects";
import GitHubContributions from "./components/GitHubContributions";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />

      <MouseEffects
        color="var(--theme-primary)"
        duration={0.3}
        strokeWidth={2}
        effectSize={90}
      />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          <About />

          <Skills />

          <Experience />

          <Work />

          <Hackathons />

          <Achievements />

          <GitHubActivity />

          <GitHubContributions />

          <CurrentlyExploring />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;