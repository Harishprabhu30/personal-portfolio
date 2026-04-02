import Link from "next/link";

const projects = [
  {
    title: "SLAM Thesis",
    description:
      "A robotics systems project investigating SLAM-related localization approaches with emphasis on evaluation, industrial relevance, and practical deployment thinking.",
    href: "/projects/slam-thesis",
    tag: "Flagship Project",
  },
  {
    title: "Radar SLAM Internship",
    description:
      "Applied sensing and robotics work connected to Tampere University, extending practical experience toward real-world autonomy workflows.",
    href: "/projects/tampere-radar-slam",
    tag: "Experience / Internship",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">
          Featured Projects
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-500">
          A focused selection of work that reflects practical robotics engineering,
          system evaluation, and real-world technical thinking.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group rounded-3xl border border-neutral-800 bg-neutral-950/70 p-7 transition hover:border-neutral-600 hover:bg-neutral-950"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {project.tag}
            </p>

            <h3 className="mt-4 text-2xl font-semibold text-white transition group-hover:text-neutral-100">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-neutral-400">
              {project.description}
            </p>

            <div className="mt-8 text-sm text-neutral-300">
              View project →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}