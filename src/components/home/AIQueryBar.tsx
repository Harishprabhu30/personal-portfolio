"use client";

import { useState } from "react";

export default function AIQueryBar() {
  const [input, setInput] = useState("");

  return (
    <section className="my-12">
      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Ask about my work or leave feedback..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none"
        />

        <p className="text-sm text-neutral-500 mt-2">
          Example: "What has Harish built?" or "Feedback"
        </p>
      </div>
    </section>
  );
}