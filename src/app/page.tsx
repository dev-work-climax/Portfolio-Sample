import React from "react";
import SmoothScrollClient from "@/components/smooth-scroll-client";
import { cn } from "@/lib/utils";
import AnimatedBackgroundClient from "@/components/animated-background-client";
import SkillsSectionServer from "@/components/sections/skills-server";
import ProjectsSectionClient from "@/components/sections/projects-client";
import ContactSectionClient from "@/components/sections/contact-client";
import HeroSectionClient from "@/components/sections/hero-client";
import { fetchProjects, fetchSkills, fetchSiteMetadata } from "@/lib/data-fetching";

// This is now a server component that can fetch data on the server
async function MainPage() {
  // Server-side data fetching
  const [projectsData, skillsData, metadata] = await Promise.all([
    fetchProjects(),
    fetchSkills(),
    fetchSiteMetadata(),
  ]);

  return (
    <SmoothScrollClient>
      <main className={cn("bg-slate-100 dark:bg-transparent")}>
        <div className="top-0 z-0 fixed w-full h-screen">
          <AnimatedBackgroundClient />
        </div>
        <HeroSectionClient />
        <SkillsSectionServer  />
        <ProjectsSectionClient projects={projectsData.projects} />
        <ContactSectionClient />
      </main>
    </SmoothScrollClient>
  );
}

export default MainPage;
