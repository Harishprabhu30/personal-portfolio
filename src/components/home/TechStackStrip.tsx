export default function TechStackStrip() {
  const tech = ["Python", "C++", "ROS2", "Linux", "Isaac Sim", "Computer Vision"];

  return (
    <section className="py-12">
      <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 border border-neutral-700 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}