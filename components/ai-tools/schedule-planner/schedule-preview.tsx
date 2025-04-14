"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Edit, Share2, Sparkles } from "lucide-react"
import ScheduleActivity from "./schedule-activity"

interface SchedulePreviewProps {
  onEditSchedule: () => void
}

export default function SchedulePreview({ onEditSchedule }: SchedulePreviewProps) {
  // Mock data for the generated schedule
  const scheduleData = {
    childName: "Noah",
    childAge: "10-12m",
    date: new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
    activities: [
      {
        id: 1,
        time: "7:00 AM",
        title: "Wake Up & Morning Routine",
        description: "Diaper change, get dressed for the day",
        category: "routine",
      },
      {
        id: 2,
        time: "7:30 AM",
        title: "Breakfast",
        description: "Oatmeal with fruit and milk",
        category: "feeding",
      },
      {
        id: 3,
        time: "8:15 AM",
        title: "Free Play",
        description: "Independent play with toys",
        category: "play",
      },
      {
        id: 4,
        time: "9:00 AM",
        title: "Development Activity",
        description: "Stacking blocks for fine motor skills",
        category: "development",
      },
      {
        id: 5,
        time: "9:30 AM",
        title: "Snack Time",
        description: "Banana slices and water",
        category: "feeding",
      },
      {
        id: 6,
        time: "10:00 AM",
        title: "Outdoor Time",
        description: "Walk or backyard play",
        category: "play",
      },
      {
        id: 7,
        time: "11:00 AM",
        title: "Lunch Preparation",
        description: "Prepare lunch while baby plays nearby",
        category: "routine",
      },
      {
        id: 8,
        time: "11:30 AM",
        title: "Lunch",
        description: "Vegetables, protein, and grains",
        category: "feeding",
      },
      {
        id: 9,
        time: "12:15 PM",
        title: "Naptime Routine",
        description: "Diaper change, story, and cuddle",
        category: "routine",
      },
      {
        id: 10,
        time: "12:30 PM",
        title: "Nap Time",
        description: "First nap of the day",
        category: "sleep",
      },
      {
        id: 11,
        time: "2:30 PM",
        title: "Wake Up & Snack",
        description: "Diaper change and light snack",
        category: "feeding",
      },
      {
        id: 12,
        time: "3:00 PM",
        title: "Sensory Play",
        description: "Water play or sensory bin",
        category: "development",
      },
      {
        id: 13,
        time: "4:00 PM",
        title: "Parent Break",
        description: "Independent play while parent takes a short break",
        category: "parent",
      },
      {
        id: 14,
        time: "4:30 PM",
        title: "Reading Time",
        description: "Read books together",
        category: "development",
      },
      {
        id: 15,
        time: "5:00 PM",
        title: "Dinner Preparation",
        description: "Prepare dinner while baby plays nearby",
        category: "routine",
      },
      {
        id: 16,
        time: "5:30 PM",
        title: "Dinner",
        description: "Family dinner time",
        category: "feeding",
      },
      {
        id: 17,
        time: "6:15 PM",
        title: "Bath Time",
        description: "Evening bath and pajamas",
        category: "routine",
      },
      {
        id: 18,
        time: "6:45 PM",
        title: "Quiet Play",
        description: "Gentle play before bedtime",
        category: "play",
      },
      {
        id: 19,
        time: "7:15 PM",
        title: "Bedtime Routine",
        description: "Story, song, and cuddle",
        category: "routine",
      },
      {
        id: 20,
        time: "7:30 PM",
        title: "Bedtime",
        description: "Lights out and sleep",
        category: "sleep",
      },
    ],
    insights: {
      sleepHours: 12,
      napHours: 2,
      feedingCount: 5,
      playSessionsCount: 3,
      developmentActivitiesCount: 3,
      parentBreaksCount: 1,
    },
  }

  return (
    <div className="space-y-4">
      {/* Schedule Header */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
        <CardContent className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{scheduleData.childName}'s Daily Schedule</h3>
              <p className="text-sm text-gray-500">{scheduleData.date}</p>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {scheduleData.childAge}
            </Badge>
          </div>

          <div className="flex items-center gap-2 mt-4 bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-100">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <p className="text-sm text-blue-700">
              This AI-generated schedule is optimized for {scheduleData.childName}'s age and your preferences.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Timeline */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
        <CardContent className="p-5">
          <h3 className="font-bold text-gray-900 mb-4">Daily Timeline</h3>

          <div className="space-y-3">
            {scheduleData.activities.map((activity, index) => (
              <ScheduleActivity
                key={activity.id}
                activity={activity}
                isFirst={index === 0}
                isLast={index === scheduleData.activities.length - 1}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Schedule Insights */}
      <Card className="border-none shadow-md overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
        <CardContent className="p-5">
          <h3 className="font-bold text-gray-900 mb-4">Schedule Insights</h3>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
              <p className="text-xs text-blue-600 font-medium">Total Sleep</p>
              <p className="text-lg font-bold text-gray-900">{scheduleData.insights.sleepHours} hours</p>
              <p className="text-xs text-gray-500">Including {scheduleData.insights.napHours}h of naps</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
              <p className="text-xs text-blue-600 font-medium">Feedings</p>
              <p className="text-lg font-bold text-gray-900">{scheduleData.insights.feedingCount}</p>
              <p className="text-xs text-gray-500">Well-spaced throughout the day</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
              <p className="text-xs text-blue-600 font-medium">Play Sessions</p>
              <p className="text-lg font-bold text-gray-900">{scheduleData.insights.playSessionsCount}</p>
              <p className="text-xs text-gray-500">Mix of indoor and outdoor</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
              <p className="text-xs text-blue-600 font-medium">Development</p>
              <p className="text-lg font-bold text-gray-900">{scheduleData.insights.developmentActivitiesCount}</p>
              <p className="text-xs text-gray-500">Age-appropriate activities</p>
            </div>
          </div>

          <div className="mt-4 bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-blue-600 font-medium">Parent Breaks</p>
                <p className="text-sm font-bold text-gray-900">
                  {scheduleData.insights.parentBreaksCount} scheduled break
                </p>
              </div>
              <div className="text-xs text-gray-500">Remember to take care of yourself too!</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={onEditSchedule}
          variant="outline"
          className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
          <Download className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button
          variant="outline"
          className="border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
