import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12">
          {/* Logo & Brief */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/Jagusha.png"
                alt="Jagusha Foods & Beverages"
                className="h-14 w-auto"
              />

              <div className="flex flex-col">
                <span className="font-display font-bold text-[30px] tracking-wider text-gray-900 leading-none">
                  JAGUSHA
                </span>

                <span className="text-[10px] font-sans tracking-[0.25em] text-gray-400 font-medium mt-1">
                  Foods & Beverages Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm text-gray-500 leading-7">
              We pledge to protect the delicate balance—the delicate dance of
              ecosystems. For every leaf that rustles, every bee that hums, we
              listen. We act. Direct from nature’s heart, we offer sustenance,
              healing, and hope. Our packaging cradles your purchase like a
              mother’s embrace, whispering, “You are part of this cycle.”
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 font-display font-semibold text-sm tracking-widest uppercase text-gray-900">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  About Jagusha
                </Link>
              </li>

              <li>
                <Link
                  to="/brand"
                  className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  Our Brand
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-500 hover:text-primary transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-display font-semibold text-sm tracking-widest uppercase text-gray-900">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />

                <span>
                  Mundet, Manglore, Roorkee - Delhi Highway, Haridwar, (UK),
                  India - 247656
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-5 h-5 text-primary shrink-0" />

                <a
                  href="tel:+919259606001"
                  className="hover:text-primary transition-colors"
                >
                  +91 9259606001
                </a>
              </li>

              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="w-5 h-5 text-primary shrink-0" />

                <a
                  href="mailto:info@jagusha.com"
                  className="hover:text-primary transition-colors"
                >
                  info@jagusha.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 font-display font-semibold text-sm tracking-widest uppercase text-gray-900">
              Follow Us
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              Stay connected with our latest updates and sustainability
              initiatives.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-gray-500"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-gray-500"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-gray-500"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-gray-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-medium">
            <p className="text-center lg:text-left">
              © 2024 - {currentYear} Jagusha Foods & Beverages Pvt. Ltd. All
              rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
