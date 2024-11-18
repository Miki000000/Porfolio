import { Card, CardContent } from "@/components/ui/card"
import { AnimatedText } from "@/components/AnimatedText"

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex justify-between flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm ****!
          </h1>
          <AnimatedText />
        </div>
        <div className="w-80 h-80 md:w-96 md:h-96 bg-muted rounded-lg shrink-0">
          {/* Placeholder for profile image */}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectLinks.map((project) => (
            <Card key={project.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

// Using your existing project data
const projectLinks = [
  {
    title: "Project 1",
    href: "/project1",
    description: "Description of project 1",
  },
  {
    title: "Project 2",
    href: "/project2",
    description: "Description of project 2",
  },
  {
    title: "Project 3",
    href: "/project3",
    description: "Description of project 3",
  },
] 