import * as React from "react"
import { Home, BookOpen, FolderGit2, User, ChevronRight } from "lucide-react"
import navigationData from "@/assets/data/navigation.json"
import { cn } from "@/lib/utils"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

// Map of icon names to components
const iconMap = {
  Home,
  BookOpen,
  FolderGit2,
  User
}

export function MainSidebar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {(navigationData as {mainNav: Array<{
                title: string,
                submenu?: Array<{title: string, href: string}>,
                icon?: string,
                href?: string
              }>}).mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <>
                      <SidebarMenuButton 
                        tooltip={item.title}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                      >
                        {item.icon && iconMap[item.icon as keyof typeof iconMap] && 
                          React.createElement(iconMap[item.icon as keyof typeof iconMap], {
                            className: "h-4 w-4"
                          })
                        }
                        <span>{item.title}</span>
                        <ChevronRight className={cn(
                          "h-4 w-4 ml-auto transition-transform duration-200",
                          isOpen && "rotate-90"
                        )} />
                      </SidebarMenuButton>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      )}>
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuSubButton 
                              key={subItem.title}
                              href={subItem.href}
                            >
                              {subItem.title}
                            </SidebarMenuSubButton>
                          ))}
                        </SidebarMenuSub>
                      </div>
                    </>
                  ) : (
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.href}>
                        {item.icon && iconMap[item.icon as keyof typeof iconMap] && 
                          React.createElement(iconMap[item.icon as keyof typeof iconMap], {
                            className: "h-4 w-4"
                          })
                        }
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}