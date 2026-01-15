"use client";

import { useState, useEffect } from "react";
import { Card } from "./Card";

type AnalyticsData = {
  total_leads: number;
  hot_leads: number;
  booked_services: number;
  avg_lead_score: number;
  recent_bookings: number;
};

export function AdminAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/leads')
      .then(res => res.json())
      .then(result => {
        if (result.ok) {
          const leads = result.leads;
          const analytics: AnalyticsData = {
            total_leads: leads.length,
            hot_leads: leads.filter((l: { lead_score: number }) => l.lead_score >= 25).length,
            booked_services: leads.filter((l: { has_booked_service: boolean }) => l.has_booked_service).length,
            avg_lead_score: leads.length > 0 
              ? Math.round(leads.reduce((sum: number, l: { lead_score: number }) => sum + (l.lead_score || 0), 0) / leads.length)
              : 0,
            recent_bookings: leads.filter((l: { booking_date: string | undefined }) => {
              if (!l.booking_date) return false;
              const daysSince = (Date.now() - new Date(l.booking_date).getTime()) / (1000 * 60 * 60 * 24);
              return daysSince <= 7;
            }).length
          };
          setData(analytics);
        }
      })
      .catch(err => console.error('Failed to load analytics:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Card className="p-6">
        <div className="text-center text-[rgba(254,255,255,0.62)]">Loading analytics...</div>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card className="p-6">
        <div className="text-center text-red-400">Failed to load analytics</div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <Card className="p-6 text-center">
        <div className="text-3xl font-bold text-polus-mint mb-1">{data.total_leads}</div>
        <div className="text-xs text-[rgba(254,255,255,0.62)] uppercase tracking-wide">Total Leads</div>
      </Card>
      
      <Card className="p-6 text-center bg-gradient-to-br from-polus-gold/20 to-polus-forest border-polus-gold/30">
        <div className="text-3xl font-bold text-polus-gold mb-1">{data.hot_leads}</div>
        <div className="text-xs text-[rgba(254,255,255,0.62)] uppercase tracking-wide">Hot Leads (25+)</div>
      </Card>
      
      <Card className="p-6 text-center">
        <div className="text-3xl font-bold text-polus-emerald mb-1">{data.booked_services}</div>
        <div className="text-xs text-[rgba(254,255,255,0.62)] uppercase tracking-wide">Booked</div>
      </Card>
      
      <Card className="p-6 text-center">
        <div className="text-3xl font-bold text-polus-mint mb-1">{data.avg_lead_score}</div>
        <div className="text-xs text-[rgba(254,255,255,0.62)] uppercase tracking-wide">Avg Score</div>
      </Card>
      
      <Card className="p-6 text-center">
        <div className="text-3xl font-bold text-polus-gold mb-1">{data.recent_bookings}</div>
        <div className="text-xs text-[rgba(254,255,255,0.62)] uppercase tracking-wide">Last 7 Days</div>
      </Card>
    </div>
  );
}
