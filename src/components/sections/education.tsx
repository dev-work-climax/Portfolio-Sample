import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

const ExperienceSection = () => {
  const experiences = [
    {
      title: " Oklahoma State University",
      company: "Bachelor's Degree in computer science",
      period: "2012 - 2015",
    },
    {
      title: "Yale University",
      company: "Master's Degree in computer science",
      period: "2015 - 2018",
    },
  ]

  return (
    <section id="education" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#education"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-8">
      <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Education
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
            </Card>
          ))}
        </div>
      </div>
      </Link>
    </section>
  )
}

export default ExperienceSection;