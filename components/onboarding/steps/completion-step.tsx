"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface CompletionStepProps {
  onComplete: () => void
  parentName: string
}

export default function CompletionStep({ onComplete, parentName }: CompletionStepProps) {
  const firstName = parentName.split(" ")[0]

  return (
    <Card className="border-none shadow-md bg-white overflow-hidden rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
      <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600" />
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.4,
              }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center"
            >
              <CheckCircle2 className="h-10 w-10 text-purple-600" />
            </motion.div>
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome to ParentSphere, {firstName}!
            </h2>
            <p className="text-gray-500">
              Your account has been created successfully. You're all set to start your parenting journey with us.
            </p>
          </div>

          <div className="space-y-4 w-full">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-3 bg-purple-50 rounded-lg">
                <div className="text-xs font-medium text-purple-700">Track</div>
                <div className="text-2xl font-bold text-purple-700">24/7</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-pink-50 rounded-lg">
                <div className="text-xs font-medium text-pink-700">Learn</div>
                <div className="text-2xl font-bold text-pink-700">100+</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xs font-medium text-blue-700">Connect</div>
                <div className="text-2xl font-bold text-blue-700">10k+</div>
              </div>
            </div>

            <Button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
