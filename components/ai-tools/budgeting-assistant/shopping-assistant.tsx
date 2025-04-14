"use client"

import { useState } from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ShoppingCart,
  Search,
  Plus,
  MessageSquare,
  Tag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PlusCircle,
  ShoppingBag,
} from "lucide-react"

export default function ShoppingAssistant() {
  const [shoppingQuery, setShoppingQuery] = useState("")
  const [isAiResponding, setIsAiResponding] = useState(false)
  const [shoppingList, setShoppingList] = useState([
    { id: 1, name: "Diapers (Size 2)", price: 45.99, completed: false },
    { id: 2, name: "Baby Formula", price: 38.5, completed: false },
    { id: 3, name: "Baby Wipes", price: 12.99, completed: true },
    { id: 4, name: "Diaper Rash Cream", price: 8.75, completed: false },
    { id: 5, name: "Baby Shampoo", price: 6.99, completed: true },
  ])
  const [aiConversation, setAiConversation] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your shopping assistant. I can help you find the best deals on baby products, compare prices, or suggest budget-friendly alternatives. What can I help you with today?",
    },
  ])

  // Calculate total for shopping list
  const totalPrice = shoppingList.reduce((sum, item) => sum + item.price, 0)
  const completedPrice = shoppingList.filter((item) => item.completed).reduce((sum, item) => sum + item.price, 0)
  const remainingPrice = totalPrice - completedPrice

  const toggleItemCompleted = (id) => {
    setShoppingList(shoppingList.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const handleAddItem = () => {
    // In a real app, this would add the item to the shopping list
    if (!shoppingQuery.trim()) return

    const newItem = {
      id: shoppingList.length + 1,
      name: shoppingQuery,
      price: 0.0, // Would be updated with a real price
      completed: false,
    }

    setShoppingList([...shoppingList, newItem])
    setShoppingQuery("")
  }

  const handleAiQuery = (query) => {
    // Add user message to conversation
    setAiConversation([...aiConversation, { role: "user", content: query }])

    // Set AI to responding state
    setIsAiResponding(true)
    setShoppingQuery("")

    // Simulate AI response after a delay
    setTimeout(() => {
      let response = ""

      if (query.toLowerCase().includes("diaper")) {
        response =
          "Based on your budget and usage patterns, I recommend the Parent's Choice diapers which cost about $0.14 per diaper compared to Pampers at $0.25. For your baby's size and your monthly usage, this could save you around $22 per month."
      } else if (query.toLowerCase().includes("formula")) {
        response =
          "I found that the store brand formula at Target is nutritionally equivalent to Similac Pro-Advance but costs $24.99 instead of $36.99 for the same size. It's also on sale this week with an additional 5% off if you use your Target card."
      } else if (query.toLowerCase().includes("deal") || query.toLowerCase().includes("sale")) {
        response =
          "I found several deals this week: Amazon has 20% off Pampers when you subscribe, Buy Buy Baby has a BOGO 50% off on all Johnson & Johnson products, and Target has baby clothes on clearance starting at $3.99."
      } else {
        response =
          "I'd be happy to help you find the best prices on that. Could you provide a bit more detail about what specific product you're looking for, your preferred brands, and your budget range?"
      }

      setAiConversation([...aiConversation, { role: "user", content: query }, { role: "assistant", content: response }])
      setIsAiResponding(false)
    }, 1500)
  }

  // Suggested questions for the AI
  const suggestedQuestions = [
    "What's the best deal on diapers this week?",
    "Is there a cheaper alternative to Similac formula?",
    "Where can I find sales on baby clothes?",
    "How can I save money on baby essentials?",
  ]

  // Empty state - no shopping data
  const hasShoppingData = shoppingList.length > 0

  return (
    <div className="space-y-4">
      {/* Shopping List */}
      <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Shopping List
            </h2>
          </div>
          {hasShoppingData && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {shoppingList.length} items
            </Badge>
          )}
        </CardHeader>

        <CardContent className="p-4">
          {hasShoppingData ? (
            <>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search items..."
                  className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <Checkbox id="item-1" className="h-5 w-5 border-gray-300 rounded-md" />
                  <div className="flex-1">
                    <label htmlFor="item-1" className="text-gray-900 font-medium cursor-pointer">
                      Baby formula
                    </label>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                        Baby
                      </Badge>
                      <span className="text-xs text-gray-500">$24.99</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <Checkbox id="item-2" className="h-5 w-5 border-gray-300 rounded-md" />
                  <div className="flex-1">
                    <label htmlFor="item-2" className="text-gray-900 font-medium cursor-pointer">
                      Diapers (size 2)
                    </label>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                        Baby
                      </Badge>
                      <span className="text-xs text-gray-500">$19.99</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <Checkbox id="item-3" className="h-5 w-5 border-gray-300 rounded-md" />
                  <div className="flex-1">
                    <label htmlFor="item-3" className="text-gray-900 font-medium cursor-pointer">
                      Baby wipes
                    </label>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                        Baby
                      </Badge>
                      <span className="text-xs text-gray-500">$5.99</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                className="w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={handleAddItem}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="bg-green-50 p-3 rounded-full mb-3">
                <ShoppingBag className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Your shopping list is empty</h3>
              <p className="text-sm text-gray-500 mb-4 max-w-xs">
                Add items to your shopping list to track expenses and get AI-powered shopping recommendations
              </p>
              <Button
                className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={handleAddItem}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add First Item
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Shopping Assistant */}
      <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-base font-bold text-gray-900">AI Shopping Assistant</h2>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100 shadow-inner">
            <div className="flex flex-col items-center justify-center text-center">
              <MessageSquare className="h-8 w-8 text-green-500 mb-2" />
              <h3 className="font-medium text-gray-900 mb-1">Ask me anything about shopping</h3>
              <p className="text-sm text-gray-500 mb-3">
                Get personalized recommendations, price comparisons, and budget-friendly alternatives
              </p>
              <div className="relative w-full">
                <Input
                  placeholder="Type your question here..."
                  value={shoppingQuery}
                  onChange={(e) => setShoppingQuery(e.target.value)}
                  className="pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && shoppingQuery.trim() && !isAiResponding) {
                      handleAiQuery(shoppingQuery)
                    }
                  }}
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-sm"
                  onClick={() => {
                    if (shoppingQuery.trim() && !isAiResponding) {
                      handleAiQuery(shoppingQuery)
                    }
                  }}
                  disabled={!shoppingQuery.trim() || isAiResponding}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <h3 className="text-sm font-medium text-gray-700">Suggested Questions</h3>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="outline"
                className="justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => {
                  if (!isAiResponding) {
                    handleAiQuery("Where can I find the best deals on diapers?")
                  }
                }}
                disabled={isAiResponding}
              >
                Where can I find the best deals on diapers?
              </Button>
              <Button
                variant="outline"
                className="justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => {
                  if (!isAiResponding) {
                    handleAiQuery("What are budget-friendly alternatives to premium baby formula?")
                  }
                }}
                disabled={isAiResponding}
              >
                What are budget-friendly alternatives to premium baby formula?
              </Button>
              <Button
                variant="outline"
                className="justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => {
                  if (!isAiResponding) {
                    handleAiQuery("How can I save money on baby clothes?")
                  }
                }}
                disabled={isAiResponding}
              >
                How can I save money on baby clothes?
              </Button>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-3 border border-green-100 shadow-sm">
            <div className="flex items-start gap-2">
              <div className="bg-green-100 rounded-full p-1 mt-0.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Deal Finder</p>
                <p className="text-sm text-gray-600 mt-1">
                  Ask the AI to find the best deals on items in your shopping list
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
