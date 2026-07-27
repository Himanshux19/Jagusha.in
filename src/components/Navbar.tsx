import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Brand", path: "/brand" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100/50 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/Jagusha.png"
            alt="Jagusha Foods & Beverages"
            className="h-10 w-auto"
          />

          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-wider text-gray-900 leading-none group-hover:text-primary transition-colors duration-300">
              JAGUSHA
            </span>

            <span className="text-[10px] font-sans tracking-[0.25em] text-gray-400 font-medium mt-1 group-hover:text-secondary transition-colors duration-300">
              Foods & Beverages Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative font-sans text-sm font-medium tracking-wide text-gray-600 hover:text-gray-950 transition-colors duration-300 py-2"
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-sans text-lg font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-primary text-white font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-full transition-all duration-300"
              >
                Become a Partner
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
