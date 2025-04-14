"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar, LineChart, BookOpen, Users, MessageCircle, BabyIcon, Brain, HeartPulse } from "lucide-react"

interface GoalsStepProps {
  selectedGoals: string[]
  updateGoals: (goals: string[]) => void
  onNext: () => void
  onBack: () => void
}

const goalOptions = [
  {
    id: "track",
    label: "Track baby's growth & development",
    description: "Monitor milestones, measurements, and daily activities",
    icon: LineChart,
  },
  {
    id: "schedule",
    label: "Manage schedules & reminders",
    description: "Keep track of appointments, feedings, and sleep",
    icon: Calendar,
  },
  {
    id: "learn",
    label: "Learn parenting skills",
    description: "Access guides, articles, and expert advice",
    icon: BookOpen,
  },
  {
    id: "connect",
    label: "Connect with other parents",
    description: "Join communities and share experiences",
    icon: Users,
  },
  {
    id: "advice",
    label: "Get personalized advice",
    description: "Receive tailored recommendations for your child",
    icon: MessageCircle,
  },
  {
    id: "activities",
    label: "Find age-appropriate activities",
    description: "Discover games and exercises for development",
    icon: BabyIcon,
  },
  {
    id: "ai",
    label: "Use AI insights & predictions",
    description: "Get smart analysis of patterns and behaviors",
    icon: Brain,
  },
  {
    id: "health",
    label: "Monitor health & wellness",
    description: "Track symptoms, medications, and vaccinations",
    icon: HeartPulse,
  },
]

export default function GoalsStep({ selectedGoals, updateGoals, onNext, onBack }: GoalsStepProps) {
  const [error, setError] = useState<string | null>(null)

  const toggleGoal = (goalId: string, e: React.MouseEvent) => {
    // Prevent event bubbling
    e.stopPropagation()

    // Update goals
    if (selectedGoals.includes(goalId)) {
      updateGoals(selectedGoals.filter((id) => id !== goalId))
    } else {
      updateGoals([...selectedGoals, goalId])
    }
    setError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedGoals.length === 0) {
      setError("Please select at least one goal")
      return
    }
    onNext()
  }

  return (
    <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What are your goals?
            </h2>
            <p className="text-gray-500 mt-1">Select all that apply to personalize your experience</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {goalOptions.map((goal) => {
                const Icon = goal.icon
                return (
                  <div
                    key={goal.id}
                    className={`flex items-start space-x-3 rounded-xl border p-3 transition-all
                      ${
                        selectedGoals.includes(goal.id)
                          ? "border-purple-300 bg-purple-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                  >
                    <Checkbox
                      id={goal.id}
                      checked={selectedGoals.includes(goal.id)}
                      onCheckedChange={() => {
                        const goalId = goal.id
                        if (selectedGoals.includes(goal.id)) {
                          updateGoals(selectedGoals.filter((id) => id !== goalId))
                        } else {
                          updateGoals([...selectedGoals, goalId])
                        }
                        setError(null)
                      }}
                      className="mt-1"
                    />
                    <div className="flex-1 space-y-1">
                      <Label
                        htmlFor={goal.id}
                        className="flex items-center gap-2 font-medium text-gray-900 cursor-pointer"
                      >
                        <div
                          className={`p-1.5 rounded-lg ${selectedGoals.includes(goal.id) ? "bg-purple-100" : "bg-gray-100"}`}
                        >
                          <Icon
                            className={`h-4 w-4 ${selectedGoals.includes(goal.id) ? "text-purple-600" : "text-gray-500"}`}
                          />
                        </div>
                        {goal.label}
                      </Label>
                      <p className="text-xs text-gray-500 ml-8">{goal.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {error && <p className="text-xs text-red-500 text-center">{error}</p>}

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
