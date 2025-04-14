"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Edit,
  Save,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Star,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react"

export default function UserProfileSection() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=150&width=150")
  const [formData, setFormData] = useState({
    name: "Jessica Smith",
    email: "jessica.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Mom of one amazing baby boy. Passionate about sustainable parenting and early childhood development. Love sharing tips and learning from other parents!",
    birthdate: "1988-06-15",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset form data to original values
    setIsEditing(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      {/* Profile Header */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-24 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 relative">
          <div
            className="absolute inset-0 bg-pattern opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <CardContent className="p-0 relative">
          <div className="px-4 pb-4 pt-0 flex flex-col items-center">
            <div className="relative -mt-16 mb-2">
              <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                <AvatarImage src={profileImage || "/placeholder.svg"} alt="Profile" />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-4xl font-bold">
                  JS
                </AvatarFallback>
              </Avatar>

              {isEditing && (
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white cursor-pointer shadow-md hover:bg-purple-700 transition-colors"
                >
                  <Camera className="h-5 w-5" />
                  <input
                    type="file"
                    id="profile-image"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>

            <div className="text-center mb-2">
              {isEditing ? (
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="text-xl font-bold text-center"
                />
              ) : (
                <h2 className="text-2xl font-bold text-gray-900">{formData.name}</h2>
              )}
              <div className="flex items-center justify-center gap-2 mt-1">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Premium Member
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  Level 4
                </Badge>
              </div>
            </div>

            {!isEditing && (
              <Button
                onClick={() => setIsEditing(true)}
                variant="outline"
                className="rounded-full border-purple-200 text-purple-700 hover:bg-purple-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}

            {isEditing && (
              <div className="flex gap-2 w-full">
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="flex-1 rounded-full border-red-200 text-red-600 hover:bg-red-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Profile Stats */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <h3 className="font-bold text-gray-900 mb-3">Stats & Achievements</h3>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="flex flex-col items-center p-3 bg-purple-50 rounded-lg">
              <Star className="h-5 w-5 text-amber-500 mb-1" />
              <div className="text-xs font-medium text-purple-700">Rating</div>
              <div className="text-lg font-bold text-purple-700">4.8/5</div>
            </div>
            <div className="flex flex-col items-center p-3 bg-pink-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-500 mb-1" />
              <div className="text-xs font-medium text-pink-700">Streak</div>
              <div className="text-lg font-bold text-pink-700">12 days</div>
            </div>
            <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
              <Clock className="h-5 w-5 text-blue-500 mb-1" />
              <div className="text-xs font-medium text-blue-700">Member</div>
              <div className="text-lg font-bold text-blue-700">243 days</div>
            </div>
          </div>

          <h4 className="font-medium text-gray-900 mb-2">Recent Achievements</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-100">
              <Award className="h-6 w-6 text-amber-500" />
              <div className="flex-1">
                <h5 className="font-medium text-gray-900">Super Parent</h5>
                <p className="text-xs text-gray-500">Logged activities for 7 consecutive days</p>
              </div>
              <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                +50 XP
              </Badge>
            </div>
            <div className="flex items-center gap-3 p-2 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-100">
              <CheckCircle2 className="h-6 w-6 text-purple-500" />
              <div className="flex-1">
                <h5 className="font-medium text-gray-900">Milestone Master</h5>
                <p className="text-xs text-gray-500">Tracked 10 baby milestones</p>
              </div>
              <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
                +30 XP
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Information */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <h3 className="font-bold text-gray-900 mb-3">Personal Information</h3>

          <div className="space-y-4">
            {isEditing ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthdate">Birth Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      value={formData.birthdate}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Email Address</p>
                    <p className="font-medium text-gray-900">{formData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Phone Number</p>
                    <p className="font-medium text-gray-900">{formData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{formData.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Birth Date</p>
                    <p className="font-medium text-gray-900">
                      {new Date(formData.birthdate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Bio</p>
                  <p className="text-sm text-gray-700">{formData.bio}</p>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
