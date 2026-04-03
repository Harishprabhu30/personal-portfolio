import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/blog/getAllPosts";
import { getPostBySlug } from "@/lib/blog/getPostBySlug";
import type { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20">
      <article className="max-w-3xl">
        <Link href="/blog" className="text-sm text-neutral-500 hover:text-white">
          ← Back to Blog
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-neutral-800 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">
            {post.category}
          </span>
          <span className="text-xs sm:text-sm text-neutral-500">{post.date}</span>
          {post.series ? (
            <span className="text-xs sm:text-sm text-neutral-500">{post.series}</span>
          ) : null}
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          {post.title}
        </h1>

        <p className="mt-5 leading-8 text-neutral-400">{post.excerpt}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-800 bg-black/20 px-3 py-1 text-xs sm:text-sm text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 rounded-3xl border border-neutral-800 bg-neutral-950/50 p-6 sm:p-8">
          <div className="max-w-none">
            {post.content.split("\n").map((line, index) => {
              const trimmed = line.trim();

              if (!trimmed) return <div key={index} className="h-4" />;

              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={index} className="mt-8 text-xl sm:text-2xl font-semibold text-white">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("- ")) {
                return (
                  <li key={index} className="ml-5 list-disc text-neutral-300">
                    {trimmed.replace("- ", "")}
                  </li>
                );
              }

              return (
                <p key={index} className="mt-4 leading-8 text-neutral-300">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
}