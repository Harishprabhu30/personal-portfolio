import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-neutral-800 backdrop-blur-md bg-black/70 sticky top-0 z-50">
      <div className="font-semibold tracking-wide text-white">
        Harish Prabhu
      </div>

      <div className="flex gap-6 text-sm text-neutral-400">
        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/about" className="hover:text-white">About</Link>
        <Link href="/projects" className="hover:text-white">Projects</Link>
        <Link href="/blog" className="hover:text-white">Blog</Link>
        <Link href="/resume" className="hover:text-white">Resume</Link>
        <Link href="/contact" className="hover:text-white">Contact</Link>
      </div>
    </nav>
  );
}