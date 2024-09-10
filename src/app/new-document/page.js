import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Bold,
  Italic,
  Underline,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ArrowLeft,
  Share,
  MoreVertical,
  Save
} from "lucide-react"

export default function NewDocument() {
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between border-b p-4">
        <div className="flex items-center">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <Input
            className="ml-4 w-64"
            placeholder="Untitled Document"
            type="text"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="flex items-center space-x-2 border-b p-2">
        <Button variant="ghost" size="icon">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Underline className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Content Area */}
      <main className="flex-1 p-4 overflow-auto">
        <textarea
          className="w-full h-full p-4 text-lg bg-background resize-none focus:outline-none"
          placeholder="Start typing your document here..."
        />
      </main>
    </div>
  )
}