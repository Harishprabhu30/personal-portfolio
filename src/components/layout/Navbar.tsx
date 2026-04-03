import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/70 backdrop-blur-md">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-4">
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-base sm:text-lg font-semibold tracking-wide text-white">
            Harish Prabhu
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-400 md:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}