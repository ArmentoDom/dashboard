"use client"

import { useState } from "react"
import { Sparkles, ChevronLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import ScheduleForm from "./schedule-form"
import SchedulePreview from "./schedule-preview"

export default function SchedulePlannerPage() {
  const [activeTab, setActiveTab] = useState("create")
  const [scheduleGenerated, setScheduleGenerated] = useState(false)

  const handleGenerateSchedule = () => {
    // In a real app, this would call an API to generate the schedule
    setScheduleGenerated(true)
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
            <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-sm">
              <Calendar className="h-3 w-3 text-white" />
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI Schedule Planner
            </h1>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-blue-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-4 pb-20">
        <Tabs defaultValue="create" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 bg-white border border-gray-100 shadow-sm rounded-lg p-1 mb-4">
            <TabsTrigger
              value="create"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
            >
              Create Schedule
            </TabsTrigger>
            <TabsTrigger
              value="preview"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
              disabled={!scheduleGenerated}
            >
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="mt-0">
            <ScheduleForm onGenerateSchedule={handleGenerateSchedule} />
          </TabsContent>

          <TabsContent value="preview" className="mt-0">
            <SchedulePreview onEditSchedule={() => setActiveTab("create")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
