"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

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
              <div className={`faq-icon-box ${isOpen ? 'open' : ''}`}>
                <Plus size={18} className="faq-plus-icon" />
              </div>
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
          max-width: 820px;
          margin: 0 auto;
        }

        .faq-item {
          background-color: #FFFFFF;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .faq-item:hover, .faq-item.active {
          border-color: #0057D8;
          box-shadow: 0 4px 14px rgba(0, 87, 216, 0.08);
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
          outline-none;
        }

        .faq-question-btn:focus-visible {
          outline: 2px solid var(--accent-blue);
          outline-offset: -2px;
        }

        .faq-question-text {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.025rem;
          padding-right: 1rem;
        }

        .faq-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-slate);
          flex-shrink: 0;
          transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
        }

        .faq-icon-box.open {
          transform: rotate(45deg);
          background-color: #EBF3FF;
          color: var(--accent-blue);
        }

        .faq-answer-content {
          padding: 0 1.5rem 1.35rem 1.5rem;
          border-top: 1px solid var(--border-color);
          animation: faqFadeDown 0.25s ease-out forwards;
        }

        @keyframes faqFadeDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-answer-content p {
          font-size: 0.9375rem;
          color: var(--text-slate);
          line-height: 1.65;
          margin-top: 1rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-icon-box {
            transition: none !important;
          }
          .faq-answer-content {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
