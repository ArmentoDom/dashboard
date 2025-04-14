"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Receipt,
  Search,
  Filter,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  DollarSign,
  PlusCircle,
  ReceiptText,
} from "lucide-react"

export default function ExpensesTracker() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("this-month")
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)
  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  })

  // Mock data for expenses
  const expenses = [
    {
      id: 1,
      name: "Baby Formula",
      amount: 45.99,
      date: "Apr 12, 2025",
      category: "Baby Essentials",
      categoryColor: "bg-purple-500",
    },
    {
      id: 2,
      name: "Pediatrician Visit",
      amount: 30.0,
      date: "Apr 11, 2025",
      category: "Healthcare",
      categoryColor: "bg-green-500",
    },
    {
      id: 3,
      name: "Diapers (Box)",
      amount: 39.99,
      date: "Apr 10, 2025",
      category: "Baby Essentials",
      categoryColor: "bg-purple-500",
    },
    {
      id: 4,
      name: "Baby Clothes",
      amount: 65.5,
      date: "Apr 8, 2025",
      category: "Baby Essentials",
      categoryColor: "bg-purple-500",
    },
    {
      id: 5,
      name: "Grocery Shopping",
      amount: 120.75,
      date: "Apr 7, 2025",
      category: "Groceries",
      categoryColor: "bg-blue-500",
    },
    {
      id: 6,
      name: "Daycare Payment",
      amount: 250.0,
      date: "Apr 5, 2025",
      category: "Childcare",
      categoryColor: "bg-amber-500",
    },
    {
      id: 7,
      name: "Baby Toys",
      amount: 35.25,
      date: "Apr 3, 2025",
      category: "Baby Essentials",
      categoryColor: "bg-purple-500",
    },
    {
      id: 8,
      name: "Baby Monitor",
      amount: 89.99,
      date: "Apr 1, 2025",
      category: "Baby Essentials",
      categoryColor: "bg-purple-500",
    },
  ]

  // Filter expenses based on search query and filters
  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || expense.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Calculate total for filtered expenses
  const totalAmount = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0)

  const handleAddExpense = () => {
    // In a real app, this would add the expense to the database
    setIsAddExpenseOpen(false)
    setNewExpense({
      name: "",
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    })
  }

  // Empty state - no expense data
  const hasExpenseData = false

  return (
    <div className="space-y-4">
      {/* Expense Summary */}
      <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-md">
              <Receipt className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Expense Summary
            </h2>
          </div>
          {hasExpenseData && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              April 2023
            </Badge>
          )}
        </CardHeader>

        <CardContent className="p-4">
          {hasExpenseData ? (
            <>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-red-50 rounded-xl p-3 border border-red-100 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-medium text-gray-700">Total Expenses</p>
                    <div className="bg-red-100 rounded-full p-1">
                      <ArrowDownRight className="h-3 w-3 text-red-600" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">$1,755.00</p>
                  <p className="text-xs text-gray-500 mt-1">+$245 from last month</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-3 border border-blue-100 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-sm font-medium text-gray-700">Baby Expenses</p>
                    <div className="bg-blue-100 rounded-full p-1">
                      <Calendar className="h-3 w-3 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">$320.00</p>
                  <p className="text-xs text-gray-500 mt-1">18% of total expenses</p>
                </div>
              </div>

              <div className="relative mb-4">
                <div className="flex gap-2 mb-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search expenses..."
                      className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-purple-600 text-xs font-medium">👶</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Baby Formula</h3>
                    <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$24.99</p>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs mt-1">
                      Baby
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-blue-600 text-xs font-medium">🏠</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Rent Payment</h3>
                    <p className="text-xs text-gray-500">Apr 1, 9:00 AM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$1,200.00</p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs mt-1">
                      Housing
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                    <span className="text-amber-600 text-xs font-medium">🍔</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Grocery Shopping</h3>
                    <p className="text-xs text-gray-500">Apr 3, 6:15 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$85.43</p>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs mt-1">
                      Groceries
                    </Badge>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <Plus className="h-4 w-4 mr-2" />
                Add Expense
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="bg-green-50 p-3 rounded-full mb-3">
                <ReceiptText className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No Expenses Recorded</h3>
              <p className="text-sm text-gray-500 mb-4 max-w-xs">
                Start tracking your expenses to get insights into your spending habits
              </p>
              <Button className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add First Expense
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      {hasExpenseData && (
        <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1.5 rounded-lg">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <h2 className="text-base font-bold text-gray-900">Quick Actions</h2>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="flex-col h-auto py-4 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Receipt className="h-6 w-6 mb-2 text-green-600" />
                <span className="text-sm">Scan Receipt</span>
              </Button>
              <Button
                variant="outline"
                className="flex-col h-auto py-4 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="h-6 w-6 mb-2 text-green-600" />
                <span className="text-sm">Recurring</span>
              </Button>
              <Button
                variant="outline"
                className="flex-col h-auto py-4 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Filter className="h-6 w-6 mb-2 text-green-600" />
                <span className="text-sm">Categories</span>
              </Button>
              <Button
                variant="outline"
                className="flex-col h-auto py-4 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <ArrowUpRight className="h-6 w-6 mb-2 text-green-600" />
                <span className="text-sm">Export</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
