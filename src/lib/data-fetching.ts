// Server-side data fetching utilities
import { config } from "@/data/config";

export async function fetchProjects() {
  // This would typically fetch from a database or API
  // For now, we'll return the static data
  return {
    projects: [
      {
        id: "codingducks",
        title: "Coding Ducks",
        category: "Coding platform",
        description: "LeetCode + CodePen + CSS Battles",
        live: "https://www.codingducks.xyz/",
        github: "https://github.com/Naresh-Khatri/Coding-Ducks",
      },
      // Add more projects as needed
    ],
  };
}

export async function fetchSkills() {
  // Fetch skills data from database or API
  return {
    skills: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      // Add more skills
    ],
  };
}

export async function fetchSiteMetadata() {
  return {
    title: config.title,
    description: config.description.long,
    author: config.author,
    email: config.email,
  };
} 