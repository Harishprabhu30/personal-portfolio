export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-10">Featured Work</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition">
          <h3 className="text-xl font-medium">SLAM Thesis</h3>
          <p className="text-neutral-400 mt-3">
            Evaluation of SLAM approaches for practical robotics systems.
          </p>
        </div>

        <div className="p-6 border border-neutral-800 rounded-2xl hover:border-neutral-600 transition">
          <h3 className="text-xl font-medium">Radar SLAM Internship</h3>
          <p className="text-neutral-400 mt-3">
            Applied robotics and sensing work at Tampere University.
          </p>
        </div>
      </div>
    </section>
  );
}