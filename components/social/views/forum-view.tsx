"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, Share2, Bookmark, MoreHorizontal, Users, Hash, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for forum posts
const forumPosts = [
  {
    id: 1,
    author: {
      name: "Jessica Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
    },
    timeAgo: "2 hours ago",
    content:
      "Has anyone tried the new sleep training method that's been going around? My 8-month-old still wakes up 3-4 times a night and I'm exhausted! 😴",
    tags: ["#sleeptraining", "#babycare", "#parenting"],
    likes: 24,
    comments: 18,
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 2,
    author: {
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MJ",
    },
    timeAgo: "5 hours ago",
    content:
      "Just discovered an amazing park with a toddler-friendly playground in the downtown area! It has soft surfaces, small slides, and even a mini water play area for hot days. Highly recommend checking it out!",
    tags: ["#playgrounds", "#toddleractivities", "#outdoorfun"],
    likes: 42,
    comments: 7,
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 3,
    author: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
    },
    timeAgo: "Yesterday",
    content:
      "Looking for recommendations on baby-led weaning cookbooks or resources. My little one is showing interest in our food and I want to start introducing solids safely.",
    tags: ["#babyledweaning", "#firstfoods", "#nutrition"],
    likes: 18,
    comments: 32,
    isLiked: false,
    isBookmarked: false,
  },
]

export default function ForumView() {
  const [postContent, setPostContent] = useState("")
  const [activeFilter, setActiveFilter] = useState("trending")

  return (
    <div className="space-y-4">
      {/* Post composer */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">JS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <textarea
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
                placeholder="What's on your mind?"
                rows={3}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              ></textarea>
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg text-gray-500 border-gray-200 hover:bg-purple-50 hover:text-purple-600"
                  >
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Photo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg text-gray-500 border-gray-200 hover:bg-purple-50 hover:text-purple-600"
                  >
                    # Tags
                  </Button>
                </div>
                <Button
                  size="sm"
                  className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  disabled={!postContent.trim()}
                >
                  Post
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs navigation with dots */}
      <Tabs defaultValue="trending" value={activeFilter} onValueChange={setActiveFilter} className="w-full">
        <div className="flex justify-center items-center gap-3 py-3 px-4 bg-white rounded-xl border border-gray-100 shadow-sm mb-2">
          {[
            { id: "trending", label: "Trending" },
            { id: "recent", label: "Recent" },
            { id: "following", label: "Following" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className="flex flex-col items-center gap-1.5 px-3"
              aria-label={`Switch to ${tab.label} tab`}
            >
              <span
                className={cn(
                  "text-xs font-medium transition-colors",
                  activeFilter === tab.id ? "text-purple-600" : "text-gray-400",
                )}
              >
                {tab.label}
              </span>
              <div
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  activeFilter === tab.id ? "bg-purple-500" : "bg-gray-200",
                )}
              />
            </button>
          ))}
        </div>

        <TabsContent value="trending" className="mt-4 space-y-4">
          {forumPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
        <TabsContent value="recent" className="mt-4 space-y-4">
          {[...forumPosts].reverse().map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
        <TabsContent value="following" className="mt-4 space-y-4">
          {forumPosts
            .filter((post) => post.id % 2 === 0)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </TabsContent>
      </Tabs>

      {/* Mobile sidebar content */}
      <div className="mt-4 md:hidden space-y-4">
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
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {[
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
              ].map((group) => (
                <div key={group.id} className="flex flex-col items-center min-w-[100px] p-2 rounded-lg">
                  <div
                    className="h-12 w-12 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${group.image})` }}
                  ></div>
                  <h4 className="font-medium text-gray-900 text-xs mt-1 text-center truncate w-full">{group.name}</h4>
                  <p className="text-[10px] text-gray-500">{group.members.toLocaleString()} members</p>
                  <Button
                    size="sm"
                    className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-6 text-xs mt-1 w-full"
                  >
                    Join
                  </Button>
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
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 1, name: "#sleeptraining", count: 243 },
                { id: 2, name: "#toddlertips", count: 189 },
                { id: 3, name: "#babyfood", count: 156 },
                { id: 4, name: "#newparents", count: 132 },
              ].map((tag) => (
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
      </div>
    </div>
  )
}

interface PostCardProps {
  post: {
    id: number
    author: {
      name: string
      avatar: string
      initials: string
    }
    timeAgo: string
    content: string
    tags: string[]
    likes: number
    comments: number
    isLiked: boolean
    isBookmarked: boolean
  }
}

function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked)

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                {post.author.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-xs text-gray-500">{post.timeAgo}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-3">
          <p className="text-gray-700 text-sm break-words">{post.content}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
          <div className="flex gap-4">
            <button
              className={`flex items-center gap-1 text-sm ${
                isLiked ? "text-pink-500" : "text-gray-500 hover:text-pink-500"
              }`}
              onClick={toggleLike}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-pink-500" : ""}`} />
              <span>{likeCount}</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-purple-500">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
          <button
            className={`flex items-center text-sm ${
              isBookmarked ? "text-amber-500" : "text-gray-500 hover:text-amber-500"
            }`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-amber-500" : ""}`} />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
