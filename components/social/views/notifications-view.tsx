import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, UserPlus, Bell, Users, CheckCheck } from "lucide-react"

// Mock data for notifications
const notifications = [
  {
    id: 1,
    type: "like",
    user: {
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EC",
    },
    content: "liked your post about sleep training methods",
    time: "5 minutes ago",
    isNew: true,
  },
  {
    id: 2,
    type: "comment",
    user: {
      name: "Michael Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MJ",
    },
    content: 'commented on your post: "We tried that method too and it worked great for us!"',
    time: "2 hours ago",
    isNew: true,
  },
  {
    id: 3,
    type: "follow",
    user: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
    },
    content: "started following you",
    time: "Yesterday",
    isNew: false,
  },
  {
    id: 4,
    type: "group",
    user: {
      name: "David Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DL",
    },
    content: 'invited you to join the group "Parents of Toddlers"',
    time: "2 days ago",
    isNew: false,
    groupAction: true,
  },
  {
    id: 5,
    type: "mention",
    user: {
      name: "Jessica Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JB",
    },
    content: 'mentioned you in a comment: "@user I think you had some great advice about this!"',
    time: "3 days ago",
    isNew: false,
  },
]

export default function NotificationsView() {
  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-pink-500" />
      case "comment":
        return <MessageCircle className="h-4 w-4 text-purple-500" />
      case "follow":
        return <UserPlus className="h-4 w-4 text-blue-500" />
      case "group":
        return <Users className="h-4 w-4 text-green-500" />
      case "mention":
        return <Bell className="h-4 w-4 text-amber-500" />
      default:
        return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
          <CheckCheck className="h-4 w-4 mr-1" />
          Mark all as read
        </Button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`border-none shadow-md overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] ${
              notification.isNew ? "bg-purple-50" : "bg-white"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                  <AvatarImage src={notification.user.avatar || "/placeholder.svg"} alt={notification.user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    {notification.user.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{notification.user.name}</span>
                        <div className="p-1 rounded-full bg-gray-100">{getIcon(notification.type)}</div>
                        {notification.isNew && (
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-[10px]">New</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 mt-0.5">{notification.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>

                  {notification.groupAction && (
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white h-8"
                      >
                        Accept
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg text-gray-700 border-gray-200 hover:bg-gray-50 h-8"
                      >
                        Decline
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
