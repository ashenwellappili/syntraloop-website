"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

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
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isTransparent = !scrolled;

  return (
    <header className={`sticky-header ${scrolled ? 'header-scrolled' : ''} ${isTransparent ? 'header-dark-transparent' : ''}`}>
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

        {/* Action Button, Theme Toggle & Mobile Toggle */}
        <div className="header-actions">
          <ThemeToggle />

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
            <div className="flex items-center justify-between gap-3 mb-3 p-2 bg-slate-900/40 rounded-xl border border-slate-800">
              <span className="text-sm font-semibold text-slate-300">Theme Mode</span>
              <ThemeToggle />
            </div>

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

    </header>
  );
}
