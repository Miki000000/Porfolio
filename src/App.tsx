import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "./components/theme-provider"
import { SidebarProvider } from "./components/ui/sidebar"
import { AuthProvider } from "./components/auth-provider"
import { MainSidebar } from "./components/MainSidebar"
import { Topbar } from "./components/Topbar"
import { Home } from "./pages/Home"

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <SidebarProvider>
          <Router>
            <div className="flex min-h-screen w-full">
              <MainSidebar />
              <div className="flex-1 flex flex-col min-w-0">
                <Topbar />
                <main className="flex-1 bg-background p-4 md:p-6 lg:p-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </main>
              </div>
            </div>
          </Router>
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
