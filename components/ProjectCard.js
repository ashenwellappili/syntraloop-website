"use client";

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    badgeText,
    description,
    technologies,
    image,
    liveUrl,
    githubUrl
  } = project;

  return (
    <article className="studio-card project-card">
      {/* Top Image / UI Mockup Area */}
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" loading="lazy" />
        <span className="project-badge">
          <Code size={12} />
          {badgeText || "Demo Project"}
        </span>
      </div>

      {/* Card Body */}
      <div className="project-body">
        {category && <span className="project-category">{category}</span>}
        <h3 className="project-title">{title}</h3>
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
          <Link href="/work" className="btn btn-secondary btn-sm project-btn">
            <span>View Project</span>
            <ArrowRight size={14} className="btn-arrow" />
          </Link>

          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm project-btn"
              aria-label={`Live Demo of ${title}`}
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>
          )}

          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm project-btn"
              aria-label={`GitHub Source for ${title}`}
            >
              <span>Source Code</span>
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
