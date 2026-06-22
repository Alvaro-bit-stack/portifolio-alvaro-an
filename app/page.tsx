import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Photos from "./components/Photos";
import AnimeList from "./components/AnimeList";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Petals from "./components/Petals";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col">
      <Petals />
      <Navbar />
      <Hero />
      <About />
      <Photos />
      <AnimeList />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
