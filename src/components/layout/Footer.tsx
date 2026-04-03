export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800 px-4 sm:px-6 md:px-12 lg:px-24 py-10 text-sm text-neutral-500">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Harish Prabhu</p>
        <p>AI & Robotics Systems Engineer</p>
      </div>
    </footer>
  );
}