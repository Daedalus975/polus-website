"use client";

import { useState, useEffect } from "react";
import { Card } from "./Card";

type Lead = {
  email: string;
  name?: string;
  source: string;
  created_at: string;
  lead_score: number;
  events: Array<{
    type: string;
    timestamp: string;
    metadata?: Record<string, unknown>;
  }>;
  has_booked_service: boolean;
  booking_date?: string;
  emails_sent?: {
    day1_welcome: string;
    day3_education: string;
    day7_book_call: string;
    day14_still_thinking: string;
  };
};

export function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'hot' | 'booked'>('all');
  const [expandedLead, setExpandedLead] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/leads')
      .then(res => res.json())
      .then(result => {
        if (result.ok) {
          setLeads(result.leads);
        }
      })
      .catch(err => console.error('Failed to load leads:', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredLeads = leads.filter(lead => {
    if (filter === 'hot') return lead.lead_score >= 25;
    if (filter === 'booked') return lead.has_booked_service;
    return true;
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 25) return 'text-polus-gold';
    if (score >= 15) return 'text-polus-mint';
    return 'text-[rgba(254,255,255,0.62)]';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 25) return { label: 'HOT', color: 'bg-polus-gold/20 text-polus-gold border-polus-gold/30' };
    if (score >= 15) return { label: 'WARM', color: 'bg-polus-mint/20 text-polus-mint border-polus-mint/30' };
    return { label: 'COLD', color: 'bg-[rgba(254,255,255,0.1)] text-[rgba(254,255,255,0.62)] border-[rgba(177,227,199,0.16)]' };
  };

  if (loading) {
    return (
      <Card className="p-8">
        <h3 className="text-xl font-semibold mb-4">Leads</h3>
        <div className="text-center text-[rgba(254,255,255,0.62)]">Loading leads...</div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Leads ({filteredLeads.length})</h3>
        
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 text-sm rounded-lg transition ${
              filter === 'all'
                ? 'bg-polus-mint text-polus-forest font-semibold'
                : 'bg-polus-surface1 text-[rgba(254,255,255,0.62)] hover:text-polus-mint'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('hot')}
            className={`px-3 py-1 text-sm rounded-lg transition ${
              filter === 'hot'
                ? 'bg-polus-gold text-polus-forest font-semibold'
                : 'bg-polus-surface1 text-[rgba(254,255,255,0.62)] hover:text-polus-gold'
            }`}
          >
            Hot (25+)
          </button>
          <button
            onClick={() => setFilter('booked')}
            className={`px-3 py-1 text-sm rounded-lg transition ${
              filter === 'booked'
                ? 'bg-polus-emerald text-polus-forest font-semibold'
                : 'bg-polus-surface1 text-[rgba(254,255,255,0.62)] hover:text-polus-emerald'
            }`}
          >
            Booked
          </button>
        </div>
      </div>

      {filteredLeads.length === 0 ? (
        <div className="text-center text-[rgba(254,255,255,0.62)] py-8">
          No leads found
        </div>
      ) : (
        <div className="space-y-3">
          {filteredLeads.map(lead => {
            const badge = getScoreBadge(lead.lead_score);
            const isExpanded = expandedLead === lead.email;
            
            return (
              <div
                key={lead.email}
                className="border border-[rgba(177,227,199,0.16)] rounded-lg overflow-hidden hover:border-polus-mint/30 transition"
              >
                <button
                  onClick={() => setExpandedLead(isExpanded ? null : lead.email)}
                  className="w-full text-left p-4 hover:bg-[rgba(177,227,199,0.05)] transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-polus-paper truncate">
                          {lead.name || lead.email}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${badge.color}`}>
                          {badge.label}
                        </span>
                        {lead.has_booked_service && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-polus-emerald/20 text-polus-emerald border border-polus-emerald/30">
                            ✓ BOOKED
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-[rgba(254,255,255,0.62)] truncate">
                        {lead.email}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getScoreColor(lead.lead_score)}`}>
                          {lead.lead_score}
                        </div>
                        <div className="text-xs text-[rgba(254,255,255,0.45)]">Score</div>
                      </div>
                      
                      <svg
                        className={`w-5 h-5 text-polus-mint transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-[rgba(177,227,199,0.08)]">
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-xs text-[rgba(254,255,255,0.45)] uppercase tracking-wide mb-2">Details</div>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[rgba(254,255,255,0.62)]">Source:</span>
                            <span className="text-polus-paper font-medium">{lead.source}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[rgba(254,255,255,0.62)]">Created:</span>
                            <span className="text-polus-paper font-medium">{formatDate(lead.created_at)}</span>
                          </div>
                          {lead.booking_date && (
                            <div className="flex justify-between">
                              <span className="text-[rgba(254,255,255,0.62)]">Booked:</span>
                              <span className="text-polus-emerald font-medium">{formatDate(lead.booking_date)}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {lead.emails_sent && (
                        <div>
                          <div className="text-xs text-[rgba(254,255,255,0.45)] uppercase tracking-wide mb-2">Email Status</div>
                          <div className="space-y-1 text-sm">
                            {Object.entries(lead.emails_sent).map(([key, status]) => {
                              const statusColors = {
                                sent: 'text-polus-emerald',
                                pending: 'text-polus-gold',
                                failed: 'text-red-400',
                                skipped: 'text-[rgba(254,255,255,0.45)]'
                              };
                              return (
                                <div key={key} className="flex justify-between">
                                  <span className="text-[rgba(254,255,255,0.62)]">{key.replace(/_/g, ' ')}:</span>
                                  <span className={`font-medium ${statusColors[status as keyof typeof statusColors]}`}>
                                    {status}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {lead.events.length > 0 && (
                      <div className="mt-4">
                        <div className="text-xs text-[rgba(254,255,255,0.45)] uppercase tracking-wide mb-2">
                          Activity ({lead.events.length})
                        </div>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                          {lead.events.slice(0, 10).map((event, idx) => (
                            <div key={idx} className="text-sm flex items-center gap-2 p-2 bg-polus-surface1 rounded">
                              <span className="text-polus-mint">•</span>
                              <span className="text-[rgba(254,255,255,0.78)] flex-1">
                                {event.type.replace(/_/g, ' ')}
                              </span>
                              <span className="text-xs text-[rgba(254,255,255,0.45)]">
                                {formatDate(event.timestamp)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
