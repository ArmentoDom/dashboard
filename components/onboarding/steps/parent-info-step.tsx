"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { EyeIcon, EyeOffIcon, User, Mail, Lock } from "lucide-react"

interface ParentInfoStepProps {
  data: {
    name: string
    email: string
    password: string
    experienceLevel: string
  }
  updateData: (data: Partial<ParentInfoStepProps["data"]>) => void
  onNext: () => void
}

export default function ParentInfoStep({ data, updateData, onNext }: ParentInfoStepProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required"
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!data.experienceLevel) {
      newErrors.experienceLevel = "Please select your experience level"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onNext()
    }
  }

  return (
    <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tell us about yourself
            </h2>
            <p className="text-gray-500 mt-1">Let's start with some basic information</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <div className="relative">
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={data.name}
                  onChange={(e) => updateData({ name: e.target.value })}
                  className={`pl-10 ${errors.name ? "border-red-300 focus-visible:ring-red-300" : ""}`}
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={data.email}
                  onChange={(e) => updateData({ email: e.target.value })}
                  className={`pl-10 ${errors.email ? "border-red-300 focus-visible:ring-red-300" : ""}`}
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={data.password}
                  onChange={(e) => updateData({ password: e.target.value })}
                  className={`pl-10 ${errors.password ? "border-red-300 focus-visible:ring-red-300" : ""}`}
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>

            <div className="space-y-3">
              <Label>Your Parenting Experience</Label>
              <RadioGroup
                value={data.experienceLevel}
                onValueChange={(value) => updateData({ experienceLevel: value })}
                className="grid grid-cols-1 gap-2"
              >
                <Label
                  htmlFor="expecting"
                  className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all
                    ${data.experienceLevel === "expecting" ? "border-purple-300 bg-purple-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="expecting" id="expecting" />
                  <div className="space-y-0.5">
                    <span className="font-medium text-gray-900">Expecting</span>
                    <p className="text-xs text-gray-500">Preparing for your first child</p>
                  </div>
                </Label>
                <Label
                  htmlFor="new"
                  className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all
                    ${data.experienceLevel === "new" ? "border-purple-300 bg-purple-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="new" id="new" />
                  <div className="space-y-0.5">
                    <span className="font-medium text-gray-900">New Parent</span>
                    <p className="text-xs text-gray-500">First-time parent with a child under 1 year</p>
                  </div>
                </Label>
                <Label
                  htmlFor="experienced"
                  className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer transition-all
                    ${data.experienceLevel === "experienced" ? "border-purple-300 bg-purple-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="experienced" id="experienced" />
                  <div className="space-y-0.5">
                    <span className="font-medium text-gray-900">Experienced</span>
                    <p className="text-xs text-gray-500">Parent with multiple children or older children</p>
                  </div>
                </Label>
              </RadioGroup>
              {errors.experienceLevel && <p className="text-xs text-red-500">{errors.experienceLevel}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Continue
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
