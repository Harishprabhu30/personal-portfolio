import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/projects/getAllProjects";
import { getProjectBySlug } from "@/lib/projects/getProjectBySlug";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20">
      <div className="max-w-4xl">
        <Link
          href="/projects"
          className="text-sm text-neutral-500 hover:text-white"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-neutral-800 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">
            {project.category}
          </span>
          <span className="text-xs sm:text-sm text-neutral-500">{project.timeline}</span>
          <span className="text-xs sm:text-sm text-neutral-500">{project.status}</span>
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          {project.title}
        </h1>

        <p className="mt-5 max-w-3xl leading-8 text-neutral-400">
          {project.summary}
        </p>

        <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">Role</p>
            <p className="mt-3 text-neutral-300">{project.role}</p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">Problem</p>
            <p className="mt-3 text-neutral-300">{project.problem}</p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">Impact</p>
            <p className="mt-3 text-neutral-300">{project.impact}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-800 bg-black/20 px-3 py-1 text-xs sm:text-sm text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 space-y-6 sm:space-y-8">
          {project.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-3xl border border-neutral-800 bg-neutral-950/50 p-6 sm:p-7"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                {section.heading}
              </h2>
              <p className="mt-4 leading-8 text-neutral-400">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 rounded-3xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-7">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Links</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:border-neutral-500"
              >
                GitHub
              </a>
            ) : null}

            {project.links.blog ? (
              <a
                href={project.links.blog}
                className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:border-neutral-500"
              >
                Related Blog
              </a>
            ) : null}

            {project.links.publication ? (
              <a
                href={project.links.publication}
                className="rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:border-neutral-500"
              >
                Publication
              </a>
            ) : null}

            {!project.links.github && !project.links.blog && !project.links.publication ? (
              <p className="text-neutral-500">Links will be added soon.</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}