"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageIcon, Upload, Camera, Trash2, Sparkles, DollarSign, Leaf, Palette } from "lucide-react"

interface DesignFormProps {
  onGenerateDesign: () => void
}

export default function DesignForm({ onGenerateDesign }: DesignFormProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [description, setDescription] = useState("")
  const [colorScheme, setColorScheme] = useState("")
  const [designStyle, setDesignStyle] = useState("")
  const [budgetFriendly, setBudgetFriendly] = useState(true)
  const [sustainable, setSustainable] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = () => {
    // In a real app, this would open the device camera
    // For now, we'll just trigger the file input
    fileInputRef.current?.click()
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onGenerateDesign()
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Room Upload Section */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-violet-500" />
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
              <ImageIcon className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Room Upload</h3>
          </div>

          <div className="space-y-4">
            {uploadedImage ? (
              <div className="relative">
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt="Uploaded room"
                  className="w-full h-48 object-cover rounded-lg border border-purple-200"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full"
                  onClick={handleRemoveImage}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-purple-200 rounded-lg p-6 text-center bg-purple-50">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-purple-400" />
                  <h4 className="font-medium text-gray-900">Upload Room Photo</h4>
                  <p className="text-xs text-gray-500 max-w-xs">
                    Upload a photo of the room you want to transform into a nursery
                  </p>

                  <div className="flex gap-2 mt-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full shadow-sm hover:shadow-md"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full shadow-sm hover:shadow-md"
                      onClick={handleCameraCapture}
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      Camera
                    </Button>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            )}

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <h4 className="text-sm font-medium text-blue-700 mb-1">Tips for best results:</h4>
              <ul className="text-xs text-blue-600 space-y-1 list-disc pl-4">
                <li>Take photos in good lighting</li>
                <li>Capture the entire room if possible</li>
                <li>Clear clutter for more accurate designs</li>
                <li>Include windows and doors in your photo</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Description Section */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-violet-500" />
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
              <Palette className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-gray-900">Design Description</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Describe your ideal nursery</Label>
              <Textarea
                id="description"
                placeholder="Describe the nursery you envision (e.g., 'A calming nursery with a nature theme for my baby boy')"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="colorScheme">Color Scheme</Label>
              <Select onValueChange={setColorScheme} defaultValue={colorScheme}>
                <SelectTrigger id="colorScheme" className="w-full">
                  <SelectValue placeholder="Select a color scheme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="neutral">Neutral & Calming</SelectItem>
                  <SelectItem value="pastel">Soft Pastels</SelectItem>
                  <SelectItem value="bright">Bright & Playful</SelectItem>
                  <SelectItem value="monochrome">Monochrome</SelectItem>
                  <SelectItem value="earthy">Natural & Earthy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="designStyle">Design Style</Label>
              <Select onValueChange={setDesignStyle} defaultValue={designStyle}>
                <SelectTrigger id="designStyle" className="w-full">
                  <SelectValue placeholder="Select a design style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern & Minimalist</SelectItem>
                  <SelectItem value="traditional">Traditional</SelectItem>
                  <SelectItem value="scandinavian">Scandinavian</SelectItem>
                  <SelectItem value="bohemian">Bohemian</SelectItem>
                  <SelectItem value="whimsical">Whimsical & Playful</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
                  <DollarSign className="h-4 w-4" />
                </div>
                <Label htmlFor="budgetFriendly" className="text-sm font-medium">
                  Budget-Friendly Options
                </Label>
              </div>
              <Switch id="budgetFriendly" checked={budgetFriendly} onCheckedChange={setBudgetFriendly} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
                  <Leaf className="h-4 w-4" />
                </div>
                <Label htmlFor="sustainable" className="text-sm font-medium">
                  Sustainable Materials
                </Label>
              </div>
              <Switch id="sustainable" checked={sustainable} onCheckedChange={setSustainable} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generate Button */}
      <Button
        type="submit"
        className="w-full py-6 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl shadow-purple-200/50 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span className="text-base font-semibold">Generating Design...</span>
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5" />
            <span className="text-base font-semibold">Generate AI Design</span>
          </>
        )}
      </Button>
    </form>
  )
}
