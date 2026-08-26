"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-accordion-container">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              className="faq-question-btn"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-btn-${idx}`}
            >
              <span className="faq-question-text">{item.question}</span>
              <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
            </button>

            {isOpen && (
              <div 
                id={`faq-answer-${idx}`}
                className="faq-answer-content"
                role="region"
                aria-labelledby={`faq-btn-${idx}`}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}

      <style jsx>{`
        .faq-accordion-container {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.15s ease;
        }

        .faq-item:hover, .faq-item.active {
          border-color: #CBD5E1;
        }

        .faq-question-btn {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          color: var(--text-navy);
        }

        .faq-question-text {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.025rem;
          padding-right: 1rem;
        }

        .faq-chevron {
          color: var(--text-muted);
          transition: transform 0.15s ease;
          flex-shrink: 0;
        }

        .faq-chevron.rotated {
          transform: rotate(180deg);
          color: var(--accent-blue);
        }

        .faq-answer-content {
          padding: 0 1.5rem 1.25rem 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .faq-answer-content p {
          font-size: 0.9375rem;
          color: var(--text-slate);
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
}
