"use client";

import { config } from "@/data/config";

interface StructuredDataProps {
  type: "person" | "website" | "project";
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: config.author,
          url: config.site,
          email: config.email,
          jobTitle: "Full-Stack Developer",
          description: config.description.long,
          knowsAbout: [
            "Web Development",
            "Full-Stack Development",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "3D Animations",
            "Interactive Web Experiences",
          ],
          sameAs: [
            config.social.github,
            config.social.linkedin,
            config.social.instagram,
          ],
          image: config.ogImg,
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: config.title,
          url: config.site,
          description: config.description.long,
          author: {
            "@type": "Person",
            name: config.author,
          },
        };

      case "project":
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: data?.title || "Portfolio Project",
          description: data?.description || "A creative project",
          author: {
            "@type": "Person",
            name: config.author,
          },
          url: data?.live || config.site,
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
} 