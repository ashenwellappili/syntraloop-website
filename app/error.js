"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RotateCcw, Home, MessageSquare, AlertTriangle, ArrowRight } from 'lucide-react';

/**
 * Next.js App Router Global Error Boundary (app/error.js)
 * Catches client-side exceptions and unhandled segment rendering errors,
 * presenting a graceful recovery screen with a 1-click re-try handler.
 */
export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log exception for error tracking (Sentry / Analytics)
    console.error("SyntraLoop Segment Error:", error);
  }, [error]);

  return (
    <div className="error-page-wrapper">
      {/* Ambient Lighting Background */}
      <div className="error-glow" aria-hidden="true" />
      <div className="error-grid-pattern" aria-hidden="true" />

      <div className="container relative z-10 py-16 text-center">
        <div className="max-w-xl mx-auto">
          {/* Status Badge */}
          <div className="error-badge animate-fade-in-up">
            <AlertTriangle size={14} className="text-amber-400" />
            <span>Execution Interrupted</span>
          </div>

          {/* Heading */}
          <h1 className="error-title animate-fade-in-up delay-1">
            Something went <span className="text-cyan-gradient">off track.</span>
          </h1>

          <p className="error-desc animate-fade-in-up delay-2">
            An unexpected glitch or network timeout occurred while loading this view. You can reload this section without restarting your session.
          </p>

          {/* Action Buttons */}
          <div className="error-actions animate-fade-in-up delay-3">
            <button
              onClick={() => reset()}
              className="btn btn-cyan-pill cursor-pointer"
            >
              <RotateCcw size={16} />
              <span>Try Again</span>
            </button>

            <Link href="/" className="btn btn-dark-glass">
              <Home size={16} />
              <span>Return Home</span>
            </Link>
          </div>

          {/* Helpful Support Footer */}
          <div className="error-support-card animate-fade-in-up delay-4">
            <p className="error-support-text">
              Persistent issue? Let our engineering team know:
            </p>
            <Link href="/contact" className="error-support-link">
              <span>Contact Engineering Support</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
