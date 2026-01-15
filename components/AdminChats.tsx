"use client";

import { Card } from "./Card";

export function AdminChats() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Chat Conversations</h3>
      <div className="text-center text-[rgba(254,255,255,0.62)] py-8">
        <p className="mb-2">Chat history coming soon!</p>
        <p className="text-sm">
          You currently receive email notifications when users:
        </p>
        <ul className="text-sm mt-2 space-y-1">
          <li>✓ Provide their email (3+ messages)</li>
          <li>✓ Rate the chat helpful/not helpful (6+ messages)</li>
        </ul>
      </div>
    </Card>
  );
}
