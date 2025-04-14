"use client"

import { useState } from "react"
import { Sparkles, ChevronLeft, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import BudgetOverview from "./budget-overview"
import ExpensesTracker from "./expenses-tracker"
import SavingsGoals from "./savings-goals"
import ShoppingAssistant from "./shopping-assistant"

export default function BudgetingAssistantPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container max-w-md mx-auto px-4">
      {/* Header */}
      <header className="py-2.5 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)]">
        <div className="container max-w-md mx-auto px-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-1.5">
            <Link href="/ai-tools">
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full mr-1">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="h-6 w-6 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center shadow-sm">
              <Calculator className="h-3 w-3 text-white" />
            </div>
            <h1 className="text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AI Budgeting Assistant
            </h1>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-green-50 flex items-center justify-center">
              <Sparkles className="h-3 w-3 text-green-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-4 pb-20">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] rounded-lg p-1 mb-4 relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-white/80 before:to-transparent before:z-0">
            <TabsTrigger
              value="overview"
              className="rounded-md relative z-10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-[0_4px_10px_-2px_rgba(0,120,0,0.2)] data-[state=active]:before:absolute data-[state=active]:before:inset-0 data-[state=active]:before:rounded-md data-[state=active]:before:bg-gradient-to-b data-[state=active]:before:from-white/20 data-[state=active]:before:to-transparent data-[state=active]:before:z-0"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="expenses"
              className="rounded-md relative z-10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-[0_4px_10px_-2px_rgba(0,120,0,0.2)] data-[state=active]:before:absolute data-[state=active]:before:inset-0 data-[state=active]:before:rounded-md data-[state=active]:before:bg-gradient-to-b data-[state=active]:before:from-white/20 data-[state=active]:before:to-transparent data-[state=active]:before:z-0"
            >
              Expenses
            </TabsTrigger>
            <TabsTrigger
              value="savings"
              className="rounded-md relative z-10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-[0_4px_10px_-2px_rgba(0,120,0,0.2)] data-[state=active]:before:absolute data-[state=active]:before:inset-0 data-[state=active]:before:rounded-md data-[state=active]:before:bg-gradient-to-b data-[state=active]:before:from-white/20 data-[state=active]:before:to-transparent data-[state=active]:before:z-0"
            >
              Savings
            </TabsTrigger>
            <TabsTrigger
              value="shopping"
              className="rounded-md relative z-10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-[0_4px_10px_-2px_rgba(0,120,0,0.2)] data-[state=active]:before:absolute data-[state=active]:before:inset-0 data-[state=active]:before:rounded-md data-[state=active]:before:bg-gradient-to-b data-[state=active]:before:from-white/20 data-[state=active]:before:to-transparent data-[state=active]:before:z-0"
            >
              Shopping
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <BudgetOverview />
          </TabsContent>

          <TabsContent value="expenses" className="mt-0">
            <ExpensesTracker />
          </TabsContent>

          <TabsContent value="savings" className="mt-0">
            <SavingsGoals />
          </TabsContent>

          <TabsContent value="shopping" className="mt-0">
            <ShoppingAssistant />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
