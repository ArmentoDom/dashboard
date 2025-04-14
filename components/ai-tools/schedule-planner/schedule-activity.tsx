import { Badge } from "@/components/ui/badge"
import { BabyIcon, Brain, Coffee, Sun, Moon, Utensils, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScheduleActivityProps {
  activity: {
    id: number
    time: string
    title: string
    description: string
    category: string
  }
  isFirst: boolean
  isLast: boolean
}

export default function ScheduleActivity({ activity, isFirst, isLast }: ScheduleActivityProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sleep":
        return "bg-indigo-100 text-indigo-700 border-indigo-200"
      case "feeding":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "play":
        return "bg-green-100 text-green-700 border-green-200"
      case "development":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "routine":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "parent":
        return "bg-rose-100 text-rose-700 border-rose-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sleep":
        return <Moon className="h-4 w-4" />
      case "feeding":
        return <Utensils className="h-4 w-4" />
      case "play":
        return <PlayCircle className="h-4 w-4" />
      case "development":
        return <Brain className="h-4 w-4" />
      case "routine":
        return <Sun className="h-4 w-4" />
      case "parent":
        return <Coffee className="h-4 w-4" />
      default:
        return <BabyIcon className="h-4 w-4" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "sleep":
        return "Sleep"
      case "feeding":
        return "Feeding"
      case "play":
        return "Play"
      case "development":
        return "Development"
      case "routine":
        return "Routine"
      case "parent":
        return "Parent Time"
      default:
        return category
    }
  }

  return (
    <div
      className={cn(
        "relative pl-8 pb-5",
        isFirst && "pt-0",
        isLast && "pb-0",
        isFirst ? "bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-100 -ml-8 pl-8" : "",
      )}
    >
      {/* Timeline dot and line */}
      {!isLast && <div className="absolute left-3 top-7 bottom-0 w-0.5 bg-gray-200" aria-hidden="true"></div>}
      <div
        className={cn(
          "absolute left-0 top-1 h-6 w-6 rounded-full flex items-center justify-center",
          isFirst ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" : "bg-gray-200 text-gray-500",
        )}
      >
        {getCategoryIcon(activity.category)}
      </div>

      {/* Activity content */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">{activity.time}</span>
          <Badge variant="outline" className={getCategoryColor(activity.category)}>
            {getCategoryLabel(activity.category)}
          </Badge>
        </div>
        <h4 className="text-base font-medium text-gray-900 mt-1">{activity.title}</h4>
        <p className="text-sm text-gray-500 mt-0.5">{activity.description}</p>
      </div>
    </div>
  )
}
