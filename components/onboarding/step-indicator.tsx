import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface StepIndicatorProps {
  steps: { id: string; label: string }[]
  currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

      <div className="relative z-10 flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isActive = index === currentStep

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center mb-1 transition-all",
                  isCompleted
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                    : isActive
                      ? "bg-white border-2 border-purple-500 text-purple-600"
                      : "bg-white border-2 border-gray-200 text-gray-400",
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : <span className="text-xs font-medium">{index + 1}</span>}
              </div>
              <span
                className={cn(
                  "text-xs font-medium hidden sm:block",
                  isCompleted || isActive ? "text-purple-600" : "text-gray-400",
                )}
              >
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
