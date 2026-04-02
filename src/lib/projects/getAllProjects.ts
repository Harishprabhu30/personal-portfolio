import { slamThesisProject } from "@/content/projects/slam-thesis";
import { tampereRadarSlamProject } from "@/content/projects/tampere-radar-slam";
import { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  return [slamThesisProject, tampereRadarSlamProject];
}