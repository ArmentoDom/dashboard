"use client"

import { MessageSquare, Users, MessageCircle, FileText, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

type SocialView = "forum" | "groups" | "dms" | "my-posts" | "notifications"

interface SocialNavigationProps {
  activeView: SocialView
  setActiveView: (view: SocialView) => void
}

export default function SocialNavigation({ activeView, setActiveView }: SocialNavigationProps) {
  const navItems = [
    {
      id: "forum" as SocialView,
      label: "Forum",
      icon: MessageSquare,
    },
    {
      id: "groups" as SocialView,
      label: "Groups",
      icon: Users,
    },
    {
      id: "dms" as SocialView,
      label: "DMs",
      icon: MessageCircle,
    },
    {
      id: "my-posts" as SocialView,
      label: "My Posts",
      icon: FileText,
    },
    {
      id: "notifications" as SocialView,
      label: "Notifications",
      icon: Bell,
      badge: 3,
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1">
      <div className="flex overflow-x-auto scrollbar-thin">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={cn(
              "flex items-center gap-1 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all relative text-xs",
              activeView === item.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
                : "text-gray-600 hover:bg-gray-50",
            )}
          >
            <item.icon className="h-3.5 w-3.5" />
            <span>{item.label}</span>
            {item.badge && (
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
