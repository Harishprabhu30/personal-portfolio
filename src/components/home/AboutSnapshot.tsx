import Link from "next/link";

export default function AboutSnapshot() {
  return (
    <section className="py-20 sm:py-24">
      <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            About
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Practical engineering, structured thinking, and robotics-focused growth
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-neutral-400">
            I am building my path around AI and robotics systems through simulation,
            localization, evaluation, and applied technical problem-solving. My work
            focuses on understanding how systems behave in practice, how failures can
            be diagnosed clearly, and how engineering decisions translate toward real
            deployment contexts.
          </p>
          <p className="mt-5 max-w-3xl leading-8 text-neutral-400">
            Based in Lithuania and open to opportunities across Europe, I am especially
            interested in early-career roles where I can contribute through systems
            thinking, implementation discipline, and curiosity-driven engineering.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Strengths
          </p>

          <ul className="mt-5 space-y-4 text-neutral-300">
            <li>Practical system builder</li>
            <li>Strong debugging mindset</li>
            <li>Simulation-to-real-world thinking</li>
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-2xl border border-neutral-700 px-4 py-2 text-sm text-white hover:border-neutral-500"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}