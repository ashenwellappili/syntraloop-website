"use client";

import React from 'react';

/**
 * Next.js App Router Global Loading Boundary (app/loading.js)
 * Automatically shown by Next.js React Suspense when navigating between routes
 * or while server components and pages are streaming/fetching data.
 */
export default function Loading() {
  return (
    <div 
      className="global-loading-screen"
      role="status" 
      aria-live="polite"
      aria-label="Loading SyntraLoop page content"
    >
      <div className="loading-card">
        {/* Glowing Infinity Ambient Halo */}
        <div className="loading-halo" aria-hidden="true" />
        
        {/* Animated SyntraLoop Logo Spinner */}
        <div className="loading-spinner-wrapper">
          <div className="loading-spinner-ring" />
          <div className="loading-spinner-ring-inner" />
          <div className="loading-emblem-box">
            <img 
              src="/syntralooplogo.jpeg" 
              alt="SyntraLoop" 
              className="loading-emblem-img"
            />
          </div>
        </div>

        {/* Loading Text & Dynamic Dots */}
        <div className="loading-text-group">
          <h3 className="loading-brand-title">SyntraLoop</h3>
          <p className="loading-status-text">
            <span>Loading experience</span>
            <span className="loading-dots">
              <span className="loading-dot" />
              <span className="loading-dot" />
              <span className="loading-dot" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
