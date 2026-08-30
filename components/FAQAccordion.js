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
    </div>
  );
}
