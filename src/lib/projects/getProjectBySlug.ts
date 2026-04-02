import { getAllProjects } from "./getAllProjects";

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug);
}