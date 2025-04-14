"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Edit, Share2, RefreshCw, ExternalLink, ShoppingBag } from "lucide-react"

interface DesignPreviewProps {
  onEditDesign: () => void
}

export default function DesignPreview({ onEditDesign }: DesignPreviewProps) {
  const [isRegenerating, setIsRegenerating] = useState(false)

  const handleRegenerate = () => {
    setIsRegenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsRegenerating(false)
    }, 2000)
  }

  // Mock data for the generated design
  const designData = {
    imageUrl: "/placeholder.svg?height=400&width=600",
    title: "Serene Nature-Inspired Nursery",
    description:
      "A calming space with natural elements, soft textures, and a neutral color palette with gentle green accents.",
    colorPalette: [
      { name: "Sage Green", hex: "#B2BDA0" },
      { name: "Warm White", hex: "#F8F4E9" },
      { name: "Soft Beige", hex: "#E8DCC9" },
      { name: "Muted Terracotta", hex: "#C8A99B" },
    ],
    designStyle: "Scandinavian with natural elements",
    designNotes: [
      "Wall color is a warm white to create a bright, airy feel",
      "Natural wood furniture adds warmth and texture",
      "Botanical prints and leaf motifs create a nature theme",
      "Soft textiles in muted colors for comfort and coziness",
    ],
    products: [
      {
        id: 1,
        name: "Convertible Wooden Crib",
        price: "$399",
        imageUrl: "/placeholder.svg?height=100&width=100",
        rating: 4.8,
      },
      {
        id: 2,
        name: "Organic Cotton Leaf Pattern Bedding",
        price: "$89",
        imageUrl: "/placeholder.svg?height=100&width=100",
        rating: 4.6,
      },
      {
        id: 3,
        name: "Rattan Storage Basket Set",
        price: "$65",
        imageUrl: "/placeholder.svg?height=100&width=100",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Wooden Wall Shelf with Hooks",
        price: "$49",
        imageUrl: "/placeholder.svg?height=100&width=100",
        rating: 4.5,
      },
    ],
  }

  return (
    <div className="space-y-4">
      {/* Design Preview */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-violet-500" />
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={designData.imageUrl || "/placeholder.svg"}
              alt={designData.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h2 className="text-white font-bold text-xl">{designData.title}</h2>
              <p className="text-white/90 text-sm">{designData.description}</p>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Color Palette */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Color Palette</h3>
              <div className="flex gap-2">
                {designData.colorPalette.map((color, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className="h-10 w-10 rounded-full border border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <span className="text-xs text-gray-600 mt-1">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Style */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Design Style</h3>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                {designData.designStyle}
              </Badge>
            </div>

            {/* Design Notes */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Design Notes</h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-4">
                {designData.designNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleRegenerate}
                variant="outline"
                className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                disabled={isRegenerating}
              >
                {isRegenerating ? (
                  <div className="h-4 w-4 border-2 border-purple-700 border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <RefreshCw className="h-4 w-4 mr-2" />
                )}
                Regenerate
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <Download className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shopping Recommendations */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-1.5 bg-gradient-to-r from-purple-500 to-violet-500" />
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-purple-600" />
              <h3 className="font-bold text-gray-900">Shopping Recommendations</h3>
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Budget-Friendly
            </Badge>
          </div>

          <div className="space-y-3">
            {designData.products.map((product) => (
              <div
                key={product.id}
                className="flex gap-3 p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
              >
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-900">{product.name}</h4>
                    <span className="font-semibold text-purple-700">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{product.rating}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-purple-700 hover:text-purple-800 hover:bg-purple-50 p-0 h-auto mt-1"
                  >
                    View Details <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            View All Recommended Products
          </Button>
        </CardContent>
      </Card>

      {/* Edit Button */}
      <Button
        onClick={onEditDesign}
        variant="outline"
        className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
      >
        <Edit className="h-4 w-4 mr-2" />
        Edit Design Preferences
      </Button>
    </div>
  )
}
