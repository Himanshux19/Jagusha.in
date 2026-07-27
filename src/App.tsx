import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#111827] antialiased">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <RouteTransition>
                  <About />
                </RouteTransition>
              }
            />
            <Route
              path="/brand"
              element={
                <RouteTransition>
                  <Brand />
                </RouteTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <RouteTransition>
                  <Contact />
                </RouteTransition>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Simple wrapper for page transitions
function RouteTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </motion.div>
  );
}

export default App;
