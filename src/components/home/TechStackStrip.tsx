const tech = [
  "Python",
  "C++",
  "ROS 2",
  "Linux",
  "Isaac Sim",
  "Computer Vision",
];

export default function TechStackStrip() {
  return (
    <section className="py-16 sm:py-20">
      <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
        Core Stack
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs sm:text-sm text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}