"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import ParentInfoStep from "./steps/parent-info-step"
import BabyInfoStep from "./steps/baby-info-step"
import GoalsStep from "./steps/goals-step"
import CompletionStep from "./steps/completion-step"
import StepIndicator from "./step-indicator"

const steps = [
  { id: "parent-info", label: "Parent Info" },
  { id: "baby-info", label: "Baby Info" },
  { id: "goals", label: "Goals" },
  { id: "completion", label: "Complete" },
]

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    parent: {
      name: "",
      email: "",
      password: "",
      experienceLevel: "",
    },
    baby: {
      name: "",
      birthdate: "",
      weight: "",
      height: "",
      gender: "",
    },
    goals: [] as string[],
  })
  const router = useRouter()

  const updateFormData = (section: keyof typeof formData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data,
      },
    }))
  }

  const updateGoals = (goals: string[]) => {
    setFormData((prev) => ({
      ...prev,
      goals,
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleComplete = () => {
    // In a real app, you would save the data to a database here
    console.log("Form data submitted:", formData)
    router.push("/dashboard")
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ParentInfoStep
            data={formData.parent}
            updateData={(data) => updateFormData("parent", data)}
            onNext={nextStep}
          />
        )
      case 1:
        return (
          <BabyInfoStep
            data={formData.baby}
            updateData={(data) => updateFormData("baby", data)}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case 2:
        return (
          <GoalsStep selectedGoals={formData.goals} updateGoals={updateGoals} onNext={nextStep} onBack={prevStep} />
        )
      case 3:
        return <CompletionStep onComplete={handleComplete} parentName={formData.parent.name} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Subtle patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-[0.03]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #6b46c1 2px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-[30%] right-[10%] w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-[40%] left-[15%] w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 opacity-20 animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-[60%] right-[20%] w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-[70%] left-[10%] w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-20 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Header */}
      <header className="py-4 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100 shadow-sm">
        <div className="container max-w-md mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-2 shadow-md">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ParentSphere
            </h1>
          </div>
        </div>
      </header>

      {/* Step indicator */}
      <div className="container max-w-md mx-auto px-4 mt-4">
        <StepIndicator steps={steps} currentStep={currentStep} />
      </div>

      {/* Content */}
      <div className="flex-1 container max-w-md mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
