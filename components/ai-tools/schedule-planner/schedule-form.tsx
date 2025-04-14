"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Baby, Clock, Calendar, Sparkles, BabyIcon, Brain, Coffee } from "lucide-react"

interface ScheduleFormProps {
  onGenerateSchedule: () => void
}

export default function ScheduleForm({ onGenerateSchedule }: ScheduleFormProps) {
  const [childName, setChildName] = useState("")
  const [childAge, setChildAge] = useState("")
  const [wakeUpTime, setWakeUpTime] = useState(7)
  const [bedTime, setBedTime] = useState(19)
  const [napSchedule, setNapSchedule] = useState("two-naps")
  const [feedingReminders, setFeedingReminders] = useState(true)
  const [developmentActivities, setDevelopmentActivities] = useState(true)
  const [workSchedule, setWorkSchedule] = useState("full-time")
  const [partnerInvolvement, setPartnerInvolvement] = useState(true)
  const [selfCareTime, setSelfCareTime] = useState(true)

  const formatTime = (hour: number) => {
    const period = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 === 0 ? 12 : hour % 12
    return `${displayHour}:00 ${period}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerateSchedule()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Child Information */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
              <Baby className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Child Information</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="childName">Child's Name</Label>
              <Input
                id="childName"
                placeholder="Enter your child's name"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="childAge">Child's Age</Label>
              <Select onValueChange={setChildAge} defaultValue={childAge}>
                <SelectTrigger id="childAge" className="w-full">
                  <SelectValue placeholder="Select your child's age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-3m">0-3 months</SelectItem>
                  <SelectItem value="4-6m">4-6 months</SelectItem>
                  <SelectItem value="7-9m">7-9 months</SelectItem>
                  <SelectItem value="10-12m">10-12 months</SelectItem>
                  <SelectItem value="1-2y">1-2 years</SelectItem>
                  <SelectItem value="2-3y">2-3 years</SelectItem>
                  <SelectItem value="3-5y">3-5 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule Preferences */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
              <Clock className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Schedule Preferences</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="wakeUpTime">Wake-up Time</Label>
                <span className="text-sm font-medium text-blue-600">{formatTime(wakeUpTime)}</span>
              </div>
              <Slider
                id="wakeUpTime"
                min={5}
                max={9}
                step={0.5}
                value={[wakeUpTime]}
                onValueChange={(value) => setWakeUpTime(value[0])}
                className="py-4"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="bedTime">Bedtime</Label>
                <span className="text-sm font-medium text-blue-600">{formatTime(bedTime)}</span>
              </div>
              <Slider
                id="bedTime"
                min={18}
                max={21}
                step={0.5}
                value={[bedTime]}
                onValueChange={(value) => setBedTime(value[0])}
                className="py-4"
              />
            </div>

            <div className="space-y-2">
              <Label>Nap Schedule</Label>
              <RadioGroup value={napSchedule} onValueChange={setNapSchedule} className="grid grid-cols-1 gap-2">
                <Label
                  htmlFor="no-naps"
                  className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all
                    ${napSchedule === "no-naps" ? "border-blue-300 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="no-naps" id="no-naps" />
                  <div className="space-y-0.5">
                    <span className="font-medium text-gray-900">No Naps</span>
                    <p className="text-xs text-gray-500">For older children who don't nap</p>
                  </div>
                </Label>
                <Label
                  htmlFor="one-nap"
                  className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all
                    ${napSchedule === "one-nap" ? "border-blue-300 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="one-nap" id="one-nap" />
                  <div className="space-y-0.5">
                    <span className="font-medium text-gray-900">One Nap</span>
                    <p className="text-xs text-gray-500">Typically for children 12+ months</p>
                  </div>
                </Label>
                <Label
                  htmlFor="two-naps"
                  className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all
                    ${napSchedule === "two-naps" ? "border-blue-300 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="two-naps" id="two-naps" />
                  <div className="space-y-0.5">
                    <span className="font-medium text-gray-900">Two Naps</span>
                    <p className="text-xs text-gray-500">Typically for children 6-15 months</p>
                  </div>
                </Label>
                <Label
                  htmlFor="three-naps"
                  className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all
                    ${napSchedule === "three-naps" ? "border-blue-300 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="three-naps" id="three-naps" />
                  <div className="space-y-0.5">
                    <span className="font-medium text-gray-900">Three+ Naps</span>
                    <p className="text-xs text-gray-500">Typically for babies under 6 months</p>
                  </div>
                </Label>
              </RadioGroup>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                  <BabyIcon className="h-4 w-4" />
                </div>
                <Label htmlFor="feedingReminders" className="text-sm font-medium">
                  Feeding Reminders
                </Label>
              </div>
              <Switch id="feedingReminders" checked={feedingReminders} onCheckedChange={setFeedingReminders} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                  <Brain className="h-4 w-4" />
                </div>
                <Label htmlFor="developmentActivities" className="text-sm font-medium">
                  Development Activities
                </Label>
              </div>
              <Switch
                id="developmentActivities"
                checked={developmentActivities}
                onCheckedChange={setDevelopmentActivities}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parent Schedule */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
              <Calendar className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Parent Schedule</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="workSchedule">Your Work Schedule</Label>
              <Select onValueChange={setWorkSchedule} defaultValue={workSchedule}>
                <SelectTrigger id="workSchedule" className="w-full">
                  <SelectValue placeholder="Select your work schedule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stay-at-home">Stay-at-home parent</SelectItem>
                  <SelectItem value="part-time">Part-time work</SelectItem>
                  <SelectItem value="full-time">Full-time work</SelectItem>
                  <SelectItem value="flexible">Flexible/Remote work</SelectItem>
                  <SelectItem value="shift-work">Shift work</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                  <Users className="h-4 w-4" />
                </div>
                <Label htmlFor="partnerInvolvement" className="text-sm font-medium">
                  Partner Involvement
                </Label>
              </div>
              <Switch id="partnerInvolvement" checked={partnerInvolvement} onCheckedChange={setPartnerInvolvement} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-100 text-blue-600">
                  <Coffee className="h-4 w-4" />
                </div>
                <Label htmlFor="selfCareTime" className="text-sm font-medium">
                  Self-care Time
                </Label>
              </div>
              <Switch id="selfCareTime" checked={selfCareTime} onCheckedChange={setSelfCareTime} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generate Button */}
      <Button
        type="submit"
        className="w-full py-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl shadow-blue-200/50 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Sparkles className="h-5 w-5" />
        <span className="text-base font-semibold">Generate AI Schedule</span>
      </Button>
    </form>
  )
}

function Users(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
