"use client";

import ProjectsSection from "./projects";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  live: string;
  github: string;
}

interface ProjectsSectionClientProps {
  projects: Project[];
}

const ProjectsSectionClient = ({ projects }: ProjectsSectionClientProps) => {
  return <ProjectsSection projects={projects} />;
};

export default ProjectsSectionClient; 