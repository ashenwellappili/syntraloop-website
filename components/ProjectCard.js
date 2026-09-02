"use client";

import React, { useState } from 'react';
import { ArrowRight, Code, Eye } from 'lucide-react';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    title,
    category,
    badgeText,
    description,
    technologies,
    image
  } = project;

  return (
    <>
      <article className="studio-card project-card">
        {/* Top Image / UI Mockup Area */}
        <div 
          className="project-image-wrapper cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
          aria-label={`Open details for ${title}`}
        >
          <img src={image} alt={title} className="project-image" loading="lazy" />
          <span className="project-badge">
            <Code size={12} />
            {badgeText || "Demo Project"}
          </span>
          <div className="project-image-hover-overlay">
            <span className="project-hover-pill">
              <Eye size={14} />
              <span>Quick Preview</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="project-body">
          {category && <span className="project-category">{category}</span>}
          <h3 
            className="project-title cursor-pointer hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            {title}
          </h3>
          <p className="project-desc">{description}</p>

          {/* Tech Stack Tags */}
          {technologies && technologies.length > 0 && (
            <div className="project-tech-stack">
              {technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Buttons Bar */}
          <div className="project-actions-bar">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="btn btn-secondary btn-sm project-btn"
              aria-haspopup="dialog"
            >
              <span>View Project</span>
              <ArrowRight size={14} className="btn-arrow" />
            </button>
          </div>
        </div>
      </article>

      {/* Interactive Project Detail Modal */}
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
