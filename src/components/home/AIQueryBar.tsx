"use client";

import { useState } from "react";
import AIAnswerPanel from "./AIAnswerPanel";

export default function AIQueryBar() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);

  const handleSubmit = () => {
    const text = input.toLowerCase();

    // Basic logic (v1)
    if (text.includes("what") || text.includes("who")) {
      setAnswer(
        "Harish is an AI & Robotics Systems Engineer focusing on practical system development, SLAM evaluation, and robotics applications."
      );
    } else if (text.includes("slam")) {
      setAnswer(
        "His SLAM thesis focuses on evaluating localization approaches with a strong emphasis on real-world applicability and system-level understanding."
      );
    } else if (text.includes("skills") || text.includes("tools")) {
      setAnswer(
        "Core tools include Python, C++, ROS2, Linux, Isaac Sim, and Computer Vision."
      );
    } else if (text.includes("feedback")) {
      setAnswer("Feedback received. Thank you.");
      // later: send to Supabase
    } else {
      setAnswer("Query not recognized yet. Try asking about projects, skills, or SLAM.");
    }

    setInput("");
  };

  return (
    <section className="my-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask about my work or leave feedback..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-5 rounded-2xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            className="px-4 rounded-xl bg-white text-black font-medium"
          >
            Go
          </button>
        </div>

        <p className="text-sm text-neutral-500 mt-2">
          Try: “What has Harish built?” · “Tell me about SLAM”
        </p>

        <AIAnswerPanel answer={answer} />
      </div>
    </section>
  );
}