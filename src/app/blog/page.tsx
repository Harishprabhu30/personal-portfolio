import Link from "next/link";
import { getAllPosts } from "@/lib/blog/getAllPosts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Blog
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-white">
          Notes, lessons, and technical reflections
        </h1>
        <p className="mt-6 max-w-3xl leading-8 text-neutral-400">
          A growing collection of writing around SLAM, robotics implementation,
          debugging, simulation, and engineering system design.
        </p>
      </div>

      <div className="mt-14 grid gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-3xl border border-neutral-800 bg-neutral-950/70 p-8 transition hover:border-neutral-600"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-neutral-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                {post.category}
              </span>
              <span className="text-sm text-neutral-500">{post.date}</span>
              {post.series ? (
                <span className="text-sm text-neutral-500">{post.series}</span>
              ) : null}
            </div>

            <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-white">
              {post.title}
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-neutral-400">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-800 bg-black/20 px-3 py-1 text-sm text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 text-sm text-neutral-300">Read post →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}