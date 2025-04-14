"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PiggyBank, Plus, GraduationCap, Home, Gift, Sparkles, Target, ArrowRight, PlusCircle } from "lucide-react"

export default function SavingsGoals() {
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false)
  const [newGoal, setNewGoal] = useState({
    name: "",
    targetAmount: "",
    currentAmount: "",
    targetDate: "",
    category: "",
    notes: "",
  })

  // Mock data for savings goals
  const savingsGoals = [
    {
      id: 1,
      name: "College Fund",
      targetAmount: 25000,
      currentAmount: 5250,
      progress: 21,
      targetDate: "Jan 2040",
      category: "Education",
      icon: <GraduationCap className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Emergency Fund",
      targetAmount: 10000,
      currentAmount: 6500,
      progress: 65,
      targetDate: "Dec 2025",
      category: "Emergency",
      icon: <Home className="h-5 w-5" />,
      color: "bg-amber-500",
    },
    {
      id: 3,
      name: "Birthday Gift",
      targetAmount: 200,
      currentAmount: 150,
      progress: 75,
      targetDate: "May 2025",
      category: "Gifts",
      icon: <Gift className="h-5 w-5" />,
      color: "bg-pink-500",
    },
  ]

  // Mock data for savings recommendations
  const savingsRecommendations = [
    {
      id: 1,
      title: "529 College Savings Plan",
      description: "Tax-advantaged savings plan for education expenses.",
      type: "education",
    },
    {
      id: 2,
      title: "Automatic Transfers",
      description: "Set up weekly $25 transfers to your emergency fund.",
      type: "strategy",
    },
    {
      id: 3,
      title: "Round-Up Savings",
      description: "Round up purchases to the nearest dollar and save the difference.",
      type: "strategy",
    },
  ]

  const handleAddGoal = () => {
    // In a real app, this would add the goal to the database
    setIsAddGoalOpen(false)
    setNewGoal({
      name: "",
      targetAmount: "",
      currentAmount: "",
      targetDate: "",
      category: "",
      notes: "",
    })
  }

  // Empty state - no savings goals
  const hasSavingsGoals = false

  return (
    <div className="space-y-4">
      {/* Savings Goals */}
      <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
              <Target className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Savings Goals
            </h2>
          </div>
          {hasSavingsGoals && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              3 active goals
            </Badge>
          )}
        </CardHeader>

        <CardContent className="p-4">
          {hasSavingsGoals ? (
            <>
              <div className="space-y-4 mb-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 rounded-full p-1.5">
                        <PiggyBank className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900">College Fund</h3>
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Long-term
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">$5,000 saved</span>
                      <span className="text-sm font-medium text-gray-900">$50,000 goal</span>
                    </div>
                    <Progress value={10} className="h-2 bg-gray-100" indicatorClassName="bg-blue-500" />
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">10% complete</span>
                      <span className="text-gray-500">Target: 18 years</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 rounded-full p-1.5">
                        <span className="text-purple-600 text-xs font-medium">👶</span>
                      </div>
                      <h3 className="font-bold text-gray-900">Baby Gear</h3>
                    </div>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      Short-term
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">$350 saved</span>
                      <span className="text-sm font-medium text-gray-900">$500 goal</span>
                    </div>
                    <Progress value={70} className="h-2 bg-gray-100" indicatorClassName="bg-purple-500" />
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">70% complete</span>
                      <span className="text-gray-500">Target: 2 months</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-amber-100 rounded-full p-1.5">
                        <span className="text-amber-600 text-xs font-medium">🏠</span>
                      </div>
                      <h3 className="font-bold text-gray-900">Emergency Fund</h3>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      Medium-term
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">$2,500 saved</span>
                      <span className="text-sm font-medium text-gray-900">$10,000 goal</span>
                    </div>
                    <Progress value={25} className="h-2 bg-gray-100" indicatorClassName="bg-amber-500" />
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">25% complete</span>
                      <span className="text-gray-500">Target: 1 year</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <Plus className="h-4 w-4 mr-2" />
                Add Goal
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="bg-green-50 p-3 rounded-full mb-3">
                <Target className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No Savings Goals Yet</h3>
              <p className="text-sm text-gray-500 mb-4 max-w-xs">
                Create savings goals to track your progress and achieve your financial targets
              </p>
              <Button className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create First Goal
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Recommendations */}
      {hasSavingsGoals && (
        <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-base font-bold text-gray-900">AI Recommendations</h2>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-3 border border-green-100 shadow-sm">
                <div className="flex items-start gap-2">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <PiggyBank className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Optimize Your Savings</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Based on your income, you could increase your monthly college fund contribution by $50 without
                      impacting your budget.
                    </p>
                    <Button variant="link" className="h-auto p-0 text-green-600 hover:text-green-700 text-sm mt-1">
                      Learn more <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 shadow-sm">
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                    <Target className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Suggested New Goal</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Consider creating a "Family Vacation" savings goal. Many families find that planning for leisure
                      activities reduces financial stress.
                    </p>
                    <Button variant="link" className="h-auto p-0 text-blue-600 hover:text-blue-700 text-sm mt-1">
                      Create goal <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Educational Resources */}
      <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-1.5 rounded-lg shadow-md">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-base font-bold text-gray-900">Educational Resources</h2>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="mr-auto">How to build an emergency fund</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="mr-auto">Saving for your child's education</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="mr-auto">Balancing savings with baby expenses</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
