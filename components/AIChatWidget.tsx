'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_STARTERS = [
  { text: "What services do you offer?", icon: "🔧" },
  { text: "How much does an assessment cost?", icon: "💰" },
  { text: "When can you start?", icon: "📅" },
  { text: "Book a free call", icon: "📞" }
];

const FOLLOW_UP_ACTIONS = [
  { text: "Book Free Call", url: "https://calendly.com/jack-washmon-polus-cs/30min", icon: "📅" },
  { text: "Email Jack", url: "mailto:jack.washmon@polus-cs.com", icon: "✉️" },
  { text: "View Services", url: "/services", icon: "🔍" }
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuickStarters, setShowQuickStarters] = useState(true);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showFollowUpActions, setShowFollowUpActions] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [userTyping, setUserTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  // Load persisted messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('polus_chat_messages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
        setShowQuickStarters(false);
      } catch (e) {
        console.error('Failed to load chat history');
      }
    } else {
      setMessages([
        { 
          role: 'assistant', 
          content: 'Hi! I can help you learn about Polus services and pricing. What are you looking to improve in your business?' 
        }
      ]);
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('polus_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show follow-up actions after conversation stalls (no message for 30 seconds)
  useEffect(() => {
    if (messages.length >= 6 && !loading && !showFollowUpActions) {
      const timeout = setTimeout(() => {
        setShowFollowUpActions(true);
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [messages, loading, showFollowUpActions]);

  // Show email capture after 4 exchanges
  useEffect(() => {
    const userMessages = messages.filter(m => m.role === 'user').length;
    if (userMessages >= 4 && !showEmailCapture && !localStorage.getItem('polus_email_captured')) {
      setShowEmailCapture(true);
    }
  }, [messages, showEmailCapture]);

  // Show rating after chat closes
  useEffect(() => {
    if (!isOpen && messages.length > 4 && !showRating && !localStorage.getItem('polus_chat_rated')) {
      const timeout = setTimeout(() => {
        setShowRating(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, messages, showRating]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickStarter = (text: string) => {
    if (text === "Book a free call") {
      window.open("https://calendly.com/jack-washmon-polus-cs/30min", "_blank");
      return;
    }
    setInput(text);
    setShowQuickStarters(false);
    setTimeout(() => sendMessage(text), 100);
  };

  const handleStartOver = () => {
    if (confirm('Are you sure you want to start a new conversation? This will clear your chat history.')) {
      setMessages([
        { 
          role: 'assistant', 
          content: 'Hi! I can help you learn about Polus services and pricing. What are you looking to improve in your business?' 
        }
      ]);
      localStorage.removeItem('polus_chat_messages');
      setShowQuickStarters(true);
      setShowEmailCapture(false);
      setShowFollowUpActions(false);
    }
  };

  const handleEmailCapture = async (email: string) => {
    try {
      // Log email capture (you could also send to your backend)
      console.log('Email captured:', email);
      localStorage.setItem('polus_email_captured', 'true');
      
      // Generate transcript
      const transcript = messages
        .map(m => `${m.role === 'user' ? 'You' : 'Polus'}: ${m.content}`)
        .join('\n\n');
      
      // In production, you'd send this to your backend to email the transcript
      // For now, just show success message
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Great! I'll send this conversation to ${email} along with a link to book a call. Check your inbox in a few minutes!`
      }]);
      setShowEmailCapture(false);
    } catch (error) {
      console.error('Email capture error:', error);
    }
  };

  const handleRating = (helpful: boolean) => {
    console.log('Chat rating:', helpful ? 'helpful' : 'not helpful');
    localStorage.setItem('polus_chat_rated', helpful ? 'helpful' : 'not-helpful');
    setShowRating(false);
    
    // Show thank you message
    if (helpful) {
      alert('Thanks for your feedback! 😊');
    } else {
      alert('Thanks for your feedback. We\'ll work on improving!');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setUserTyping(true);
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    typingTimeoutRef.current = setTimeout(() => {
      setUserTyping(false);
    }, 1000);
  };

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || loading) return;

    const userMessage = { role: 'user' as const, content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setShowQuickStarters(false);
    setShowFollowUpActions(false);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      // Parse service links in response
      let content = data.message;
      const serviceNames = [
        'Systems Review', 'Identity & Security', 'Backup Verification',
        'Strategic Advisory', 'M365 Optimization', 'Process Documentation', 'Employee Lifecycle',
        'Email Migration', 'Backup & DR Readiness', 'Business Continuity Plan'
      ];
      
      serviceNames.forEach(service => {
        const slug = service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
        content = content.replace(
          new RegExp(service, 'gi'),
          `<a href="/services/${slug}" target="_blank" class="text-polus-gold hover:underline">${service}</a>`
        );
      });
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, something went wrong. Please email jack.washmon@polus-cs.com or book a call.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Business hours check (Monday-Friday, 8am-6pm Central)
  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return day >= 1 && day <= 5 && hour >= 8 && hour < 18;
  };

  return (
    <>
      {/* Rating popup */}
      {showRating && !isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-polus-surface1 border border-[rgba(177,227,199,0.12)] rounded-lg shadow-2xl p-4 z-50 animate-slideUp">
          <button
            onClick={() => setShowRating(false)}
            className="absolute top-2 right-2 text-[rgba(254,255,255,0.48)] hover:text-polus-paper"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-sm text-polus-paper mb-3 pr-4">Was the chat helpful?</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleRating(true)}
              aria-label="Yes, the chat was helpful"
              className="flex-1 px-4 py-2 bg-polus-emerald/20 text-polus-mint border border-polus-mint/30 rounded-md hover:bg-polus-emerald/30 transition-colors text-sm font-medium"
            >
              👍 Yes
            </button>
            <button
              onClick={() => handleRating(false)}
              aria-label="No, the chat was not helpful"
              className="flex-1 px-4 py-2 bg-polus-surface2 text-polus-paper border border-[rgba(177,227,199,0.12)] rounded-md hover:bg-polus-surface3 transition-colors text-sm font-medium"
            >
              👎 No
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-polus-gold rounded-full shadow-lg flex items-center justify-center hover:bg-polus-gold/90 transition-all hover:scale-110 z-50 group"
          aria-label="Open chat"
        >
          <svg className="w-6 h-6 text-polus-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {/* Pulse animation */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-polus-gold opacity-75 animate-ping"></span>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
          className={`fixed ${isMobile ? 'inset-0' : 'bottom-6 right-6 w-96 h-[600px]'} bg-polus-surface1 border border-[rgba(177,227,199,0.12)] ${isMobile ? '' : 'rounded-lg'} shadow-2xl flex flex-col z-50 animate-slideUp`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[rgba(177,227,199,0.12)] bg-polus-surface2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-polus-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-polus-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div id="chat-title">
                <h3 className="font-semibold text-polus-paper">Polus Assistant</h3>
                <div className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${isBusinessHours() ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                  <p className="text-xs text-[rgba(254,255,255,0.48)]">
                    {isBusinessHours() ? 'Online' : 'Jack replies within 1 business day'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleStartOver}
                className="text-[rgba(254,255,255,0.48)] hover:text-polus-paper transition-colors"
                aria-label="Start over"
                title="Start new conversation"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-[rgba(254,255,255,0.48)] hover:text-polus-paper transition-colors"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Quick starters */}
            {showQuickStarters && messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-[rgba(254,255,255,0.48)] text-center mb-3">Quick questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_STARTERS.map((starter, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickStarter(starter.text)}
                      className="p-3 bg-polus-surface2 border border-[rgba(177,227,199,0.12)] rounded-lg hover:border-polus-gold/30 hover:bg-polus-surface3 transition-all text-left text-sm"
                    >
                      <span className="text-lg mb-1 block">{starter.icon}</span>
                      <span className="text-polus-paper text-xs">{starter.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-polus-gold text-polus-forest rounded-br-none' 
                    : 'bg-polus-surface2 text-polus-paper rounded-bl-none border border-[rgba(177,227,199,0.08)]'
                }`}>
                  <p 
                    className="text-sm whitespace-pre-wrap leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
              </div>
            ))}

            {/* Email capture */}
            {showEmailCapture && (
              <div className="bg-polus-emerald/10 border border-polus-mint/30 rounded-lg p-4 space-y-3">
                <p className="text-sm text-polus-paper">📧 Want this conversation emailed to you?</p>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = (e.target as any).email.value;
                    if (email) handleEmailCapture(email);
                  }}
                  className="flex gap-2"
                >
                  <label htmlFor="chat-email-capture" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="chat-email-capture"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-3 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.12)] rounded-md text-polus-paper text-sm focus:outline-none focus:border-polus-mint"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-polus-gold text-polus-forest rounded-md hover:bg-polus-gold/90 transition-all font-medium text-sm"
                  >
                    Send
                  </button>
                </form>
                <button
                  onClick={() => setShowEmailCapture(false)}
                  className="text-xs text-[rgba(254,255,255,0.48)] hover:text-polus-paper"
                >
                  No thanks
                </button>
              </div>
            )}

            {/* Follow-up actions */}
            {showFollowUpActions && !loading && (
              <div className="space-y-2">
                <p className="text-xs text-[rgba(254,255,255,0.48)] text-center">Want to take the next step?</p>
                <div className="grid grid-cols-1 gap-2">
                  {FOLLOW_UP_ACTIONS.map((action, i) => (
                    <a
                      key={i}
                      href={action.url}
                      target={action.url.startsWith('http') ? '_blank' : undefined}
                      rel={action.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2 p-3 bg-polus-surface2 border border-[rgba(177,227,199,0.12)] rounded-lg hover:border-polus-gold/30 hover:bg-polus-surface3 transition-all text-sm text-polus-paper"
                    >
                      <span className="text-lg">{action.icon}</span>
                      <span>{action.text}</span>
                    </a>
                  ))}
                </div>
                <button
                  onClick={() => setShowFollowUpActions(false)}
                  className="text-xs text-[rgba(254,255,255,0.48)] hover:text-polus-paper w-full text-center"
                >
                  Continue chatting
                </button>
              </div>
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-polus-surface2 border border-[rgba(177,227,199,0.08)] text-polus-paper p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-polus-mint rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-polus-mint rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-polus-mint rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            {userTyping && input && (
              <div className="flex justify-end">
                <div className="bg-polus-gold/20 border border-polus-gold/30 text-polus-gold p-2 px-3 rounded-lg rounded-br-none text-xs">
                  typing...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[rgba(177,227,199,0.12)] bg-polus-surface2">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask about services, pricing..."
                className="flex-1 px-3 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.12)] rounded-md text-polus-paper text-sm focus:outline-none focus:border-polus-mint placeholder:text-[rgba(254,255,255,0.38)]"
                disabled={loading}
                aria-label="Type your message"
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="px-4 py-2 bg-polus-gold text-polus-forest rounded-md hover:bg-polus-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-[rgba(254,255,255,0.38)] mt-2 text-center">
              Powered by AI • Press Enter to send
            </p>
          </div>
        </div>
      )}
    </>
  );
}
