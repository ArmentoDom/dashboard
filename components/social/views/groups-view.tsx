import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Users } from "lucide-react"

// Mock data for groups
const groups = [
  {
    id: 1,
    name: "First-Time Parents",
    description: "Support and advice for those new to parenting",
    members: 1243,
    category: "Support",
    image: "/placeholder.svg?height=80&width=80",
    isJoined: true,
  },
  {
    id: 2,
    name: "Toddler Activities",
    description: "Fun and educational activities for toddlers",
    members: 876,
    category: "Activities",
    image: "/placeholder.svg?height=80&width=80",
    isJoined: false,
  },
  {
    id: 3,
    name: "Parents in NYC",
    description: "Local events, recommendations, and meetups in New York City",
    members: 542,
    category: "Local",
    image: "/placeholder.svg?height=80&width=80",
    isJoined: false,
  },
  {
    id: 4,
    name: "Healthy Baby Recipes",
    description: "Nutritious and delicious recipes for babies and toddlers",
    members: 1089,
    category: "Nutrition",
    image: "/placeholder.svg?height=80&width=80",
    isJoined: true,
  },
  {
    id: 5,
    name: "Working Parents",
    description: "Balancing career and family life",
    members: 932,
    category: "Lifestyle",
    image: "/placeholder.svg?height=80&width=80",
    isJoined: false,
  },
  {
    id: 6,
    name: "Single Parents",
    description: "Support network for single moms and dads",
    members: 687,
    category: "Support",
    image: "/placeholder.svg?height=80&width=80",
    isJoined: false,
  },
]

export default function GroupsView() {
  return (
    <div className="space-y-4">
      {/* Search and filter */}
      <div className="flex gap-3 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search groups..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
        <Button
          className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Create Group
        </Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
        >
          All Groups
        </Button>
        <Button variant="outline" size="sm" className="rounded-full text-gray-700 border-gray-200 hover:bg-gray-50">
          Support
        </Button>
        <Button variant="outline" size="sm" className="rounded-full text-gray-700 border-gray-200 hover:bg-gray-50">
          Activities
        </Button>
        <Button variant="outline" size="sm" className="rounded-full text-gray-700 border-gray-200 hover:bg-gray-50">
          Local
        </Button>
        <Button variant="outline" size="sm" className="rounded-full text-gray-700 border-gray-200 hover:bg-gray-50">
          Nutrition
        </Button>
        <Button variant="outline" size="sm" className="rounded-full text-gray-700 border-gray-200 hover:bg-gray-50">
          Lifestyle
        </Button>
      </div>

      {/* Groups grid */}
      <div className="grid grid-cols-1 gap-4">
        {groups.map((group) => (
          <Card
            key={group.id}
            className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
          >
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div
                  className="h-16 w-16 rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${group.image})` }}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                      {group.category}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{group.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="h-3 w-3 mr-1" />
                      {group.members.toLocaleString()} members
                    </div>
                    <Button
                      size="sm"
                      variant={group.isJoined ? "outline" : "default"}
                      className={
                        group.isJoined
                          ? "rounded-lg text-purple-600 border-purple-200 hover:bg-purple-50 text-xs h-7"
                          : "rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs h-7"
                      }
                    >
                      {group.isJoined ? "Joined" : "Join"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
