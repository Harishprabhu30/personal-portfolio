export default function ResumePage() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Resume
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Experience, skills, and early-career role fit
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-neutral-400">
          A recruiter-friendly overview of my technical direction, strongest skills,
          project focus, and role alignment across robotics, systems, validation, and
          applied engineering work.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href="/resume/Harish_Prabhu_Resume.pdf"
            className="rounded-2xl bg-white px-5 py-3 text-center font-medium text-black"
          >
            View PDF
          </a>

          <a
            href="/resume/Harish_Prabhu_Resume.pdf"
            download
            className="rounded-2xl border border-neutral-700 px-5 py-3 text-center font-medium text-white hover:border-neutral-500"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Role Fit</h2>
            <ul className="mt-5 space-y-3 text-neutral-400">
              <li>AI & Robotics Systems Engineer</li>
              <li>Robotics / Autonomous Systems</li>
              <li>Validation, Testing & Evaluation</li>
              <li>Embedded / IoT / Systems Integration</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-7">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">Core Stack</h2>
            <ul className="mt-5 space-y-3 text-neutral-400">
              <li>Python</li>
              <li>C++</li>
              <li>ROS 2</li>
              <li>Linux</li>
              <li>Isaac Sim</li>
              <li>Computer Vision</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-7">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Highlights</h2>
          <ul className="mt-5 space-y-4 leading-8 text-neutral-400">
            <li>Built a robotics-focused thesis project around SLAM-related evaluation and practical engineering relevance.</li>
            <li>Developed experience around simulation, sensing, and system-level technical workflows.</li>
            <li>Interested in early-career roles where implementation discipline and debugging mindset matter.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl border border-dashed border-neutral-800 p-6 sm:p-7">
          <p className="text-neutral-500">
            Resume PDF path: <span className="text-neutral-300">public/resume/Harish_Prabhu_Resume.pdf</span>
          </p>
        </div>
      </div>
    </div>
  );
}