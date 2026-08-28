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

        {/* Tech Stack Tags (3-4 tags) */}
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

          {/* Render Live Demo ONLY when a real demo link exists */}
          {liveUrl && liveUrl !== '#' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm project-btn"
            >
              <span>Live Demo</span>
              <ExternalLink size={14} />
            </a>
          )}

          {/* Render GitHub ONLY when a public repository exists */}
          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm project-btn"
            >
              <span>GitHub</span>
              <Github size={14} />
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          height: 100%;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          background-color: #FFFFFF;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: #0057D8;
          box-shadow: 0 8px 24px rgba(0, 87, 216, 0.12);
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 195px;
          background-color: var(--bg-secondary);
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.04);
        }

        .project-badge {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background-color: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(4px);
          border: 1px solid var(--border-color);
          color: var(--accent-blue);
          font-family: var(--font-mono);
          font-size: 0.725rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
        }

        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-category {
          font-family: var(--font-mono);
          font-size: 0.775rem;
          color: var(--accent-blue);
          font-weight: 600;
          margin-bottom: 0.35rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .project-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .project-desc {
          font-size: 0.8875rem;
          color: var(--text-slate);
          line-height: 1.55;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-slate);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .project-actions-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .project-btn {
          padding: 0.5rem 0.85rem;
          font-size: 0.8125rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .project-card:hover :global(.btn-arrow) {
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card:hover {
            transform: none !important;
          }
          .project-card:hover .project-image {
            transform: none !important;
          }
          .project-card:hover :global(.btn-arrow) {
            transform: none !important;
          }
        }
      `}</style>
    </article>
  );
}
