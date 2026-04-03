import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Harish Prabhu for robotics, systems, validation, simulation, and related early-career opportunities across Europe.",
};

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Contact
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Let’s connect professionally
        </h1>

        <p className="mt-6 leading-8 text-neutral-400">
          I am open to opportunities across Europe in robotics, systems, validation,
          simulation, and related early-career technical roles.
        </p>

        <div className="mt-10 grid gap-5 sm:gap-6">
          <a
            href="harishprabhu3007@gmail.com"
            className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6 hover:border-neutral-600"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Email</p>
            <p className="mt-2 text-base sm:text-lg text-white break-all">
              your-email@example.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/Harishprabhu3007"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6 hover:border-neutral-600"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">LinkedIn</p>
            <p className="mt-2 text-base sm:text-lg text-white">Open LinkedIn profile</p>
          </a>

          <a
            href="https://github.com/Harishprabhu30"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 sm:p-6 hover:border-neutral-600"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">GitHub</p>
            <p className="mt-2 text-base sm:text-lg text-white">View repositories</p>
          </a>
        </div>
      </div>
    </div>
  );
}