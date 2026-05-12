"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Button from "../ui/Button";
import { NAV_LINKS } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>◆</span>
          LUXESTATE
        </Link>

        <ul className={`${styles.links} ${mobileOpen ? styles.linksOpen : ""}`}>
          {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={styles.link}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button variant="primary" size="sm" href="#contact">
            Get in Touch
          </Button>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
