import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Plus,
  Settings,
  LogOut,
  File,
  Folder,
  Star,
  Trash,
  Clock,
  MoreVertical,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r">
        <div className="flex h-14 items-center border-b px-4">
          <h1 className="text-lg font-semibold">Doc Collab</h1>
        </div>
        <nav className="space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start">
            <File className="mr-2 h-4 w-4" />
            All Documents
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Star className="mr-2 h-4 w-4" />
            Starred
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Clock className="mr-2 h-4 w-4" />
            Recent
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Trash className="mr-2 h-4 w-4" />
            Trash
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Input
              className="ml-2 w-64"
              placeholder="Search documents..."
              type="search"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="flex space-x-4">
              <Button>
                <Plus className="mr-2 h-4 w-4" /> New Document
              </Button>
              <Button variant="outline">
                <Folder className="mr-2 h-4 w-4" /> New Folder
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Recent Documents</h2>
          <ScrollArea className="h-[calc(100vh-250px)]">
            <div className="space-y-4">
              
                <div
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center">
                    <File className="mr-2 h-4 w-4" />
                    <div>
                      <h3 className="font-semibold">Document</h3>
                      <p className="text-sm text-muted-foreground">
                        Last edited {Math.floor(Math.random() * 60) + 1} minutes ago
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  )
}