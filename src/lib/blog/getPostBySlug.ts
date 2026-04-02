import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getPostBySlug(slug: string): BlogPost | null {
  const filenames = fs.readdirSync(postsDirectory);

  for (const filename of filenames) {
    if (!filename.endsWith(".mdx")) continue;

    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return {
        ...(data as Omit<BlogPost, "content">),
        content,
      };
    }
  }

  return null;
}