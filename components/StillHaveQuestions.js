"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, MessageSquare, Mail, ArrowRight } from 'lucide-react';

export default function StillHaveQuestions() {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const targetEmail = "syntraloop.contact@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && email.trim()) {
      // Construct mailto link to syntraloop.contact@gmail.com
      const subject = encodeURIComponent(`[SyntraLoop Inquiry] Question from ${email.trim()}`);
      const body = encodeURIComponent(
        `Hello SyntraLoop Team,\n\nI have a question:\n\n"${question.trim()}"\n\nPlease respond to me at: ${email.trim()}\n\nBest regards,\n${email.trim()}`
      );
      
      const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
      
      // Trigger user's email client / mail handler
      window.location.href = mailtoUrl;

      setSubmitted(true);
    }
  };

  return (
    <div className="still-questions-card text-center">
      <div className="still-questions-icon">
        <MessageSquare size={22} />
      </div>
      <h3 className="still-questions-title">Still have questions?</h3>
      <p className="still-questions-sub">
        Can’t find the answer you’re looking for? Send us a quick note and our team will get back to you.
      </p>

      {submitted ? (
        <div className="still-questions-success">
          <CheckCircle2 size={28} className="text-emerald-500 mx-auto mb-2" />
          <p className="font-bold text-navy dark:text-white text-base">Thank you! Your question is on its way.</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Your inquiry is directed to <span className="font-semibold text-blue-600 dark:text-cyan-400">{targetEmail}</span>. We will review it and reply to <span className="font-semibold text-navy dark:text-slate-200">{email}</span> within 24–48 hours.
          </p>
          <button 
            type="button" 
            onClick={() => {
              setSubmitted(false);
              setQuestion('');
            }}
            className="mt-3 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 underline"
          >
            Send another question
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="still-questions-form">
          <div className="still-questions-inputs">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="still-input"
              required
            />
            <input 
              type="text" 
              placeholder="Type your question here..." 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="still-input"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary still-submit-btn">
            <span>Send Question</span>
            <Send size={15} />
          </button>
        </form>
      )}
    </div>
  );
}
