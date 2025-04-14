"use client"

import { useState } from "react"
import { Sparkles, ChevronLeft, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import DesignForm from "./design-form"
import DesignPreview from "./design-preview"
import CommunityFeed from "./community-feed"

export default function NurseryDesignerPage() {
  const [activeTab, setActiveTab] = useState("create")
  const [designGenerated, setDesignGenerated] = useState(false)

  const handleGenerateDesign = () => {
    // In a real app, this would call an API to generate the design
    setDesignGenerated(true)
    setActiveTab("preview")
  }

  return (
    <div className="container max-w-md mx-auto px-4">
      {/* Header */}
      <header className="py-2.5 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container max-w-md mx-auto px-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5">
            <Link href="/ai-tools">
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full mr-1">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center shadow-sm">
              <Palette className="h-3 w-3 text-white" />
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              AI Nursery Designer
            </h1>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-purple-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-4 pb-20">
        <Tabs defaultValue="create" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 bg-white border border-gray-100 shadow-sm rounded-lg p-1 mb-4">
            <TabsTrigger
              value="create"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
            >
              Create
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
              disabled={!designGenerated}
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="community"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
            >
              Community
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="mt-0">
            <DesignForm onGenerateDesign={handleGenerateDesign} />
          </TabsContent>

          <TabsContent value="preview" className="mt-0">
            <DesignPreview onEditDesign={() => setActiveTab("create")} />
          </TabsContent>

          <TabsContent value="community" className="mt-0">
            <CommunityFeed />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
