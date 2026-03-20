// ChatWidget.tsx
// Design: Space Grotesk headings, DM Sans body, orange (#E98C28) + teal (#318599) brand palette
// Purpose: Static AI FAQ chat widget — catches pre-conversion questions without live staffing
// No backend required — all answers are pre-written and served client-side

import { useState, useRef, useEffect } from 'react';

const GHL_URL = 'https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const QUICK_REPLIES = [
  { label: 'What is The Lab?', key: 'what' },
  { label: 'How much does it cost?', key: 'price' },
  { label: 'What are Thursday sessions?', key: 'thursday' },
  { label: 'Can I cancel anytime?', key: 'cancel' },
  { label: 'Do I need to be technical?', key: 'technical' },
  { label: "What's the difference vs free?", key: 'diff' },
];

const ANSWERS: Record<string, string> = {
  what: "The KnowHow Lab is a $29/month membership community for business owners and marketing managers. Every Thursday 12–1pm Pacific, Pip and Phelan work through real member campaigns, ad accounts, website audits, and SEO issues live — hands-on help, not just Q&A. You also get full course access, monthly deep-dive training, and a private community group.",
  price: "The Lab is $29/month — that's the early access founding rate. It will increase as the community grows. Members who join now lock in $29 forever. You can cancel anytime in 60 seconds, no questions asked.",
  thursday: "Thursday Lab sessions run every Thursday 12–1pm Pacific (members only). You bring your real campaigns, ad accounts, website, or SEO questions. Pip and Phelan review them live on screen — not just advice, actual hands-on work. Every session is recorded so you can watch the replay anytime.",
  cancel: "Yes — cancel anytime, directly from your GoHighLevel account. No lock-in contracts, no cancellation fees, no forms to fill out. Your access continues until the end of your billing period.",
  technical: "Not at all. The curriculum starts from the foundations — how Google Search works, what Search Console is, and why SEO matters — and builds progressively to advanced topics like Google Ads scripts and AI agents. Beginners and experienced marketers both get value.",
  diff: "The free Power Hours (Tuesdays) are open to anyone — general Q&A, no sign-up required. The Lab ($29/mo) is members-only and goes much deeper: Thursday sessions where Pip and Phelan work through YOUR specific campaigns live, full course library, monthly training, fillable worksheets, and a private community group.",
};

const WELCOME: Message = {
  role: 'bot',
  text: "Hi! I'm the KnowHow Lab assistant. Ask me anything about The Lab, or pick a quick question below.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-open after 90 seconds if not dismissed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setOpen(true);
    }, 90000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleQuickReply = (key: string, label: string) => {
    const userMsg: Message = { role: 'user', text: label };
    const botMsg: Message = { role: 'bot', text: ANSWERS[key] };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setShowQuickReplies(false);
  };

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);
  };

  const handleReset = () => {
    setMessages([WELCOME]);
    setShowQuickReplies(true);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#E98C28] text-white shadow-lg hover:bg-[#D47D1E] transition-all duration-200 flex items-center justify-center"
          aria-label="Open chat — ask us about The Lab"
          style={{ boxShadow: '0 4px 24px rgba(233,140,40,0.4)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ maxHeight: '520px', boxShadow: '0 8px 40px rgba(15,34,54,0.25)' }}
          role="dialog"
          aria-label="KnowHow Lab chat assistant"
          aria-modal="false"
        >
          {/* Header */}
          <div className="bg-[#0f2236] px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E98C28] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>KnowHow Lab</p>
                <p className="text-gray-400 text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>Ask us anything</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                aria-label="Reset conversation"
                title="Start over"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-white px-4 py-4 space-y-3" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#E98C28] text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick reply buttons */}
            {showQuickReplies && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map(qr => (
                  <button
                    key={qr.key}
                    onClick={() => handleQuickReply(qr.key, qr.label)}
                    className="text-xs bg-white border border-gray-200 text-gray-700 rounded-full px-3 py-1.5 hover:border-[#E98C28] hover:text-[#E98C28] transition-all duration-150"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Show quick replies again after conversation */}
            {!showQuickReplies && messages.length > 1 && (
              <div className="pt-1">
                <button
                  onClick={() => setShowQuickReplies(true)}
                  className="text-xs text-[#318599] hover:underline"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Ask another question ↓
                </button>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* CTA footer */}
          <div className="bg-gray-50 border-t border-gray-100 px-4 py-3 flex-shrink-0">
            <a
              href={GHL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#E98C28] hover:bg-[#D47D1E] text-white font-bold rounded-xl py-2.5 text-sm transition-all duration-200"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              aria-label="Join The Lab for $29 per month"
            >
              Join The Lab — $29/mo →
            </a>
            <p className="text-center text-xs text-gray-400 mt-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Cancel anytime · No contracts
            </p>
          </div>
        </div>
      )}
    </>
  );
}
