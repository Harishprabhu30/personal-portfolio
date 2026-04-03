import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ResumeCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 sm:p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Resume
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
          View my background quickly
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
          A concise view of my experience, technical skills, projects, and early-career
          role fit for robotics, systems, validation, and applied engineering work.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <Link href="/resume">
          <Button variant="primary">View Resume</Button>
          </Link>

          <Button
            variant="secondary"
            href="/resume/Harish_Prabhu_Resume.pdf"
          >
            Download PDF
        </Button>
      </div>
      </div>
    </section>
  );
}