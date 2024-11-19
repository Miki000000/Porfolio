import { Github, Linkedin, Mail } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "./theme-toggle"
import { useIsMobile } from "@/hooks/use-mobile"

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
]

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/yourusername",
    icon: <Github className="h-4 w-4" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    title: "Email",
    href: "mailto:your@email.com",
    icon: <Mail className="h-4 w-4" />,
  },
]

const aboutLinks = [
  {
    title: "Resume",
    href: "/resume",
    description: "View my professional experience",
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Check out my technical skills",
  },
]

export function Topbar() {
  const isMobile = useIsMobile()

  return (
    <header className="sticky w-full top-0 border-b px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <ThemeToggle />
        </div>

        {/* Center section */}
        <div className="text-xl font-bold">
          My Portfolio
        </div>

        {/* Right section - Only visible on desktop (>1024px) */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {projectLinks.map((project: { title: string; href: string; description: string }) => (
                    <li key={project.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={project.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{project.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {project.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Social Links</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {socialLinks.map((social) => (
                    <li key={social.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={social.href}
                          className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {social.icon}
                          <span className="text-sm font-medium">{social.title}</span>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {aboutLinks.map((link: { title: string; href: string; description: string }) => (
                    <li key={link.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{link.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}