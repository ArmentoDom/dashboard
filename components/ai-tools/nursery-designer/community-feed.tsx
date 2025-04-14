"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Heart, Share2, Bookmark, MoreHorizontal, Upload, Sparkles } from "lucide-react"

export default function CommunityFeed() {
  const [activeFilter, setActiveFilter] = useState("trending")

  // Mock data for community designs
  const communityDesigns = [
    {
      id: 1,
      user: {
        name: "Emily Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EC",
      },
      timeAgo: "2 days ago",
      title: "Woodland Wonderland Nursery",
      description: "Created this cozy space for my baby boy with woodland animals theme and natural elements.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      likes: 42,
      comments: 8,
      isLiked: false,
      isBookmarked: true,
      tags: ["woodland", "natural", "boy"],
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SW",
      },
      timeAgo: "1 week ago",
      title: "Dreamy Pastel Cloud Nursery",
      description: "Soft pastels and cloud motifs for my baby girl. Everything was done on a budget!",
      imageUrl: "/placeholder.svg?height=300&width=400",
      likes: 78,
      comments: 12,
      isLiked: true,
      isBookmarked: false,
      tags: ["pastel", "clouds", "girl", "budget"],
    },
    {
      id: 3,
      user: {
        name: "Michael Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MJ",
      },
      timeAgo: "2 weeks ago",
      title: "Modern Minimalist Nursery",
      description: "Clean lines and monochrome palette with pops of yellow. Gender-neutral and sustainable materials.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      likes: 56,
      comments: 5,
      isLiked: false,
      isBookmarked: false,
      tags: ["minimalist", "monochrome", "sustainable"],
    },
  ]

  return (
    <div className="space-y-4">
      {/* Filter Tabs */}
      <Tabs defaultValue="trending" value={activeFilter} onValueChange={setActiveFilter} className="w-full">
        <TabsList className="bg-white border border-gray-100 shadow-sm rounded-lg p-1 w-full flex justify-start">
          <TabsTrigger
            value="trending"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
          >
            Trending
          </TabsTrigger>
          <TabsTrigger
            value="recent"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
          >
            Recent
          </TabsTrigger>
          <TabsTrigger
            value="following"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-violet-600 data-[state=active]:text-white"
          >
            Following
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Share Your Design Card */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-violet-500" />
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center text-white">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Share Your Nursery Design</h3>
              <p className="text-sm text-gray-500">Inspire other parents with your creation</p>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              <Upload className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Community Designs */}
      <div className="space-y-4">
        {communityDesigns.map((design) => (
          <Card
            key={design.id}
            className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
          >
            <CardContent className="p-4">
              {/* User info */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                    <AvatarImage src={design.user.avatar || "/placeholder.svg"} alt={design.user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-violet-500 text-white">
                      {design.user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{design.user.name}</h3>
                    <p className="text-xs text-gray-500">{design.timeAgo}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>

              {/* Design content */}
              <div className="mt-3">
                <h4 className="font-medium text-gray-900 text-lg">{design.title}</h4>
                <p className="text-sm text-gray-700 mt-1">{design.description}</p>

                <div className="mt-3 relative">
                  <img
                    src={design.imageUrl || "/placeholder.svg"}
                    alt={design.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {design.isBookmarked && (
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                      <Bookmark className="h-4 w-4 text-purple-600 fill-purple-600" />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {design.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 text-xs"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Interaction buttons */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                <div className="flex gap-4">
                  <button
                    className={`flex items-center gap-1 text-sm ${
                      design.isLiked ? "text-pink-500" : "text-gray-500 hover:text-pink-500"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${design.isLiked ? "fill-pink-500" : ""}`} />
                    <span>{design.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-purple-500">
                    <MessageCircle className="h-4 w-4" />
                    <span>{design.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
                <button
                  className={`flex items-center text-sm ${
                    design.isBookmarked ? "text-purple-500" : "text-gray-500 hover:text-purple-500"
                  }`}
                >
                  <Bookmark className={`h-4 w-4 ${design.isBookmarked ? "fill-purple-500" : ""}`} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      <Button
        variant="outline"
        className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
      >
        Load More Designs
      </Button>
    </div>
  )
}
