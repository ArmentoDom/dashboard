import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, Share2, Bookmark, MoreHorizontal } from "lucide-react"

// Mock data for user's posts
const myPosts = [
  {
    id: 1,
    content:
      "Just discovered an amazing app for tracking baby's sleep patterns! It's been a game-changer for establishing a routine. Has anyone else tried the BabySleep Pro app?",
    tags: ["#babyapps", "#sleeptracking", "#newparent"],
    likes: 32,
    comments: 14,
    timeAgo: "2 days ago",
  },
  {
    id: 2,
    content:
      "Looking for recommendations on baby carriers that are comfortable for longer walks. My little one loves being carried but my back is starting to feel it!",
    tags: ["#babycarriers", "#ergonomics", "#parentingtips"],
    likes: 18,
    comments: 23,
    timeAgo: "1 week ago",
  },
]

// Mock data for user's comments
const myComments = [
  {
    id: 1,
    postAuthor: "Emily Chen",
    postContent: "What age did everyone start introducing solid foods to their babies?",
    myComment:
      "We started at 6 months with baby-led weaning and it worked great for us! Started with soft fruits and steamed veggies cut into finger-sized pieces.",
    likes: 12,
    timeAgo: "3 days ago",
  },
  {
    id: 2,
    postAuthor: "James Wilson",
    postContent: "Any recommendations for childproofing products? About to have a crawler!",
    myComment:
      "We used the Safety 1st magnetic cabinet locks and they've been fantastic - completely hidden from view but very secure. Also recommend corner protectors for coffee tables!",
    likes: 8,
    timeAgo: "5 days ago",
  },
]

export default function MyPostsView() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="bg-white border border-gray-100 shadow-sm rounded-lg p-1 w-full flex justify-start">
          <TabsTrigger
            value="posts"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            My Posts
          </TabsTrigger>
          <TabsTrigger
            value="comments"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            My Comments
          </TabsTrigger>
          <TabsTrigger
            value="saved"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Saved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-4 space-y-4">
          {myPosts.map((post) => (
            <Card
              key={post.id}
              className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="You" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                        ME
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">You</h3>
                      <p className="text-xs text-gray-500">{post.timeAgo}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 text-sm">{post.content}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 text-sm text-pink-500">
                      <Heart className="h-4 w-4 fill-pink-500" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-purple-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="flex items-center text-sm text-gray-500 hover:text-amber-500">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="comments" className="mt-4 space-y-4">
          {myComments.map((comment) => (
            <Card
              key={comment.id}
              className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                  <p className="text-xs text-gray-500">
                    You commented on {comment.postAuthor}'s post {comment.timeAgo}
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-xl mb-3 border border-gray-100">
                  <p className="text-sm text-gray-700 font-medium">{comment.postAuthor}</p>
                  <p className="text-sm text-gray-600 mt-1">{comment.postContent}</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-0.5 bg-gray-100"></div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="You" />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs">
                          ME
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 bg-purple-50 p-2 rounded-xl border border-purple-100">
                        <p className="text-sm text-gray-700">{comment.myComment}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2 ml-8">
                      <button className="flex items-center gap-1 text-xs text-pink-500">
                        <Heart className="h-3 w-3 fill-pink-500" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="text-xs text-gray-500 hover:text-gray-700">Reply</button>
                      <button className="text-xs text-gray-500 hover:text-gray-700">Edit</button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="saved" className="mt-4">
          <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
            <CardContent className="p-6 text-center">
              <Bookmark className="h-12 w-12 mx-auto text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-gray-900">No saved posts yet</h3>
              <p className="text-sm text-gray-500 mt-1">
                Bookmark posts you want to reference later and they'll appear here.
              </p>
              <Button
                className="mt-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                size="sm"
              >
                Browse Forum
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
