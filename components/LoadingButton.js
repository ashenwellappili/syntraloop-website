"use client";

import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Reusable Loading Button Component with smooth micro-animations.
 * Automatically displays a high-performance spinner and disables click
 * events when `isLoading` is true.
 *
 * @param {boolean} isLoading - Controls loading spinner state
 * @param {string} loadingText - Optional text to show during loading
 * @param {string} variant - 'primary' | 'cyan' | 'secondary' | 'dark'
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button content
 * @param {React.ButtonHTMLAttributes} props - Standard HTML button attributes
 */
export default function LoadingButton({
  isLoading = false,
  loadingText,
  variant = 'primary',
  className = '',
  disabled = false,
  children,
  ...props
}) {
  const variantMap = new Map([
    ['primary', 'btn-loading-primary'],
    ['cyan', 'btn-loading-cyan'],
    ['secondary', 'btn-loading-secondary'],
    ['dark', 'btn-loading-dark']
  ]);
  const variantClass = variantMap.get(variant) || 'btn-loading-primary';

  return (
    <button
      disabled={disabled || isLoading}
      className={`loading-btn-root ${variantClass} ${isLoading ? 'is-loading' : ''} ${className}`}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="loading-btn-content animate-fade-in">
          <Loader2 size={17} className="loading-btn-spinner" aria-hidden="true" />
          <span>{loadingText || 'Please wait...'}</span>
        </span>
      ) : (
        <span className="loading-btn-content">
          {children}
        </span>
      )}
    </button>
  );
}
