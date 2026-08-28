"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and restore scrolling whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  // Lock/unlock body scroll when mobile menu toggles
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const nextState = !prev;
      document.body.style.overflow = nextState ? 'hidden' : '';
      return nextState;
    });
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky-header ${scrolled ? 'header-scrolled' : ''}`}>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <div className="container header-container">
        {/* Brand Logo */}
        <Link href="/" className="brand-logo-btn">
          <div className="brand-logo-box">
            <img 
              src="/syntralooplogo.jpeg" 
              alt="SyntraLoop Logo" 
              className="logo-img"
            />
          </div>
          <span className="brand-name">SyntraLoop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname ? (pathname === item.href || pathname.startsWith(item.href + '/')) : false;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && <span className="active-underline" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary header-cta">
            Contact Us
            <ArrowRight size={16} />
          </Link>

          <button
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname ? (pathname === item.href || pathname.startsWith(item.href + '/')) : false;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.body.style.overflow = '';
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mobile-drawer-cta">
            <Link
              href="/contact"
              className="btn btn-primary w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .skip-to-content {
          position: absolute;
          top: -9999px;
          left: 1rem;
          z-index: 100;
          padding: 0.5rem 1rem;
          background: #0057D8;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.875rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: top 0.15s ease;
        }

        .skip-to-content:focus {
          top: 0.75rem;
        }

        .sticky-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .header-scrolled {
          box-shadow: 0 4px 16px rgba(15, 27, 45, 0.06);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }

        .brand-logo-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-logo-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .brand-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-navy);
          line-height: 1;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: block;
          }
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 2.25rem;
          list-style: none;
        }

        .nav-link {
          color: #475569;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.6rem 0;
          position: relative;
          transition: color 0.15s ease;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #0F1B2D;
        }

        .nav-link.active {
          color: #0057D8 !important;
          font-weight: 700 !important;
        }

        .active-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 2px;
          background-color: #0057D8;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-cta {
          display: none;
        }

        @media (min-width: 640px) {
          .header-cta {
            display: inline-flex;
          }
        }

        .mobile-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-navy);
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-toggle-btn {
            display: none;
          }
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(15, 27, 45, 0.1);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .mobile-nav-link {
          padding: 0.75rem 1rem;
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: #475569;
          border-radius: var(--radius-md);
          text-decoration: none;
        }

        .nav-link:focus-visible,
        .brand-logo-btn:focus-visible,
        .header-cta:focus-visible,
        .mobile-toggle-btn:focus-visible,
        .mobile-nav-link:focus-visible,
        .skip-to-content:focus-visible {
          outline: 2px solid #0057D8;
          outline-offset: 3px;
          border-radius: var(--radius-sm);
        }

        .mobile-nav-link.active {
          background-color: #EBF3FF;
          color: #0057D8;
          font-weight: 700;
        }

        .w-full {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
