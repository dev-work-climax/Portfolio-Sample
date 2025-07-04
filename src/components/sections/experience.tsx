import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Rigetti",
      period: "2022 - Present",
      description:
        "Engaged in architecting scalable cloud infrastructures, integrating robust OpenAI-powered LLM solutions, and developing responsive React frontends to optimize operational efficiency and elevate user experiences.",
      achievements: [
        "Infrastructure: Architected scalable cloud systems (AWS/GCP) and automated CI/CD pipelines (Docker, Kubernetes, Terraform) to improve reliability and reduce downtime by 40%.",
        "LLM Projects: Integrated OpenAI‑powered solutions for dynamic customer support and automated workflows, boosting operational efficiency by 30%.",
        "Leadership: Mentored team members on best practices and agile methodologies, driving continuous improvement across projects."
      ],
      technologies: ["React", "OpenAI", "LLM", "CI/CD", "AWS/GCP"],
    },
    {
      title: "Senior Software Engineer",
      company: "Viam",
      period: "2020 - 2022",
      description:
        "As a Senior Fullstack Software Engineer, I architect scalable web applications with React and Node.js, automate cloud deployments via CI/CD pipelines on AWS, and lead AI initiatives, including deploying retrieval-augmented generation (RAG) projects with Viam.",
      achievements: [
        "Developed and maintained scalable web applications using React for frontend and Node.js for backend services.",
        "Automated cloud deployments with CI/CD pipelines on AWS/GCP.",
        "Implemented AI projects, including retrieval-augmented generation (RAG) with Viam, to optimize data retrieval and decision-making.",
        "Collaborated with cross-functional teams to enhance user experience and operational efficiency.",
      ],
      technologies: ["Automation", "React", "AWS/GCP", "RAG", "UI/UX"],
    },
    {
      title: "Software Engineer(Remote)",
      company: "Hellas Direct",
      period: "2019 - 2020",
      description:
        "Architect scalable Python backends, build dynamic React frontends, integrate AI solutions with OpenAI keys, and implement efficient web scraping workflows.",
      achievements: [
        "Python Backend: Develop robust, scalable server-side systems.",
        "React Frontend: Architect dynamic and responsive user interfaces.",
        "AI Integration: Deploy innovative solutions leveraging OpenAI.",
        "Web Scraping: Engineer efficient workflows for reliable data extraction.,"
      ],
      technologies: ["Python", "React", "AI", "Open AI", "Scraping"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen max-w-7xl mx-auto ">
      <Link href={"#experience"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Working Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative bg-card border-border card-enhanced-border shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
              <CardHeader className="pl-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
                <p className="text-primary font-semibold">{exp.company}</p>
              </CardHeader>
              <CardContent className="pl-8">
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-green-500 dark:text-green-400 mr-2">→</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </Link>
    </section>
  )
}

export default ExperienceSection;