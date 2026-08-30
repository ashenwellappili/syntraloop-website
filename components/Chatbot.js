"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Phone, 
  Mail, 
  FileText,
  RotateCcw,
  Minimize2,
  ChevronDown
} from 'lucide-react';

const KNOWLEDGE_BASE = [
  {
    keywords: ["service", "services", "offer", "build", "what do you do", "capabilities", "solution"],
    answer: "SyntraLoop delivers end-to-end digital engineering across 4 key tracks:\n\n1. **Web Applications & Scalable Sites** (Next.js, React, modern UI/UX)\n2. **Business Systems & Custom APIs** (PostgreSQL, Node, Python, Workflow ERPs)\n3. **AI Integration & Automation** (LLM assistants, OpenAI, Claude, smart background pipelines)\n4. **Website Maintenance & Cloud CI/CD** (Performance tuning, monitoring, edge deployments)",
    action: { text: "Explore Services", href: "/services" }
  },
  {
    keywords: ["ai", "artificial intelligence", "llm", "openai", "claude", "gpt", "chatbot", "langchain", "automation"],
    answer: "We build practical, production-ready AI integrations! This includes:\n\n• Custom AI customer assistants & conversational interfaces\n• Document & data processing pipelines with Vector DBs & RAG\n• Automated business workflows with OpenAI, Claude, and LangChain\n• Smart analytics and intelligent API orchestrations",
    action: { text: "Learn About AI Solutions", href: "/services" }
  },
  {
    keywords: ["tech", "stack", "technology", "technologies", "tools", "react", "next", "python", "node"],
    answer: "Our modern engineering stack is focused on performance and reliability:\n\n• **Frontend:** Next.js 14, React, Tailwind CSS, Three.js, TypeScript\n• **Backend & APIs:** Node.js, Python, FastAPI, Express, REST & GraphQL\n• **Databases:** PostgreSQL, Supabase, Redis, Pinecone Vector DB\n• **Cloud & DevOps:** Vercel, AWS, Docker, GitHub Actions, Sentry",
    action: { text: "View Tech Wheel", href: "/about" }
  },
  {
    keywords: ["start", "hire", "process", "work with", "timeline", "begin", "get started", "onboard"],
    answer: "Getting started with SyntraLoop is straightforward:\n\n1. **Project Assessment:** Submit your project scope & requirements.\n2. **Discovery Call:** We review technical feasibility and establish sprint milestones.\n3. **Agile Development:** Bi-weekly demos, transparent sprints, and direct communication.\n4. **Launch & Handover:** 100% code ownership, clean documentation, and post-launch support.",
    action: { text: "Request Assessment", href: "/contact#assessment-form" }
  },
  {
    keywords: ["cost", "price", "pricing", "rate", "budget", "quote", "how much"],
    answer: "We offer transparent, milestone-based pricing tailored to your project scope. Every project starts with a **Free Technical Feasibility Assessment** where we define clear sprint deliverables with zero surprise fees.",
    action: { text: "Get a Free Assessment", href: "/contact#assessment-form" }
  },
  {
    keywords: ["contact", "email", "phone", "whatsapp", "call", "reach", "number", "talk", "support"],
    answer: "You can reach the SyntraLoop engineering team directly through:\n\n• **Email:** syntraloop.contact@gmail.com\n• **WhatsApp:** +94 74 226 6041\n• **Assessment Form:** Submit directly on our contact page\n\nWe respond to all inquiries within 24–48 hours!",
    action: { text: "Open Contact Page", href: "/contact" }
  },
  {
    keywords: ["portfolio", "work", "projects", "case study", "demos", "examples", "clients"],
    answer: "Check out our portfolio showcasing production web applications, CRM platforms, interactive 3D dashboards, and intelligent API workflows built for founders and high-growth businesses.",
    action: { text: "View Portfolio", href: "/work" }
  },
  {
    keywords: ["about", "syntraloop", "company", "team", "who are you", "mission"],
    answer: "SyntraLoop is an advanced technology studio bridging business goals with modern software engineering. We believe in engineering craft, clean architecture, transparent communication, and 100% client code ownership.",
    action: { text: "About SyntraLoop", href: "/about" }
  },
  {
    keywords: ["location", "where", "office", "remote", "hours", "timezone"],
    answer: "We operate remotely and collaborate with founders, startups, and SMBs worldwide. Our core engineering hours are UTC+5:30 with proactive international client coverage.",
    action: { text: "Connect With Us", href: "/contact" }
  }
];

