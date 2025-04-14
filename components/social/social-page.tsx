"use client"

import { useState } from "react"
import { Sparkles, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import SocialNavigation from "./social-navigation"
import ForumView from "./views/forum-view"
import GroupsView from "./views/groups-view"
import DMsView from "./views/dms-view"
import MyPostsView from "./views/my-posts-view"
import NotificationsView from "./views/notifications-view"
import SocialSidebar from "./social-sidebar"

type SocialView = "forum" | "groups" | "dms" | "my-posts" | "notifications"

export default function SocialPage() {
  const [activeView, setActiveView] = useState<SocialView>("forum")

  const renderView = () => {
    switch (activeView) {
      case "forum":
        return <ForumView />
      case "groups":
        return <GroupsView />
      case "dms":
        return <DMsView />
      case "my-posts":
        return <MyPostsView />
      case "notifications":
        return <NotificationsView />
      default:
        return <ForumView />
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4">
      {/* Header */}
      <header className="py-2.5 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container max-w-md mx-auto px-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-sm">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ParentSphere
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50"
            >
              <Search className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50"
            >
              <Bell className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Social Navigation */}
      <div className="mt-2 sticky top-[2.8rem] z-40">
        <SocialNavigation activeView={activeView} setActiveView={setActiveView} />
      </div>

      {/* Main Content */}
      <div className="mt-3 pb-20">
        {renderView()}

        {/* Only show sidebar on larger screens */}
        <div className="hidden md:block mt-4">
          <SocialSidebar />
        </div>
      </div>
    </div>
  )
}
