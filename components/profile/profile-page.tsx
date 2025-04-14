"use client"

import { useState } from "react"
import { Sparkles, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserProfileSection from "./user-profile-section"
import BabyProfilesSection from "./baby-profiles-section"
import AccountSettingsSection from "./account-settings-section"
import SubscriptionSection from "./subscription-section"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="container max-w-md mx-auto px-4">
      {/* Header */}
      <header className="py-2 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container max-w-md mx-auto px-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-sm">
              <User className="h-3 w-3 text-white" />
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Profile
            </h1>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-purple-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-4 pb-20">
        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 bg-white border border-gray-100 shadow-sm rounded-lg p-1 mb-4">
            <TabsTrigger
              value="profile"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="babies"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              Babies
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              Settings
            </TabsTrigger>
            <TabsTrigger
              value="premium"
              className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              Premium
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-0">
            <UserProfileSection />
          </TabsContent>

          <TabsContent value="babies" className="mt-0">
            <BabyProfilesSection />
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <AccountSettingsSection />
          </TabsContent>

          <TabsContent value="premium" className="mt-0">
            <SubscriptionSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
