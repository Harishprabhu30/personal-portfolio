"use client";

import { useState } from "react";

export default function AIQueryBar() {
  const [input, setInput] = useState("");

  return (
    <section className="my-16">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask about my work or leave feedback..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-5 rounded-2xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
          />

          <div className="absolute inset-0 rounded-2xl pointer-events-none border border-neutral-800" />
        </div>

        <div className="mt-3 text-sm text-neutral-500">
          Try: “What has Harish built?” · “Tell me about SLAM thesis”
        </div>
      </div>
    </section>
  );
}