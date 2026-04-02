"use client";

type Props = {
  answer: string | null;
};

export default function AIAnswerPanel({ answer }: Props) {
  if (!answer) return null;

  return (
    <div className="mt-6 max-w-2xl mx-auto p-5 rounded-2xl border border-neutral-800 bg-neutral-950 text-sm text-neutral-300">
      <p className="text-neutral-500 mb-2">System Response</p>
      <p>{answer}</p>
    </div>
  );
}