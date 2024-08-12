import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main id="home" className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-cyan-500 to-blue-500">
        <Navbar />
        <Hero />
        <a id="about"></a>
        <About />
        <Gallery />
        <Contact />


    </main>
  );
}
