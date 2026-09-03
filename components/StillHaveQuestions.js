"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, MessageSquare, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { getContactEmail } from '@/utils/contactInfo';
import { ObfuscatedEmail } from '@/components/ObfuscatedContact';
import LoadingButton from '@/components/LoadingButton';

export default function StillHaveQuestions() {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || !email.trim()) return;

    setIsSending(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formType: 'quick_inquiry',
          email: email.trim(),
          question: question.trim(),
          message: question.trim()
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setQuestion('');
      } else {
        setErrorMessage(result.error || 'Unable to submit question. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting question:', err);
      setErrorMessage('Network error. Please try again or reach out to us directly.');
    } finally {
      setIsSending(false);
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

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-xl flex items-center justify-center gap-2 text-xs text-red-600 dark:text-red-400">
          <AlertCircle size={15} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {submitted ? (
        <div className="still-questions-success">
          <CheckCircle2 size={28} className="text-emerald-500 mx-auto mb-2" />
          <p className="font-bold text-navy dark:text-white text-base">Thank you! Your question is on its way.</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Your inquiry is directed to <span className="font-semibold text-blue-600 dark:text-cyan-400"><ObfuscatedEmail showAsLink={false} /></span>. We will review it and reply to <span className="font-semibold text-navy dark:text-slate-200">{email}</span> within 24–48 hours.
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
          <LoadingButton 
            type="submit" 
            isLoading={isSending} 
            loadingText="Sending..."
            className="still-submit-btn"
          >
            <span>Send Question</span>
            <Send size={15} />
          </LoadingButton>
        </form>
      )}
    </div>
  );
}
