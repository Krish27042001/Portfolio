import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../../styles/header.css";

const navLinks = [
  { label: "About Me",   href: "#about me"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio",  href: "#portfolio"  },
  { label: "Contact",    href: "#contact"    },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`header ${scrolled ? "scrolled" : "top"}`}
      data-testid="site-header"
    >
      <div className="header-inner">

        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="header-logo"
          data-testid="link-logo"
        >
          VAMSI KRISHNA M<span className="header-logo-accent"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="header-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="header-nav-link"
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta-wrapper">
          <button
            className="header-cta-btn"
            onClick={() => handleNav("#contact")}
            data-testid="button-header-hire"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="header-mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="header-mobile-drawer">
          <nav className="header-mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="header-mobile-link"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <button
              className="header-mobile-cta-btn"
              onClick={() => handleNav("#contact")}
              data-testid="button-mobile-hire"
            >
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </motion.header>
  );
}