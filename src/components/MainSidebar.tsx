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

import { useAuth } from "@/components/auth-provider"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogIn } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MainSidebar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { isAuthenticated, login, logout } = useAuth()
  const [isLoginDialogOpen, setIsLoginDialogOpen] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogin = async (_: React.MouseEvent) => {
    setIsLoginDialogOpen(true)
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      
      const data = await response.json()
      
      if (data.authenticated) {
        login(data["jwt-token"])
        setIsLoginDialogOpen(false)
        setEmail("")
        setPassword("")
      } else {
        console.error("Login failed:", data.message)
      }
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

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
        
        <div className="mt-auto p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer hover:opacity-80">
                <AvatarFallback>
                  {isAuthenticated ? "U" : <LogIn className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {isAuthenticated ? (
                <DropdownMenuItem onClick={logout}>
                  Log out
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem onClick={handleLogin}>
                  Log in
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarContent>
      
      <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLoginSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsLoginDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Sidebar>
  )
}