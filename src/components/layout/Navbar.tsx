import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-neutral-800">
      <div className="font-semibold tracking-wide">HP</div>

      <div className="flex gap-6 text-sm text-neutral-400">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}