const QUICK_PROMPTS = [
  "What services do you offer?",
  "How do you integrate AI?",
  "What is your tech stack?",
  "How do we get started?",
  "How can I contact the team?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I'm the **SyntraLoop AI Assistant**. How can I help you today? Ask me about our custom web apps, AI integrations, pricing, or request a project assessment.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: { text: "Request Project Assessment", href: "/contact#assessment-form" }
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const findBestResponse = (query) => {
    const cleanQuery = query.toLowerCase().trim();

    // Check for greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)\b/i.test(cleanQuery)) {
      return {
        text: "Hi there! 👋 How can I help you build or scale your digital solution today? Ask me about our engineering tracks, AI solutions, or how to get started.",
        action: { text: "Explore Capabilities", href: "/services" }
      };
    }

    // Check for thank you
    if (/^(thanks|thank you|awesome|great|perfect|cool)\b/i.test(cleanQuery)) {
      return {
        text: "You're very welcome! If you're ready to discuss your project, our team is always here to help.",
        action: { text: "Start a Project", href: "/contact" }
      };
    }

    // Keyword match scoring
    let bestMatch = null;
    let highestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (cleanQuery.includes(kw)) {
          score += kw.length; // weight longer keyword matches higher
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return {
        text: bestMatch.answer,
        action: bestMatch.action
      };
    }

    // Fallback response
    return {
      text: "I'd love to help you with that! For specific architectural questions or customized proposals, you can send us a direct message or request a free technical assessment.",
      action: { text: "Request Assessment", href: "/contact#assessment-form" }
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural AI typing latency
    setTimeout(() => {
      const response = findBestResponse(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.text,
        action: response.action,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Conversation reset! How can I help you today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: { text: "Request Project Assessment", href: "/contact#assessment-form" }
      }
    ]);
  };

  return (
    <div className="syntraloop-chatbot-wrapper">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="chatbot-floating-toggle"
          aria-label="Open SyntraLoop AI Chatbot"
          title="Chat with SyntraLoop Assistant"
        >
          <div className="chatbot-toggle-inner">
            <Bot size={24} className="chatbot-bot-icon" />
            <Sparkles size={14} className="chatbot-sparkle-icon" />
            {hasUnread && <span className="chatbot-unread-dot" />}
          </div>
          <span className="chatbot-floating-tooltip">Ask SyntraLoop AI</span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window animate-scale-up" role="dialog" aria-label="SyntraLoop Assistant">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar-box">
                <Bot size={20} className="text-white" />
                <span className="chatbot-online-dot" />
              </div>
              <div>
                <h3 className="chatbot-title">SyntraLoop Assistant</h3>
                <p className="chatbot-status">
                  <span className="status-indicator" /> Online &bull; Instant Answers
                </p>
              </div>
            </div>

            <div className="chatbot-header-actions">
              <button
                type="button"
                onClick={handleResetChat}
                className="chatbot-ctrl-btn"
                title="Reset conversation"
                aria-label="Reset chat"
              >
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="chatbot-ctrl-btn"
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="chatbot-quick-bar">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="chatbot-quick-btn"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-msg-row ${msg.sender === 'user' ? 'is-user' : 'is-bot'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="chatbot-msg-avatar">
                    <Bot size={14} />
                  </div>
                )}

                <div className="chatbot-msg-bubble">
                  <div className="chatbot-msg-text">
                    {msg.text.split('\n').map((line, lIdx) => {
                      if (!line) return <br key={lIdx} />;
                      
                      // Simple bold renderer
                      const parts = line.split(/(\*\*.*?\*\*)/g);
                      return (
                        <p key={lIdx} className="mb-1 last:mb-0">
                          {parts.map((p, pIdx) => {
                            if (p.startsWith('**') && p.endsWith('**')) {
                              return <strong key={pIdx}>{p.slice(2, -2)}</strong>;
                            }
                            return p;
                          })}
                        </p>
                      );
                    })}
                  </div>

                  {msg.action && (
                    <div className="chatbot-action-box">
                      <Link
                        href={msg.action.href}
                        onClick={() => setIsOpen(false)}
                        className="chatbot-action-link"
                      >
                        <span>{msg.action.text}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  )}

                  <span className="chatbot-msg-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-msg-row is-bot">
                <div className="chatbot-msg-avatar">
                  <Bot size={14} />
                </div>
                <div className="chatbot-typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="chatbot-footer">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="chatbot-input-form"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question or describe your project..."
                className="chatbot-input-field"
                aria-label="Type message"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="chatbot-send-btn"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>

            <div className="chatbot-disclaimer">
              Powered by SyntraLoop Intelligence &bull; Responses are instant
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
