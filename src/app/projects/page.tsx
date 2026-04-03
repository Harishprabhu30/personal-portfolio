import Link from "next/link";
import { getAllProjects } from "@/lib/projects/getAllProjects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected robotics, SLAM-related, and applied engineering projects by Harish Prabhu.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Projects
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Selected technical work
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-neutral-400">
          A focused collection of robotics, SLAM-related, and applied engineering work
          that reflects my approach to system building, debugging, and evaluation.
        </p>
      </div>

      <div className="mt-12 sm:mt-14 grid gap-6 sm:gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-3xl border border-neutral-800 bg-neutral-950/70 p-6 sm:p-8 transition hover:border-neutral-600"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-neutral-800 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">
                {project.category}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500">{project.timeline}</span>
              <span className="text-xs sm:text-sm text-neutral-500">{project.status}</span>
            </div>

            <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-white">
              {project.title}
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-neutral-400">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-800 bg-black/20 px-3 py-1 text-xs sm:text-sm text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 text-sm text-neutral-300">Open project →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}