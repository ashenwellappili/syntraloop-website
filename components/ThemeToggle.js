"use client";

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div 
        className={`theme-toggle-btn ${className}`} 
        style={{ width: '40px', height: '40px', visibility: 'hidden' }}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${isDark ? 'is-dark' : 'is-light'} ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="theme-icon-container">
        {isDark ? (
          <Sun size={19} className="theme-sun-icon text-amber-400" />
        ) : (
          <Moon size={19} className="theme-moon-icon text-cyan-300" />
        )}
      </div>
    </button>
  );
}
