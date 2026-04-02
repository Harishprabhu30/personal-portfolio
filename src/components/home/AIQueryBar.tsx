"use client";

import { useState } from "react";
import AIAnswerPanel from "./AIAnswerPanel";
import { insertFeedback } from "@/lib/supabase/queries";

export default function AIQueryBar() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const raw = input.trim();
    const text = raw.toLowerCase();

    if (!raw) return;

    setLoading(true);

    try {
      if (
        text.startsWith("feedback:") ||
        text.startsWith("suggestion:") ||
        text.startsWith("comment:")
      ) {
        const cleaned = raw.replace(/^(feedback|suggestion|comment)\s*:\s*/i, "");
        const { error } = await insertFeedback(cleaned || raw, "/");

        if (error) {
          setAnswer("Could not save feedback right now.");
        } else {
          setAnswer("Feedback received. Thank you.");
        }
      } else if (text.includes("what") || text.includes("who")) {
        setAnswer(
          "Harish is an AI & Robotics Systems Engineer focusing on practical system development, SLAM evaluation, and robotics applications."
        );
      } else if (text.includes("slam")) {
        setAnswer(
          "His SLAM thesis focuses on evaluating localization approaches with strong attention to industrial relevance, system design, and real-world applicability."
        );
      } else if (text.includes("skills") || text.includes("tools")) {
        setAnswer(
          "Core tools include Python, C++, ROS2, Linux, Isaac Sim, and Computer Vision."
        );
      } else {
        setAnswer(
          "Query not recognized yet. Try asking about projects, skills, or SLAM. To send feedback, start with 'feedback:'."
        );
      }
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <section className="my-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask about my work or type feedback: ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full p-5 rounded-2xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 rounded-xl bg-white text-black font-medium disabled:opacity-60"
          >
            {loading ? "..." : "Go"}
          </button>
        </div>

        <p className="text-sm text-neutral-500 mt-2">
          Try: “What has Harish built?” · “Tell me about SLAM” · “feedback: strong thesis work”
        </p>

        <AIAnswerPanel answer={answer} />
      </div>
    </section>
  );
}