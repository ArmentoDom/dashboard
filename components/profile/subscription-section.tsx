"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Check, X, Sparkles, Brain, Calendar, BarChart3, Clock, Zap, Gift } from "lucide-react"

export default function SubscriptionSection() {
  // Mock data for subscription status
  const subscriptionData = {
    status: "premium", // "free", "premium", "trial"
    expiresAt: "2024-12-31",
    trialEndsAt: null,
    features: {
      aiInsights: true,
      advancedTracking: true,
      customReports: true,
      prioritySupport: true,
      adFree: true,
      dataExport: true,
      maxBabyProfiles: 5,
      communityAccess: true,
    },
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const daysRemaining = (dateString: string) => {
    const expiryDate = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(expiryDate.getTime() - today.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        { name: "Basic baby tracking", included: true },
        { name: "1 baby profile", included: true },
        { name: "Community access (limited)", included: true },
        { name: "Basic milestone tracking", included: true },
        { name: "Ad-supported experience", included: true },
        { name: "AI insights", included: false },
        { name: "Advanced tracking tools", included: false },
        { name: "Custom reports", included: false },
        { name: "Priority support", included: false },
      ],
      current: subscriptionData.status === "free",
      buttonText: subscriptionData.status === "free" ? "Current Plan" : "Downgrade",
      buttonVariant: subscriptionData.status === "free" ? "outline" : "default",
      buttonDisabled: subscriptionData.status === "free",
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "monthly",
      features: [
        { name: "Everything in Free", included: true },
        { name: "Unlimited baby profiles", included: true },
        { name: "Ad-free experience", included: true },
        { name: "Advanced AI insights", included: true },
        { name: "Detailed tracking tools", included: true },
        { name: "Custom reports & analytics", included: true },
        { name: "Data export", included: true },
        { name: "Priority support", included: true },
        { name: "Early access to new features", included: true },
      ],
      current: subscriptionData.status === "premium",
      buttonText: subscriptionData.status === "premium" ? "Current Plan" : "Upgrade",
      buttonVariant: subscriptionData.status === "premium" ? "outline" : "default",
      buttonDisabled: subscriptionData.status === "premium",
      popular: true,
    },
  ]

  return (
    <div className="space-y-4">
      {/* Current Subscription */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600" />
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600">
                <Crown className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-gray-900">Your Subscription</h3>
            </div>

            {subscriptionData.status === "premium" && (
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none">Premium</Badge>
            )}

            {subscriptionData.status === "trial" && (
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-none">Trial</Badge>
            )}

            {subscriptionData.status === "free" && (
              <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-200">
                Free
              </Badge>
            )}
          </div>

          {subscriptionData.status === "premium" && (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Plan</h4>
                    <p className="text-sm text-gray-600">Renews on {formatDate(subscriptionData.expiresAt)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-purple-700">
                      {daysRemaining(subscriptionData.expiresAt)} days remaining
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-purple-100 flex justify-between">
                  <Button
                    variant="outline"
                    className="rounded-full border-purple-200 text-purple-700 hover:bg-purple-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Manage Subscription
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-purple-200 text-purple-700 hover:bg-purple-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    View Invoices
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Brain className="h-4 w-4 text-purple-500" />
                    <h5 className="font-medium text-gray-900">AI Insights</h5>
                  </div>
                  <p className="text-xs text-gray-500">Advanced pattern recognition and personalized recommendations</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    <h5 className="font-medium text-gray-900">Unlimited Profiles</h5>
                  </div>
                  <p className="text-xs text-gray-500">Track multiple children with detailed profiles</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart3 className="h-4 w-4 text-purple-500" />
                    <h5 className="font-medium text-gray-900">Advanced Analytics</h5>
                  </div>
                  <p className="text-xs text-gray-500">Detailed reports and growth tracking</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <h5 className="font-medium text-gray-900">Priority Support</h5>
                  </div>
                  <p className="text-xs text-gray-500">Get help faster with dedicated support</p>
                </div>
              </div>
            </div>
          )}

          {subscriptionData.status === "free" && (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900">Free Plan</h4>
                <p className="text-sm text-gray-600 mt-1">You're currently on the free plan with limited features.</p>

                <div className="mt-3 pt-3 border-t border-gray-200">
                  <Button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Upgrade to Premium
                  </Button>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="h-4 w-4 text-amber-500" />
                  <h5 className="font-medium text-gray-900">Unlock Premium Features</h5>
                </div>
                <p className="text-xs text-gray-700">
                  Get unlimited baby profiles, AI insights, and advanced tracking tools.
                </p>
              </div>
            </div>
          )}

          {subscriptionData.status === "trial" && (
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Trial</h4>
                    <p className="text-sm text-gray-600">Ends on {formatDate(subscriptionData.trialEndsAt || "")}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-700">
                      {daysRemaining(subscriptionData.trialEndsAt || "")} days remaining
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-blue-100">
                  <Button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                    <Crown className="h-4 w-4 mr-2" />
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Referral Program */}
      <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
              <Gift className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Refer a Friend</h3>
              <p className="text-sm text-gray-500">Get 1 month free when friends subscribe</p>
            </div>
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <h3 className="font-bold text-gray-900 mt-6 mb-3">Available Plans</h3>

      <div className="space-y-4">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`border-none shadow-md overflow-hidden rounded-2xl ${
              plan.popular
                ? "shadow-[0_4px_20px_rgba(124,58,237,0.15)] bg-gradient-to-r from-white to-purple-50"
                : "shadow-[0_4px_14px_rgba(0,0,0,0.08)] bg-white"
            }`}
          >
            {plan.popular && <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />}

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{plan.name}</h4>
                  <div className="flex items-end gap-1">
                    <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-500">/{plan.period}</span>
                  </div>
                </div>

                {plan.popular && (
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none">
                    Most Popular
                  </Badge>
                )}
              </div>

              <div className="space-y-2 mb-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-gray-400" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-500"}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.buttonVariant as "outline" | "default"}
                className={`w-full rounded-full ${
                  plan.buttonVariant === "outline"
                    ? "border-purple-200 text-purple-700 hover:bg-purple-50"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                } shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                disabled={plan.buttonDisabled}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
