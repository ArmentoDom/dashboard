"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Lock, Bell, Shield, HelpCircle, LogOut, Trash2, Eye, EyeOff, Languages, Moon, Sun } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function AccountSettingsSection() {
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [notificationSettings, setNotificationSettings] = useState({
    appNotifications: true,
    emailNotifications: true,
    milestoneAlerts: true,
    communityActivity: false,
    marketingEmails: false,
  })
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "friends",
    shareActivityData: true,
    allowTagging: true,
    showOnlineStatus: true,
  })
  const [appSettings, setAppSettings] = useState({
    language: "english",
    theme: "light",
    autoPlayVideos: false,
    dataUsage: "wifi-only",
  })

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (setting: string, value: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [setting]: value }))
  }

  const handlePrivacyChange = (setting: string, value: string | boolean) => {
    setPrivacySettings((prev) => ({ ...prev, [setting]: value }))
  }

  const handleAppSettingChange = (setting: string, value: string | boolean) => {
    setAppSettings((prev) => ({ ...prev, [setting]: value }))
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would update the password
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    // Show success message
  }

  return (
    <div className="space-y-4">
      {/* Password Section */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
              <Lock className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Password & Security</h3>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type={showPassword ? "text" : "password"}
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter your current password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={passwordForm.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm new password"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              disabled={
                !passwordForm.currentPassword ||
                !passwordForm.newPassword ||
                passwordForm.newPassword !== passwordForm.confirmPassword
              }
            >
              Update Password
            </Button>
          </form>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button
              variant="outline"
              className="w-full rounded-full border-purple-200 text-purple-700 hover:bg-purple-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Enable Two-Factor Authentication
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
              <Bell className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Notifications</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">App Notifications</p>
                <p className="text-xs text-gray-500">Receive push notifications in the app</p>
              </div>
              <Switch
                checked={notificationSettings.appNotifications}
                onCheckedChange={(checked) => handleNotificationChange("appNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-xs text-gray-500">Receive important updates via email</p>
              </div>
              <Switch
                checked={notificationSettings.emailNotifications}
                onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Milestone Alerts</p>
                <p className="text-xs text-gray-500">Get notified about upcoming baby milestones</p>
              </div>
              <Switch
                checked={notificationSettings.milestoneAlerts}
                onCheckedChange={(checked) => handleNotificationChange("milestoneAlerts", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Community Activity</p>
                <p className="text-xs text-gray-500">Notifications about likes, comments, and mentions</p>
              </div>
              <Switch
                checked={notificationSettings.communityActivity}
                onCheckedChange={(checked) => handleNotificationChange("communityActivity", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Marketing Emails</p>
                <p className="text-xs text-gray-500">Receive promotional content and special offers</p>
              </div>
              <Switch
                checked={notificationSettings.marketingEmails}
                onCheckedChange={(checked) => handleNotificationChange("marketingEmails", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Section */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
              <Shield className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Privacy</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profileVisibility">Profile Visibility</Label>
              <Select
                value={privacySettings.profileVisibility}
                onValueChange={(value) => handlePrivacyChange("profileVisibility", value)}
              >
                <SelectTrigger id="profileVisibility">
                  <SelectValue placeholder="Who can see your profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public - Everyone</SelectItem>
                  <SelectItem value="friends">Friends Only</SelectItem>
                  <SelectItem value="private">Private - Only Me</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Share Activity Data</p>
                <p className="text-xs text-gray-500">Allow sharing of your activity with friends</p>
              </div>
              <Switch
                checked={privacySettings.shareActivityData}
                onCheckedChange={(checked) => handlePrivacyChange("shareActivityData", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Allow Tagging</p>
                <p className="text-xs text-gray-500">Let others tag you in posts and photos</p>
              </div>
              <Switch
                checked={privacySettings.allowTagging}
                onCheckedChange={(checked) => handlePrivacyChange("allowTagging", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Show Online Status</p>
                <p className="text-xs text-gray-500">Display when you're active in the app</p>
              </div>
              <Switch
                checked={privacySettings.showOnlineStatus}
                onCheckedChange={(checked) => handlePrivacyChange("showOnlineStatus", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* App Settings */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
              <Languages className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">App Settings</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select value={appSettings.language} onValueChange={(value) => handleAppSettingChange("language", value)}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                  <SelectItem value="german">German</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  className={`flex items-center justify-center gap-2 p-2 rounded-lg border ${
                    appSettings.theme === "light"
                      ? "bg-purple-50 border-purple-200 text-purple-700"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => handleAppSettingChange("theme", "light")}
                >
                  <Sun className="h-4 w-4" />
                  <span className="text-sm">Light</span>
                </button>
                <button
                  type="button"
                  className={`flex items-center justify-center gap-2 p-2 rounded-lg border ${
                    appSettings.theme === "dark"
                      ? "bg-purple-50 border-purple-200 text-purple-700"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => handleAppSettingChange("theme", "dark")}
                >
                  <Moon className="h-4 w-4" />
                  <span className="text-sm">Dark</span>
                </button>
                <button
                  type="button"
                  className={`flex items-center justify-center gap-2 p-2 rounded-lg border ${
                    appSettings.theme === "system"
                      ? "bg-purple-50 border-purple-200 text-purple-700"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => handleAppSettingChange("theme", "system")}
                >
                  <span className="text-sm">System</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Auto-Play Videos</p>
                <p className="text-xs text-gray-500">Play videos automatically when scrolling</p>
              </div>
              <Switch
                checked={appSettings.autoPlayVideos}
                onCheckedChange={(checked) => handleAppSettingChange("autoPlayVideos", checked)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dataUsage">Data Usage</Label>
              <Select
                value={appSettings.dataUsage}
                onValueChange={(value) => handleAppSettingChange("dataUsage", value)}
              >
                <SelectTrigger id="dataUsage">
                  <SelectValue placeholder="Select data usage preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="always">Always download media</SelectItem>
                  <SelectItem value="wifi-only">Download media on Wi-Fi only</SelectItem>
                  <SelectItem value="data-saver">Data saver mode</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help & Support */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
              <HelpCircle className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Help & Support</h3>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              FAQs & Help Center
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Privacy Policy
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Terms of Service
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-bold text-gray-900">Account Actions</h3>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full rounded-full border-amber-200 text-amber-600 hover:bg-amber-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full rounded-full border-red-200 text-red-600 hover:bg-red-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Account</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete your account? This action cannot be undone and all your data will be
                    permanently removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="rounded-full">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="rounded-full bg-red-600 hover:bg-red-700 text-white">
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
