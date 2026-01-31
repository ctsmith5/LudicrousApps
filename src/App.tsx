import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero2 } from "./sections/Hero2";
import { Services } from "./sections/Services";
import { TechStack } from "./sections/TechStack";

function App() {
  return (
    <div id="top" className="min-h-dvh bg-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow"
      >
        Skip to content
      </a>

      <NavBar />

      <main id="content">
        <Hero2 />
        <About />
        <Services />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
