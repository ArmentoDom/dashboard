"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Baby, Plus, Edit, Trash2, Calendar, Ruler, Scale, Heart, Activity, Camera } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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

interface BabyProfile {
  id: number
  name: string
  birthdate: string
  gender: string
  image: string
  weight: string
  height: string
  allergies: string[]
  milestones: {
    title: string
    date: string
  }[]
}

export default function BabyProfilesSection() {
  const [babyProfiles, setBabyProfiles] = useState<BabyProfile[]>([
    {
      id: 1,
      name: "Noah",
      birthdate: "2023-06-15",
      gender: "male",
      image: "/placeholder.svg?height=100&width=100",
      weight: "18 lbs",
      height: "28 inches",
      allergies: ["Dairy", "Peanuts"],
      milestones: [
        { title: "First Smile", date: "2023-07-20" },
        { title: "Rolling Over", date: "2023-09-10" },
        { title: "First Word", date: "2024-01-05" },
      ],
    },
  ])

  const [editingBaby, setEditingBaby] = useState<BabyProfile | null>(null)
  const [newBaby, setNewBaby] = useState<Partial<BabyProfile>>({
    name: "",
    birthdate: "",
    gender: "",
    image: "/placeholder.svg?height=100&width=100",
    weight: "",
    height: "",
    allergies: [],
  })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedBabyId, setSelectedBabyId] = useState<number | null>(null)

  const handleAddBaby = () => {
    const newId = babyProfiles.length > 0 ? Math.max(...babyProfiles.map((b) => b.id)) + 1 : 1
    setBabyProfiles([
      ...babyProfiles,
      {
        ...(newBaby as BabyProfile),
        id: newId,
        milestones: [],
      },
    ])
    setNewBaby({
      name: "",
      birthdate: "",
      gender: "",
      image: "/placeholder.svg?height=100&width=100",
      weight: "",
      height: "",
      allergies: [],
    })
    setIsAddDialogOpen(false)
  }

  const handleEditBaby = () => {
    if (editingBaby) {
      setBabyProfiles(babyProfiles.map((baby) => (baby.id === editingBaby.id ? editingBaby : baby)))
      setEditingBaby(null)
    }
  }

  const handleDeleteBaby = (id: number) => {
    setBabyProfiles(babyProfiles.filter((baby) => baby.id !== id))
  }

  const handleNewBabyChange = (field: string, value: string) => {
    setNewBaby({ ...newBaby, [field]: value })
  }

  const handleEditingBabyChange = (field: string, value: string) => {
    if (editingBaby) {
      setEditingBaby({ ...editingBaby, [field]: value })
    }
  }

  const calculateAge = (birthdate: string) => {
    const birth = new Date(birthdate)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - birth.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 30) {
      return `${diffDays} days`
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30)
      return `${months} month${months > 1 ? "s" : ""}`
    } else {
      const years = Math.floor(diffDays / 365)
      const remainingMonths = Math.floor((diffDays % 365) / 30)
      return `${years} year${years > 1 ? "s" : ""}${remainingMonths > 0 ? `, ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}` : ""}`
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, isNewBaby: boolean) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string
        if (isNewBaby) {
          setNewBaby({ ...newBaby, image: imageUrl })
        } else if (editingBaby) {
          setEditingBaby({ ...editingBaby, image: imageUrl })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Baby Profiles</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              <Plus className="h-4 w-4 mr-2" />
              Add Baby
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Baby</DialogTitle>
              <DialogDescription>
                Create a profile for your little one to track their growth and milestones.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-2">
              <div className="flex flex-col items-center mb-4">
                <div className="relative mb-2">
                  <Avatar className="h-24 w-24 border-2 border-purple-100 shadow-md">
                    <AvatarImage src={newBaby.image || "/placeholder.svg"} alt="Baby" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold">
                      {newBaby.name ? newBaby.name.charAt(0) : "B"}
                    </AvatarFallback>
                  </Avatar>

                  <label
                    htmlFor="new-baby-image"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white cursor-pointer shadow-md hover:bg-purple-700 transition-colors"
                  >
                    <Camera className="h-4 w-4" />
                    <input
                      type="file"
                      id="new-baby-image"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, true)}
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="babyName">Baby's Name</Label>
                <Input
                  id="babyName"
                  value={newBaby.name}
                  onChange={(e) => handleNewBabyChange("name", e.target.value)}
                  placeholder="Enter baby's name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="babyBirthdate">Birth Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="babyBirthdate"
                    type="date"
                    value={newBaby.birthdate}
                    onChange={(e) => handleNewBabyChange("birthdate", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup
                  value={newBaby.gender}
                  onValueChange={(value) => handleNewBabyChange("gender", value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="cursor-pointer">
                      Boy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="cursor-pointer">
                      Girl
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="babyWeight">Weight</Label>
                  <div className="relative">
                    <Scale className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="babyWeight"
                      placeholder="e.g., 15 lbs"
                      value={newBaby.weight}
                      onChange={(e) => handleNewBabyChange("weight", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="babyHeight">Height</Label>
                  <div className="relative">
                    <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="babyHeight"
                      placeholder="e.g., 24 inches"
                      value={newBaby.height}
                      onChange={(e) => handleNewBabyChange("height", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                className="rounded-full border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddBaby}
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                disabled={!newBaby.name || !newBaby.birthdate || !newBaby.gender}
              >
                Add Baby
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {babyProfiles.length === 0 ? (
        <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
          <CardContent className="p-6 text-center">
            <Baby className="h-16 w-16 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-gray-900">No Baby Profiles Yet</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">
              Add your little one's profile to track their growth, milestones, and more.
            </p>
            <Button
              onClick={() => setIsAddDialogOpen(true)}
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add First Baby
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {babyProfiles.map((baby) => (
            <Card
              key={baby.id}
              className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-purple-100 shadow-md">
                    <AvatarImage src={baby.image || "/placeholder.svg"} alt={baby.name} />
                    <AvatarFallback
                      className={`text-white text-xl font-bold ${baby.gender === "male" ? "bg-gradient-to-br from-blue-500 to-cyan-500" : baby.gender === "female" ? "bg-gradient-to-br from-pink-500 to-rose-500" : "bg-gradient-to-br from-purple-500 to-violet-500"}`}
                    >
                      {baby.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{baby.name}</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Badge
                            variant="outline"
                            className={`${baby.gender === "male" ? "bg-blue-50 text-blue-700 border-blue-200" : baby.gender === "female" ? "bg-pink-50 text-pink-700 border-pink-200" : "bg-purple-50 text-purple-700 border-purple-200"}`}
                          >
                            {baby.gender === "male" ? "Boy" : baby.gender === "female" ? "Girl" : "Other"}
                          </Badge>
                          <span className="text-xs text-gray-500">{calculateAge(baby.birthdate)}</span>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                              onClick={() => setEditingBaby(baby)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Edit Baby Profile</DialogTitle>
                              <DialogDescription>
                                Update information for {editingBaby?.name}'s profile.
                              </DialogDescription>
                            </DialogHeader>

                            {editingBaby && (
                              <div className="space-y-4 py-2">
                                <div className="flex flex-col items-center mb-4">
                                  <div className="relative mb-2">
                                    <Avatar className="h-24 w-24 border-2 border-purple-100 shadow-md">
                                      <AvatarImage
                                        src={editingBaby.image || "/placeholder.svg"}
                                        alt={editingBaby.name}
                                      />
                                      <AvatarFallback
                                        className={`text-white text-2xl font-bold ${editingBaby.gender === "male" ? "bg-gradient-to-br from-blue-500 to-cyan-500" : editingBaby.gender === "female" ? "bg-gradient-to-br from-pink-500 to-rose-500" : "bg-gradient-to-br from-purple-500 to-violet-500"}`}
                                      >
                                        {editingBaby.name.charAt(0)}
                                      </AvatarFallback>
                                    </Avatar>

                                    <label
                                      htmlFor="edit-baby-image"
                                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white cursor-pointer shadow-md hover:bg-purple-700 transition-colors"
                                    >
                                      <Camera className="h-4 w-4" />
                                      <input
                                        type="file"
                                        id="edit-baby-image"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, false)}
                                      />
                                    </label>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="editBabyName">Baby's Name</Label>
                                  <Input
                                    id="editBabyName"
                                    value={editingBaby.name}
                                    onChange={(e) => handleEditingBabyChange("name", e.target.value)}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="editBabyBirthdate">Birth Date</Label>
                                  <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input
                                      id="editBabyBirthdate"
                                      type="date"
                                      value={editingBaby.birthdate}
                                      onChange={(e) => handleEditingBabyChange("birthdate", e.target.value)}
                                      className="pl-10"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label>Gender</Label>
                                  <RadioGroup
                                    value={editingBaby.gender}
                                    onValueChange={(value) => handleEditingBabyChange("gender", value)}
                                    className="flex space-x-4"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="male" id="edit-male" />
                                      <Label htmlFor="edit-male" className="cursor-pointer">
                                        Boy
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="female" id="edit-female" />
                                      <Label htmlFor="edit-female" className="cursor-pointer">
                                        Girl
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="other" id="edit-other" />
                                      <Label htmlFor="edit-other" className="cursor-pointer">
                                        Other
                                      </Label>
                                    </div>
                                  </RadioGroup>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="editBabyWeight">Weight</Label>
                                    <div className="relative">
                                      <Scale className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                      <Input
                                        id="editBabyWeight"
                                        value={editingBaby.weight}
                                        onChange={(e) => handleEditingBabyChange("weight", e.target.value)}
                                        className="pl-10"
                                      />
                                    </div>
                                  </div>

                                  <div className="space-y-2">
                                    <Label htmlFor="editBabyHeight">Height</Label>
                                    <div className="relative">
                                      <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                      <Input
                                        id="editBabyHeight"
                                        value={editingBaby.height}
                                        onChange={(e) => handleEditingBabyChange("height", e.target.value)}
                                        className="pl-10"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            <DialogFooter>
                              <Button
                                variant="outline"
                                onClick={() => setEditingBaby(null)}
                                className="rounded-full border-gray-200 text-gray-700 hover:bg-gray-50"
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={handleEditBaby}
                                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                              >
                                Save Changes
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Baby Profile</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete {baby.name}'s profile? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="rounded-full">Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteBaby(baby.id)}
                                className="rounded-full bg-red-600 hover:bg-red-700 text-white"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Scale className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500">Weight</p>
                          <p className="text-sm font-medium text-gray-900">{baby.weight}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <Ruler className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500">Height</p>
                          <p className="text-sm font-medium text-gray-900">{baby.height}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">Recent Milestones</h4>
                    <Button
                      variant="ghost"
                      className="h-8 text-xs text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0"
                      onClick={() => setSelectedBabyId(baby.id)}
                    >
                      View All
                    </Button>
                  </div>

                  {baby.milestones && baby.milestones.length > 0 ? (
                    <div className="space-y-2">
                      {baby.milestones.slice(0, 2).map((milestone, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg border border-purple-100"
                        >
                          <Activity className="h-4 w-4 text-purple-500" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{milestone.title}</p>
                            <p className="text-xs text-gray-500">
                              {new Date(milestone.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                      <p className="text-sm text-gray-500">No milestones recorded yet</p>
                      <Button
                        variant="ghost"
                        className="mt-1 h-8 text-xs text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                      >
                        Add Milestone
                      </Button>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">Allergies & Health</h4>
                    <Button
                      variant="ghost"
                      className="h-8 text-xs text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0"
                    >
                      Manage
                    </Button>
                  </div>

                  {baby.allergies && baby.allergies.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {baby.allergies.map((allergy, index) => (
                        <Badge key={index} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          <Heart className="h-3 w-3 mr-1 fill-red-500" />
                          {allergy}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No allergies recorded</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
