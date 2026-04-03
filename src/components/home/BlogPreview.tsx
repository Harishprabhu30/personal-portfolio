import Link from "next/link";
import { getAllPosts } from "@/lib/blog/getAllPosts";
import Card from "@/components/ui/Card";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <section className="py-20 sm:py-24">
      <div className="mb-8 sm:mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Writing
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          Blog and technical notes
        </h2>
        <p className="mt-3 max-w-2xl text-neutral-500 leading-7">
          Thesis-linked reflections, implementation lessons, and engineering notes.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <Card>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-neutral-500">
                {post.category}
              </p>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-4 leading-7 text-neutral-400">{post.excerpt}</p>
              <div className="mt-6 text-sm text-neutral-300">Read post →</div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-block rounded-2xl border border-neutral-700 px-4 py-2 text-white hover:border-neutral-500"
        >
          View all posts
        </Link>
      </div>
    </section>
  );
}