"use client"
import { Sparkles, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import AiToolCard from "./ai-tool-card"

export default function AiToolsPage() {
  return (
    <div className="container max-w-md mx-auto px-4">
      {/* Header */}
      <header className="py-2.5 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container max-w-md mx-auto px-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-sm">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ParentSphere
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50"
            >
              <Search className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50"
            >
              <Bell className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <div className="mt-6 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          <h2 className="text-xl font-bold text-gray-900">AI Tools</h2>
        </div>
        <p className="text-sm text-gray-500 mt-1 ml-7">Smart solutions powered by AI to make parenting easier</p>
      </div>

      {/* AI Tools Grid */}
      <div className="grid grid-cols-1 gap-4 pb-20">
        <AiToolCard
          title="AI Schedule Planner"
          description="Create optimized daily routines for your child based on age, development needs, and your family's lifestyle."
          icon="calendar"
          color="blue"
          comingSoon={false}
          href="/ai-tools/schedule-planner"
        />

        <AiToolCard
          title="AI Nursery Designer"
          description="Design the perfect nursery with personalized recommendations for layout, colors, and furniture based on your space and preferences."
          icon="palette"
          color="purple"
          comingSoon={false}
          href="/ai-tools/nursery-designer"
        />

        <AiToolCard
          title="AI Budgeting Assistant"
          description="Plan and track your family expenses with smart predictions and recommendations to save on baby essentials."
          icon="calculator"
          color="green"
          comingSoon={false}
          href="/ai-tools/budgeting-assistant"
        />
      </div>
    </div>
  )
}
