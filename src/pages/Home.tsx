import { Card, CardContent } from "@/components/ui/card"
import { AnimatedText } from "@/components/AnimatedText"

export function Home() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-12 mb-8 md:mb-16">
        <div className="flex-1 max-w-2xl text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Hi, I'm Vitor Hugo!
          </h1>
          <div className="h-[4.5rem] md:h-[4rem]">
            <AnimatedText />
          </div>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-muted rounded-lg">
          {/* Placeholder for profile image */}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projectLinks.map((project) => (
            <Card key={project.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="aspect-video bg-muted rounded-md mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{project.description}</p>
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