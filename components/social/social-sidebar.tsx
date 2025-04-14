import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, Hash, Trophy, ChevronRight } from "lucide-react"

// Mock data for suggested groups
const suggestedGroups = [
  {
    id: 1,
    name: "Sleep Training Support",
    members: 1243,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Healthy Baby Recipes",
    members: 876,
    image: "/placeholder.svg?height=40&width=40",
  },
]

// Mock data for active users
const activeUsers = [
  {
    id: 1,
    name: "Emily C.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "EC",
  },
  {
    id: 2,
    name: "Michael J.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MJ",
  },
  {
    id: 3,
    name: "Sarah W.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SW",
  },
  {
    id: 4,
    name: "David L.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "DL",
  },
]

// Mock data for popular tags
const popularTags = [
  { id: 1, name: "#sleeptraining", count: 243 },
  { id: 2, name: "#toddlertips", count: 189 },
  { id: 3, name: "#babyfood", count: 156 },
  { id: 4, name: "#newparents", count: 132 },
]

// Mock data for top contributors
const topContributors = [
  {
    id: 1,
    name: "Jessica S.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    posts: 32,
  },
  {
    id: 2,
    name: "Robert T.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RT",
    posts: 28,
  },
  {
    id: 3,
    name: "Amanda K.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AK",
    posts: 25,
  },
]

export default function SocialSidebar() {
  return (
    <div className="space-y-4 md:sticky md:top-20">
      <div className="grid grid-cols-1 gap-4">
        {/* Suggested Groups */}
        <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 flex items-center gap-1.5">
                <Users className="h-4 w-4 text-purple-500" />
                Suggested Groups
              </h3>
              <Button variant="ghost" size="sm" className="text-xs text-purple-600 hover:text-purple-700 p-0 h-auto">
                See All
              </Button>
            </div>
            <div className="space-y-3">
              {suggestedGroups.map((group) => (
                <div key={group.id} className="flex items-center gap-2">
                  <div
                    className="h-10 w-10 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${group.image})` }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{group.name}</h4>
                    <p className="text-xs text-gray-500">{group.members.toLocaleString()} members</p>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-7 text-xs"
                  >
                    Join
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Active Now</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeUsers.map((user) => (
                <div key={user.id} className="flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                  </div>
                  <span className="text-xs text-gray-700 mt-1">{user.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Tags */}
        <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 flex items-center gap-1.5">
                <Hash className="h-4 w-4 text-purple-500" />
                Popular Tags
              </h3>
              <Button variant="ghost" size="sm" className="text-xs text-purple-600 hover:text-purple-700 p-0 h-auto">
                See All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="outline"
                  className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                >
                  {tag.name} <span className="ml-1 text-purple-500">({tag.count})</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Contributors */}
        <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-amber-500" />
                Top Contributors
              </h3>
              <Button variant="ghost" size="sm" className="text-xs text-purple-600 hover:text-purple-700 p-0 h-auto">
                This Week
              </Button>
            </div>
            <div className="space-y-3">
              {topContributors.map((user, index) => (
                <div key={user.id} className="flex items-center gap-2">
                  <div className="w-5 text-center font-medium text-gray-500 text-sm">{index + 1}</div>
                  <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{user.name}</h4>
                  </div>
                  <div className="text-xs text-gray-500">{user.posts} posts</div>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="w-full mt-2 text-xs rounded-lg text-purple-600 border-purple-200 hover:bg-purple-50"
              >
                View Leaderboard
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
