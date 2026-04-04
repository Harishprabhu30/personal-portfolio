"use client";
import Button from "@/components/ui/Button";

import { useState } from "react";
import AIAnswerPanel from "./AIAnswerPanel";
import { insertFeedback } from "@/lib/supabase/queries";

const SUGGESTED_PROMPTS = [
  "What has Harish built?",
  "Tell me about SLAM",
  "What roles suit him?",
  "feedback: impressive portfolio",
];

type Props = {
  compact?: boolean;
};

export default function AIQueryBar({ compact = false }: Props) {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (customInput?: string) => {
    const raw = (customInput ?? input).trim();
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
          "Harish is an AI & Robotics Systems Engineer focused on practical system development, robotics evaluation, and applied autonomy workflows."
        );
      } else if (text.includes("slam")) {
        setAnswer(
          "His flagship thesis investigates SLAM-related localization approaches with emphasis on industrial relevance, reproducible evaluation, and real-world engineering thinking."
        );
      } else if (text.includes("roles")) {
        setAnswer(
          "He fits early-career roles across robotics, validation and testing, systems integration, embedded/IoT-adjacent engineering, and autonomy-focused technical work."
        );
      } else if (text.includes("skills") || text.includes("tools")) {
        setAnswer(
          "Core tools include Python, C++, ROS2, Linux, Isaac Sim, and Computer Vision."
        );
      } else {
        setAnswer(
          "Query not recognized yet. Try asking about projects, skills, roles, or SLAM. To send feedback, start with 'feedback:'."
        );
      }
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <section className={compact ? "m-0" : "mt-4 sm:mt-6 mb-14 sm:mb-16"}>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Ask about my work or type feedback: ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            className="w-full p-4 sm:p-5 rounded-2xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
          />

        <div className="w-full sm:w-auto">
          <Button onClick={() => handleSubmit()} variant="primary">
            {loading ? "..." : "Go"}
          </Button>
        </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSubmit(prompt)}
              className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs sm:text-sm text-neutral-400 hover:border-neutral-600 hover:text-white"
            >
              {prompt}
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm text-neutral-500">
          Ask about work, skills, role fit, or leave feedback.
        </p>

        <AIAnswerPanel answer={answer} />
      </div>
    </section>
  );
}