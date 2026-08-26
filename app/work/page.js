"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projectsData';
import { ArrowRight } from 'lucide-react';

export default function WorkPage() {
  return (
    <div className="page-work section">
      <div className="container">
        <SectionHeader
          title="Selected Work"
          subtitle="Explore genuine demo projects built to demonstrate layout architecture, system design, and technical capabilities."
        />

        {/* 3 Project Simple Grid */}
        <div className="work-projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="studio-card work-cta-card">
          <h3 className="work-cta-title">Have an idea or a business challenge?</h3>
          <p className="work-cta-sub">
            Tell us what you need, and let's explore how SyntraLoop can help.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .work-projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .work-projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .work-cta-card {
          text-align: center;
          padding: 3.5rem 2rem;
          background-color: var(--bg-secondary);
        }

        .work-cta-title {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: var(--text-navy);
        }

        .work-cta-sub {
          font-size: 1rem;
          color: var(--text-slate);
          max-width: 600px;
          margin: 0 auto 1.75rem auto;
        }
      `}</style>
    </div>
  );
}
