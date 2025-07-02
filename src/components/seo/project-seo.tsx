"use client";

import StructuredData from "./structured-data";

interface ProjectSEOProps {
  project: {
    id: string;
    title: string;
    description: string;
    live: string;
    github?: string;
    category: string;
  };
}

export default function ProjectSEO({ project }: ProjectSEOProps) {
  return (
    <StructuredData 
      type="project" 
      data={{
        title: project.title,
        description: project.description,
        live: project.live,
        category: project.category,
      }} 
    />
  );
} 