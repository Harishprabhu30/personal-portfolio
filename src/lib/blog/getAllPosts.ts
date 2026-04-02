import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostMeta } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return data as BlogPostMeta;
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}