"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, AlertTriangle, Brain, Sparkles, ChevronLeft, ChevronRight, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

type InsightType = "insights" | "suggestions" | "warnings"

export default function AiInsightsWidget() {
  const [activeType, setActiveType] = useState<InsightType>("insights")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Empty data states
  const insightData: Record<InsightType, any[]> = {
    insights: [],
    suggestions: [],
    warnings: [],
  }

  const getIcon = (type: InsightType) => {
    switch (type) {
      case "insights":
        return <Brain className="h-4 w-4" />
      case "suggestions":
        return <MessageCircle className="h-4 w-4" />
      case "warnings":
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getColor = (type: InsightType) => {
    switch (type) {
      case "insights":
        return "text-teal-500 bg-teal-100"
      case "suggestions":
        return "text-purple-500 bg-purple-100"
      case "warnings":
        return "text-amber-500 bg-amber-100"
    }
  }

  const getBackgroundColor = (type: InsightType) => {
    switch (type) {
      case "insights":
        return "from-teal-500 to-cyan-500"
      case "suggestions":
        return "from-purple-500 to-pink-500"
      case "warnings":
        return "from-amber-500 to-orange-500"
    }
  }

  const scrollToNext = () => {
    const types: InsightType[] = ["insights", "suggestions", "warnings"]
    const currentIndex = types.indexOf(activeType)
    const nextIndex = (currentIndex + 1) % types.length
    setActiveType(types[nextIndex])
  }

  const scrollToPrev = () => {
    const types: InsightType[] = ["insights", "suggestions", "warnings"]
    const currentIndex = types.indexOf(activeType)
    const prevIndex = (currentIndex - 1 + types.length) % types.length
    setActiveType(types[prevIndex])
  }

  return (
    <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <CardHeader className="pb-2 pt-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-lg shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Insights
            </h2>
          </div>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Active
            </span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        {/* Carousel navigation */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={scrollToPrev}
            className="h-7 w-7 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-1">
            {(["insights", "suggestions", "warnings"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  activeType === type ? "bg-purple-500 scale-125 shadow-sm" : "bg-gray-300",
                )}
              />
            ))}
          </div>

          <button
            onClick={scrollToNext}
            className="h-7 w-7 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Section title */}
        <div className="flex items-center gap-2 mb-3">
          <div className={cn("p-1.5 rounded-lg", getColor(activeType))}>{getIcon(activeType)}</div>
          <h3 className="font-bold text-gray-800 capitalize">{activeType}</h3>
          <div className="h-1 flex-1 bg-gray-100 rounded-full">
            <div
              className={cn("h-1 rounded-full bg-gradient-to-r", getBackgroundColor(activeType))}
              style={{ width: `0%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative overflow-hidden">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 max-h-[200px] overflow-y-auto pr-1 scrollbar-thin"
            ref={scrollContainerRef}
          >
            {insightData[activeType].length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <div
                  className={cn(
                    "p-3 rounded-full mb-3",
                    activeType === "insights"
                      ? "bg-teal-50"
                      : activeType === "suggestions"
                        ? "bg-purple-50"
                        : "bg-amber-50",
                  )}
                >
                  {getIcon(activeType)}
                </div>
                <h4 className="text-gray-700 font-medium mb-1">No {activeType} yet</h4>
                <p className="text-sm text-gray-500 mb-4">
                  {activeType === "insights"
                    ? "AI insights will appear here as patterns are detected"
                    : activeType === "suggestions"
                      ? "Personalized suggestions will appear here soon"
                      : "Important alerts will appear here when needed"}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <PlusCircle className="h-3.5 w-3.5 mr-1.5" />
                  Add Data
                </Button>
              </div>
            ) : null}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
