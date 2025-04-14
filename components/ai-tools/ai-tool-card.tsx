import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Palette, Calculator, BrainCircuit, ArrowRight, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface AiToolCardProps {
  title: string
  description: string
  icon: "calendar" | "palette" | "calculator" | "brain"
  color: "blue" | "purple" | "green" | "amber"
  comingSoon?: boolean
  href?: string
}

export default function AiToolCard({ title, description, icon, color, comingSoon = false, href }: AiToolCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "calendar":
        return <Calendar className="h-5 w-5" />
      case "palette":
        return <Palette className="h-5 w-5" />
      case "calculator":
        return <Calculator className="h-5 w-5" />
      case "brain":
      default:
        return <BrainCircuit className="h-5 w-5" />
    }
  }

  const getColor = () => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-cyan-500"
      case "purple":
        return "from-purple-500 to-violet-500"
      case "green":
        return "from-emerald-500 to-teal-500"
      case "amber":
        return "from-amber-500 to-orange-500"
      default:
        return "from-purple-500 to-pink-500"
    }
  }

  const getBackgroundColor = () => {
    switch (color) {
      case "blue":
        return "bg-blue-50"
      case "purple":
        return "bg-purple-50"
      case "green":
        return "bg-emerald-50"
      case "amber":
        return "bg-amber-50"
      default:
        return "bg-purple-50"
    }
  }

  const getButtonColor = () => {
    switch (color) {
      case "blue":
        return "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
      case "purple":
        return "from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600"
      case "green":
        return "from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
      case "amber":
        return "from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
      default:
        return "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    }
  }

  return (
    <Card
      className={cn(
        "border-none shadow-md overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]",
        getBackgroundColor(),
      )}
    >
      <div className={cn("h-1.5 bg-gradient-to-r", getColor())} />

      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={cn("p-3 rounded-xl shadow-md text-white bg-gradient-to-br", getColor())}>{getIcon()}</div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900">{title}</h3>
              {comingSoon && (
                <Badge variant="outline" className="bg-gray-100 text-gray-600 border-gray-200">
                  Coming Soon
                </Badge>
              )}
            </div>

            <p className="text-sm text-gray-600 mt-2 mb-4">{description}</p>

            {comingSoon ? (
              <Button
                className={cn(
                  "rounded-full shadow-md hover:shadow-lg border-0 text-white bg-gradient-to-r w-full transform hover:-translate-y-0.5 transition-all duration-200",
                  getButtonColor(),
                  comingSoon && "opacity-50 cursor-not-allowed",
                )}
                disabled={comingSoon}
              >
                <Lock className="h-4 w-4 mr-2" />
                Coming Soon
              </Button>
            ) : (
              <Button
                className={cn(
                  "rounded-full shadow-md hover:shadow-lg border-0 text-white bg-gradient-to-r w-full transform hover:-translate-y-0.5 transition-all duration-200",
                  getButtonColor(),
                )}
                asChild
              >
                <Link href={href || "#"}>
                  Open Tool
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
