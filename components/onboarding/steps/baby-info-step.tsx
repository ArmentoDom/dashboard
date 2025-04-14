"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Baby, Calendar, Scale, Ruler } from "lucide-react"

interface BabyInfoStepProps {
  data: {
    name: string
    birthdate: string
    weight: string
    height: string
    gender: string
  }
  updateData: (data: Partial<BabyInfoStepProps["data"]>) => void
  onNext: () => void
  onBack: () => void
}

export default function BabyInfoStep({ data, updateData, onNext, onBack }: BabyInfoStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!data.name.trim()) {
      newErrors.name = "Baby's name is required"
    }

    if (!data.birthdate) {
      newErrors.birthdate = "Birthdate is required"
    }

    if (!data.gender) {
      newErrors.gender = "Please select a gender"
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
              Tell us about your baby
            </h2>
            <p className="text-gray-500 mt-1">Help us personalize your experience</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="babyName">Baby's Name</Label>
              <div className="relative">
                <Input
                  id="babyName"
                  placeholder="Enter baby's name"
                  value={data.name}
                  onChange={(e) => updateData({ name: e.target.value })}
                  className={`pl-10 ${errors.name ? "border-red-300 focus-visible:ring-red-300" : ""}`}
                />
                <Baby className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthdate">Date of Birth (or Due Date)</Label>
              <div className="relative">
                <Input
                  id="birthdate"
                  type="date"
                  value={data.birthdate}
                  onChange={(e) => updateData({ birthdate: e.target.value })}
                  className={`pl-10 ${errors.birthdate ? "border-red-300 focus-visible:ring-red-300" : ""}`}
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              {errors.birthdate && <p className="text-xs text-red-500">{errors.birthdate}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (optional)</Label>
                <div className="relative">
                  <Input
                    id="weight"
                    placeholder="lbs"
                    value={data.weight}
                    onChange={(e) => updateData({ weight: e.target.value })}
                    className="pl-10"
                  />
                  <Scale className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="height">Height (optional)</Label>
                <div className="relative">
                  <Input
                    id="height"
                    placeholder="inches"
                    value={data.height}
                    onChange={(e) => updateData({ height: e.target.value })}
                    className="pl-10"
                  />
                  <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Gender</Label>
              <RadioGroup
                value={data.gender}
                onValueChange={(value) => updateData({ gender: value })}
                className="grid grid-cols-3 gap-2"
              >
                <Label
                  htmlFor="male"
                  className={`flex flex-col items-center justify-center space-y-1 rounded-lg border p-3 cursor-pointer transition-all
                    ${data.gender === "male" ? "border-blue-300 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="male" id="male" className="sr-only" />
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-lg">♂</span>
                  </div>
                  <span className="font-medium text-sm">Boy</span>
                </Label>
                <Label
                  htmlFor="female"
                  className={`flex flex-col items-center justify-center space-y-1 rounded-lg border p-3 cursor-pointer transition-all
                    ${data.gender === "female" ? "border-pink-300 bg-pink-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="female" id="female" className="sr-only" />
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-pink-600 text-lg">♀</span>
                  </div>
                  <span className="font-medium text-sm">Girl</span>
                </Label>
                <Label
                  htmlFor="other"
                  className={`flex flex-col items-center justify-center space-y-1 rounded-lg border p-3 cursor-pointer transition-all
                    ${data.gender === "other" ? "border-purple-300 bg-purple-50" : "border-gray-200 hover:bg-gray-50"}`}
                >
                  <RadioGroupItem value="other" id="other" className="sr-only" />
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 text-lg">⚥</span>
                  </div>
                  <span className="font-medium text-sm">Other</span>
                </Label>
              </RadioGroup>
              {errors.gender && <p className="text-xs text-red-500">{errors.gender}</p>}
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
