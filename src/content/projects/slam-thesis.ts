import { Project } from "@/types/project";

export const slamThesisProject: Project = {
  slug: "slam-thesis",
  title: "Investigation of SLAM Methods for Autonomous Robots",
  shortTitle: "SLAM Thesis",
  summary:
    "A robotics systems project investigating SLAM-related localization approaches with emphasis on evaluation, industrial relevance, and practical deployment thinking.",
  role: "Master's Thesis / Robotics Systems Project",
  timeline: "2025 - 2026",
  status: "In Progress",
  featured: true,
  technologies: ["Python", "C++", "ROS 2", "Linux", "Isaac Sim", "Computer Vision"],
  problem:
    "Reliable localization in robotics depends not only on algorithm choice, but also on sensing, system architecture, data quality, reproducibility, and realistic engineering constraints.",
  impact:
    "This project demonstrates robotics systems thinking, technical debugging, evaluation methodology, and practical engineering relevance for autonomy-oriented roles.",
  sections: [
    {
      heading: "Overview",
      content:
        "This thesis investigates practical SLAM-related localization workflows for autonomous robots, focusing on how different approaches behave under controlled simulation-based evaluation.",
    },
    {
      heading: "System Focus",
      content:
        "The work combines robotics middleware, simulator integration, sensing pipelines, and structured evaluation to understand performance under realistic technical constraints.",
    },
    {
      heading: "Why It Matters",
      content:
        "Rather than treating localization as a black-box output, the project emphasizes how implementation decisions, debugging discipline, and reproducible comparison influence real engineering outcomes.",
    },
  ],
  links: {
    github: "",
    blog: "",
    publication: "",
  },
  tags: ["SLAM", "Robotics", "ROS2", "Evaluation"],
  category: "Flagship",
};