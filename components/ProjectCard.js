"use client";

import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    features,
    technologies,
    image,
    liveUrl,
    githubUrl,
    demoNotice
  } = project;

  return (
    <article className="studio-card project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" loading="lazy" />
      </div>

      <div className="project-body">
        <div className="demo-notice-bar">
          <Code size={13} className="demo-icon" />
          <span>{demoNotice || "Demo Project — Placeholder"}</span>
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

        {features && features.length > 0 && (
          <ul className="project-features-list">
            {features.map((feat, idx) => (
              <li key={idx} className="feature-item">
                <span className="feature-bullet" />
                {feat}
              </li>
            ))}
          </ul>
        )}

        <div className="project-tech-stack">
          {technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          height: 100%;
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          background-color: var(--bg-secondary);
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.25s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.03);
        }

        .project-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .demo-notice-bar {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-blue);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .project-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-navy);
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--text-slate);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-features-list {
          list-style: none;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .feature-item {
          font-size: 0.835rem;
          color: var(--text-slate);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feature-bullet {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--accent-blue);
          flex-shrink: 0;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-slate);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }
      `}</style>
    </article>
  );
}
