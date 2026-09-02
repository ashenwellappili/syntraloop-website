"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Code,
  Building2,
  MonitorPlay,
  FileText
} from 'lucide-react';
import VillaInteractiveDemo from '@/components/VillaInteractiveDemo';
import DashboardInteractiveDemo from '@/components/DashboardInteractiveDemo';

/**
 * Interactive Project Detail Popup Window (Modal)
 * Supports interactive live simulation tabs and deep architectural breakdown.
 */
export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('demo');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // If the project has live demo, start in demo tab; otherwise architecture tab
      if (project?.id === 'luxury-villa-platform' || project?.hasLiveDemo) {
        setActiveTab('demo');
      } else {
        setActiveTab('architecture');
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project || !mounted) return null;

  const {
    id,
    title,
    category,
    badgeText,
    description,
    overview,
    features = [],
    highlights = [],
    clientType,
    technologies = [],
    image,
    gallery = [],
    liveUrl,
    githubUrl,
    hasLiveDemo
  } = project;

  const isVilla = id === 'luxury-villa-platform';

  const modalContent = (
    <div 
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-desc"
    >
      <div 
        className="project-modal-container animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sleek Top Header Bar */}
        <div className="project-modal-header-bar">
          <div className="modal-header-info">
            <div className="modal-header-badges">
              {badgeText && (
                <span className="project-modal-badge">
                  <Sparkles size={12} className="text-amber-400" />
                  <span>{badgeText}</span>
                </span>
              )}
              {category && (
                <span className="project-modal-category">
                  {category}
                </span>
              )}
              {/* Technology Badges in Header */}
              <div className="modal-header-tech-tags hidden sm:flex items-center gap-1.5 ml-2">
                {technologies.map((tech, idx) => (
                  <span key={idx} className="modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <h2 id="modal-project-title" className="modal-header-title">
              {title}
            </h2>
            <p id="modal-project-desc" className="modal-header-desc">
              {description}
            </p>
          </div>

            {/* Modal Header Actions: Navigation Tabs & Close */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="project-modal-tabs">
              {(isVilla || hasLiveDemo) && (
                <button
                  type="button"
                  onClick={() => setActiveTab('demo')}
                  className={`modal-tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
                >
                  <MonitorPlay size={14} />
                  <span>Live Preview</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`modal-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
              >
                <FileText size={14} />
                <span>Architecture</span>
              </button>
            </div>

            {/* Close Button Top-Right */}
            <button 
              onClick={onClose} 
              className="project-modal-close-btn"
              aria-label="Close project modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="project-modal-body">
          {/* TAB 1: LIVE INTERACTIVE DEMO (Villa & Interactive Dashboards) */}
          {activeTab === 'demo' && (
            <div className="modal-tab-pane animate-fade-in">
              {isVilla && <VillaInteractiveDemo />}
              {id === 'demo-project-two' && <DashboardInteractiveDemo />}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & SCOPE */}
          {activeTab === 'architecture' && (
            <div className="modal-tab-pane animate-fade-in">
              {/* Architecture Cover Banner */}
              <div className="architecture-cover-banner">
                <img src={image} alt={title} className="architecture-cover-img" />
                <div className="architecture-cover-overlay" />
                <div className="architecture-cover-content">
                  <h3 className="architecture-cover-title">{title}</h3>
                  <p className="architecture-cover-sub">{description}</p>
                </div>
              </div>

              {/* Client & Tech Summary Bar */}
              <div className="project-modal-meta-bar">
                {clientType && (
                  <div className="project-modal-meta-item">
                    <span className="meta-label">
                      <Building2 size={14} className="text-amber-400" />
                      <span>Industry / Scope</span>
                    </span>
                    <span className="meta-value">{clientType}</span>
                  </div>
                )}

                <div className="project-modal-meta-item">
                  <span className="meta-label">
                    <Code size={14} className="text-amber-400" />
                    <span>Engineered With</span>
                  </span>
                  <div className="project-modal-tech-pills">
                    {technologies.map((tech, idx) => (
                      <span key={idx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="project-modal-section">
                <h4 className="project-modal-section-title">
                  <Layers size={16} className="text-amber-400" />
                  <span>Project Overview & Engineering Scope</span>
                </h4>
                <p className="project-modal-text">
                  {overview || description}
                </p>
              </div>

              {/* Key Engineered Features */}
              {features.length > 0 && (
                <div className="project-modal-section">
                  <h4 className="project-modal-section-title">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>Key Implemented Capabilities</span>
                  </h4>
                  <ul className="project-modal-features-list">
                    {features.map((feat, idx) => (
                      <li key={idx} className="project-modal-feature-item">
                        <span className="feature-check-dot" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Architecture Highlights */}
              {highlights.length > 0 && (
                <div className="project-modal-section">
                  <h4 className="project-modal-section-title">
                    <Sparkles size={16} className="text-amber-400" />
                    <span>Technical Architecture Highlights</span>
                  </h4>
                  <div className="project-modal-highlights-grid">
                    {highlights.map((high, idx) => (
                      <div key={idx} className="highlight-box">
                        <span className="highlight-accent" />
                        <p>{high}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Actions Bar */}
        <div className="project-modal-footer">
          <div className="modal-footer-left hidden md:flex items-center gap-2 text-xs text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{technologies.length > 0 ? technologies.slice(0, 5).join(' · ') : 'Production-Ready Architecture'}</span>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button 
              type="button" 
              onClick={onClose} 
              className="btn btn-secondary modal-close-action"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
