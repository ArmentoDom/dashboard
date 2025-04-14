"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Calendar,
  TrendingUp,
  AlertCircle,
  Plus,
  Sparkles,
  PlusCircle,
} from "lucide-react"

export default function BudgetOverview() {
  // Empty state - no budget data
  const hasBudgetData = false

  return (
    <div className="space-y-4">
      {/* Monthly Budget Summary */}
      <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Monthly Budget
            </h2>
          </div>
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            {hasBudgetData ? "April 2023" : "No Budget Set"}
          </Badge>
        </CardHeader>

        <CardContent className="p-4">
          {hasBudgetData ? (
            <>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm text-gray-500">Remaining</p>
                  <p className="text-2xl font-bold text-gray-900">$1,245.00</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Total Budget</p>
                  <p className="text-2xl font-bold text-gray-900">$3,000.00</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">58% spent</span>
                  <span className="text-gray-500">42% remaining</span>
                </div>
                <Progress
                  value={58}
                  className="h-2 bg-gray-100"
                  indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-xl p-3 border border-green-100 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-medium text-gray-700">Income</p>
                    <div className="bg-green-100 rounded-full p-1">
                      <ArrowUpRight className="h-3 w-3 text-green-600" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">$4,250.00</p>
                </div>

                <div className="bg-red-50 rounded-xl p-3 border border-red-100 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-medium text-gray-700">Expenses</p>
                    <div className="bg-red-100 rounded-full p-1">
                      <ArrowDownRight className="h-3 w-3 text-red-600" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">$1,755.00</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="bg-green-50 p-3 rounded-full mb-3">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No Budget Set</h3>
              <p className="text-sm text-gray-500 mb-4 max-w-xs">
                Create your first budget to start tracking your finances and get personalized insights
              </p>
              <Button className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Budget
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      {hasBudgetData ? (
        <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-1.5 rounded-lg">
                <PieChart className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-base font-bold text-gray-900">Category Breakdown</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs text-green-600 hover:text-green-700 hover:bg-green-50 p-0"
            >
              See All
            </Button>
          </CardHeader>

          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 rounded-full p-1.5">
                      <span className="text-blue-600 text-xs font-medium">🏠</span>
                    </div>
                    <p className="font-medium text-gray-900">Housing</p>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    $1,200.00
                  </Badge>
                </div>
                <Progress value={80} className="h-1.5 bg-gray-100" indicatorClassName="bg-blue-500" />
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">$1,200 of $1,500</span>
                  <span className="text-xs font-medium text-blue-600">80%</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-100 rounded-full p-1.5">
                      <span className="text-purple-600 text-xs font-medium">👶</span>
                    </div>
                    <p className="font-medium text-gray-900">Baby Expenses</p>
                  </div>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    $320.00
                  </Badge>
                </div>
                <Progress value={64} className="h-1.5 bg-gray-100" indicatorClassName="bg-purple-500" />
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">$320 of $500</span>
                  <span className="text-xs font-medium text-purple-600">64%</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-amber-100 rounded-full p-1.5">
                      <span className="text-amber-600 text-xs font-medium">🍔</span>
                    </div>
                    <p className="font-medium text-gray-900">Groceries</p>
                  </div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                    $235.00
                  </Badge>
                </div>
                <Progress value={47} className="h-1.5 bg-gray-100" indicatorClassName="bg-amber-500" />
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">$235 of $500</span>
                  <span className="text-xs font-medium text-amber-600">47%</span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full mt-3 rounded-lg border-green-200 text-green-700 hover:bg-green-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </CardContent>
        </Card>
      ) : null}

      {/* AI Insights */}
      {hasBudgetData ? (
        <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                AI Budget Insights
              </h2>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-3 border border-green-100 shadow-sm">
                <div className="flex items-start gap-2">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Savings Opportunity</p>
                    <p className="text-sm text-gray-600 mt-1">
                      You've spent 30% less on dining out this month compared to last month. Great job!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 shadow-sm">
                <div className="flex items-start gap-2">
                  <div className="bg-amber-100 rounded-full p-1 mt-0.5">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Budget Alert</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Your baby expenses category is at 64% with 2 weeks left in the month. Consider adjusting your
                      budget.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 shadow-sm">
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Upcoming Bill</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Your daycare payment of $450 is due in 3 days. You have sufficient funds allocated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}
