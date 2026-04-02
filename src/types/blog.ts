export type BlogPostMeta = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  series?: string;
  published: boolean;
  coverImage?: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};