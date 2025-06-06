"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Sparkles, User, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function BottomNavbar() {
  const pathname = usePathname()
  const [active, setActive] = useState(() => {
    if (pathname === "/") return "home"
    if (pathname === "/social") return "social"
    if (pathname === "/ai-tools") return "ai-tools"
    if (pathname === "/profile") return "profile"
    if (pathname === "/planning") return "planning"
    return "home"
  })

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "/dashboard" },
    { id: "social", label: "Social", icon: Users, href: "/social" },
    { id: "ai-tools", label: "AI Tools", icon: Sparkles, href: "/ai-tools" },
    { id: "profile", label: "Profile", icon: User, href: "/profile" },
    { id: "planning", label: "Planning", icon: Calendar, href: "/planning" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="container max-w-md mx-auto px-4 pb-2">
        <div className="bg-white/90 border border-gray-100 rounded-xl shadow-[0_-4px_14px_rgba(0,0,0,0.08)] backdrop-blur-md">
          <div className="flex justify-between items-center relative">
            {active && (
              <motion.div
                className="absolute bg-gradient-to-r from-purple-500 to-pink-500 rounded-md h-[3px] top-0 z-0"
                layoutId="navbar-active"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{ width: `${100 / navItems.length}%` }}
                animate={{
                  left: `${(navItems.findIndex((item) => item.id === active) * 100) / navItems.length}%`,
                }}
              />
            )}

            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = active === item.id

              return (
                <Link
                  href={item.href}
                  key={item.id}
                  onClick={(e) => {
                    setActive(item.id)
                  }}
                  className={cn(
                    "flex flex-col items-center py-2 px-1 flex-1 relative z-10 transition-colors",
                    isActive ? "text-purple-600" : "text-gray-400 hover:text-purple-500",
                  )}
                >
                  <Icon className={cn("h-4 w-4 mb-0.5", isActive && "text-purple-600")} />
                  <span className={cn("text-[10px] font-medium", isActive && "font-semibold")}>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
