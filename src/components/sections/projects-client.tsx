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

const ProjectsSectionClient = () => {
  return <ProjectsSection />;
};

export default ProjectsSectionClient; 