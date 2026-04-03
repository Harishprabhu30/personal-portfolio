import Card from "@/components/ui/Card";

const roles = [
  {
    title: "Robotics & Autonomous Systems",
    description:
      "Positioned for early-career robotics roles involving autonomy, sensing, simulation, and system-level implementation.",
  },
  {
    title: "Validation, Testing & Evaluation",
    description:
      "Strong fit for technical roles that value debugging, comparison frameworks, verification, and practical performance assessment.",
  },
  {
    title: "Embedded, IoT & Systems Integration",
    description:
      "Aligned with roles that bridge hardware-aware software, integration workflows, and applied engineering problem-solving.",
  },
];

export default function RoleClusters() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mb-8 sm:mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Recruiter Snapshot
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Where I Fit Best
        </h2>
      </div>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
        {roles.map((role) => (
      <Card key={role.title}>
        <h3 className="text-base sm:text-lg font-semibold text-white">{role.title}</h3>
        <p className="mt-3 leading-7 text-neutral-400">{role.description}</p>
      </Card>
        ))}
      </div>
    </section>
  );
}