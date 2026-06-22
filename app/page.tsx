import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Photos from "./components/Photos";
import AnimeList from "./components/AnimeList";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Fireflies from "./components/Fireflies";
import WalkingChibis from "./components/WalkingChibis";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Fireflies />
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <WalkingChibis />
      </div>
      <Photos />
      <AnimeList />
      <div className="relative">
        <Projects />
        <WalkingChibis />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}

