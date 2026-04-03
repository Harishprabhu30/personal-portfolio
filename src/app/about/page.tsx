export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          About
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Practical systems thinking for robotics-focused engineering
        </h1>

        <p className="mt-6 leading-8 text-neutral-400">
          I am building my path around AI and robotics systems through simulation,
          localization, evaluation, and applied technical problem-solving. My work is
          guided by curiosity, but also by a practical mindset: understanding how
          systems behave, why they fail, and how engineering choices affect real use.
        </p>

        <p className="mt-6 leading-8 text-neutral-400">
          My interests sit across robotics, SLAM-related systems, validation and
          testing, systems integration, and early-career technical roles where clear
          debugging and structured implementation matter.
        </p>

        <p className="mt-6 leading-8 text-neutral-400">
          Based in Lithuania and open to opportunities across Europe, I want to
          contribute in environments where I can keep growing through hands-on work,
          careful technical reasoning, and real engineering collaboration.
        </p>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-white">Build</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              I enjoy creating structured systems rather than isolated demos.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-white">Debug</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              I care about understanding what breaks, why it breaks, and how to verify improvements.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-white">Apply</h2>
            <p className="mt-3 leading-7 text-neutral-400">
              I aim to connect technical work with realistic engineering value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}