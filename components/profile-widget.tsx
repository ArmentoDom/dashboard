import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, Edit, PlusCircle } from "lucide-react"

export default function ProfileWidget() {
  // Empty state - no profile data
  const hasProfile = false

  return (
    <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <CardContent className="p-4">
        {hasProfile ? (
          <div className="flex items-center gap-3">
            <Avatar className="h-14 w-14 border-2 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg?height=56&width=56" alt="Profile" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-lg font-bold">
                JS
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">Jessica Smith</h3>
                  <p className="text-xs text-gray-500">Parent of Noah (6 months)</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Premium
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  Level 4
                </Badge>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <Avatar className="h-16 w-16 border-2 border-white shadow-lg mb-3">
              <AvatarFallback className="bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400 text-lg font-bold">
                ?
              </AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-gray-900 mb-1">Welcome to ParentSphere</h3>
            <p className="text-sm text-gray-500 mb-4 max-w-xs">
              Complete your profile to personalize your experience and track your baby's development
            </p>
            <div className="flex gap-2">
              <Button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <Edit className="h-3.5 w-3.5 mr-1.5" />
                Create Profile
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-purple-200 text-purple-700 hover:bg-purple-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <PlusCircle className="h-3.5 w-3.5 mr-1.5" />
                Add Baby
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
