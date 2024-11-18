import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "./components/theme-provider"
import { SidebarProvider } from "./components/ui/sidebar"
import { MainSidebar } from "./components/MainSidebar"
import { Topbar } from "./components/Topbar"
import { Home } from "./pages/Home"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarProvider>
        <Router>
          <div className="flex w-full">
            <MainSidebar />
            <div className="flex-1 flex flex-col">
              <Topbar />
              <main className="flex-1 bg-background p-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
