import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { About } from "./sections/About";
import { AppShowcase } from "./sections/AppShowcase";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { TechStack } from "./sections/TechStack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RummageSupport } from "./pages/RummageSupport";
import { TuckerPage } from "./pages/TuckerPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import CalendlyWidget from "./components/CalendlyWidget";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Hidden support page: accessible by direct URL, but not linked from the site */}
          <Route
            path="/RummageSupport"
            caseSensitive={false}
            element={<RummageSupport />}
          />
          {/* Lowercase variants (covers URL normalization / user typing) */}
          <Route path="/rummagesupport" element={<RummageSupport />} />
          <Route path="/rummagesupprt" element={<RummageSupport />} />

          {/* Tucker page */}
          <Route path="/tucker" element={<TuckerPage />} />

          <Route
            path="/"
            element={
              <div id="top" className="min-h-dvh bg-white dark:bg-slate-950">
                <a
                  href="#content"
                  className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow dark:focus:bg-slate-800 dark:focus:text-slate-100"
                >
                  Skip to content
                </a>

                <NavBar />

                <main id="content">
                  <Hero />
                  <About />
                  <AppShowcase />
                  <CalendlyWidget />

                  <Services />
                  <TechStack />
                  <Contact />
                </main>

                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
