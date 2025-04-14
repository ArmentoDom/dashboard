"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Send, ImageIcon, Smile, Paperclip, MoreVertical, Phone, Video, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock data for conversations
const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SJ",
    lastMessage: "That's a great idea! Let's plan for next weekend.",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Parent Support Group",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PSG",
    lastMessage: "Emily: Has anyone tried the new organic baby food brand?",
    time: "1h ago",
    unread: 0,
    online: false,
    isGroup: true,
    members: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MC",
    lastMessage: "Thanks for the playdate tips!",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: "Jessica Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JW",
    lastMessage: "The pediatrician recommended that book too.",
    time: "2d ago",
    unread: 0,
    online: false,
  },
]

// Mock data for messages in the active conversation
const messages = [
  {
    id: 1,
    sender: "other",
    content: "Hey! How's your little one doing with the new sleep schedule?",
    time: "10:32 AM",
  },
  {
    id: 2,
    sender: "me",
    content:
      "Much better! We've had three nights in a row with only one wake-up. I think the routine is finally working.",
    time: "10:35 AM",
  },
  {
    id: 3,
    sender: "other",
    content: "That's amazing progress! What time are you starting bedtime?",
    time: "10:36 AM",
  },
  {
    id: 4,
    sender: "me",
    content:
      "We start the routine at 7pm with a bath, then story time, and lights out by 7:30pm. It's been really consistent.",
    time: "10:40 AM",
  },
  {
    id: 5,
    sender: "other",
    content:
      "I should try that! We've been struggling with a consistent schedule. Would you mind sharing any other tips that worked for you?",
    time: "10:42 AM",
  },
  {
    id: 6,
    sender: "me",
    content:
      "Of course! The biggest game-changer was keeping the room really dark and using a white noise machine. Also, we stopped going in immediately when she fusses - we wait a few minutes first to see if she'll settle herself.",
    time: "10:45 AM",
  },
]

export default function DMsView() {
  const [activeConversation, setActiveConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [inConversation, setInConversation] = useState(false)
  const messagesEndRef = useRef(null)

  // Scroll to bottom of messages when new ones arrive
  useEffect(() => {
    if (inConversation && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [inConversation, messages.length])

  // Replace the onClick handlers for conversation selection with this function
  const selectConversation = (conversation) => {
    setActiveConversation(conversation)
    setInConversation(true)
  }

  const goBackToList = () => {
    setInConversation(false)
  }

  return (
    <div className="w-full">
      {!inConversation ? (
        // Conversation list view
        <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
              <Button
                size="sm"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <ImageIcon className="h-4 w-4 mr-1" />
                New Message
              </Button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="space-y-2 max-h-[calc(100vh-16rem)] overflow-y-auto pb-4">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100"
                  onClick={() => selectConversation(conversation)}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                        {conversation.initials}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        // Full-screen chat view
        <div className="fixed inset-x-0 top-[2.8rem] bottom-16 bg-gray-50 z-40 flex flex-col">
          {/* Chat header */}
          <div className="sticky top-0 p-3 bg-white border-b border-gray-100 flex justify-between items-center shadow-sm z-10">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={goBackToList}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                <AvatarImage src={activeConversation.avatar || "/placeholder.svg"} alt={activeConversation.name} />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  {activeConversation.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-gray-900">{activeConversation.name}</h3>
                <p className="text-xs text-gray-500">
                  {activeConversation.online ? "Online" : "Offline"}
                  {activeConversation.isGroup && ` • ${activeConversation.members} members`}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={cn("flex", message.sender === "me" ? "justify-end" : "justify-start")}>
                {message.sender === "other" && (
                  <Avatar className="h-8 w-8 mr-2 mt-1">
                    <AvatarImage src={activeConversation.avatar || "/placeholder.svg"} alt={activeConversation.name} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      {activeConversation.initials}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className="max-w-[75%]">
                  <div
                    className={cn(
                      "rounded-2xl p-3 text-sm",
                      message.sender === "me"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "bg-white text-gray-700 border border-gray-100",
                    )}
                  >
                    {message.content}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex gap-2 items-center">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <div className="relative flex-1">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="rounded-full bg-gray-50 border-gray-200 focus-visible:ring-purple-500"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full text-gray-500"
                >
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
              <Button
                size="icon"
                className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                disabled={!newMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
