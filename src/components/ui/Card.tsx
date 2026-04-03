import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-7 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-950 hover:shadow-glow">
      {children}
    </div>
  );
}