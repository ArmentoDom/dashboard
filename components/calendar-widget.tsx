"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function CalendarWidget() {
  const [currentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Generate days for the current month view
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const month = selectedDate.getMonth()
  const year = selectedDate.getFullYear()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Empty events data
  const events: any[] = []

  const hasEvent = (day: number) => {
    return events.some(
      (event) => event.date.getDate() === day && event.date.getMonth() === month && event.date.getFullYear() === year,
    )
  }

  const getEventsForDay = (day: number) => {
    return events.filter(
      (event) => event.date.getDate() === day && event.date.getMonth() === month && event.date.getFullYear() === year,
    )
  }

  const prevMonth = () => {
    setSelectedDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setSelectedDate(new Date(year, month + 1, 1))
  }

  return (
    <Card className="border-none shadow-md overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="h-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />

      <CardHeader className="pb-2 pt-3 px-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-lg shadow-md">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Calendar
          </h2>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-purple-50 hover:text-purple-700 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            onClick={prevMonth}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <span className="text-sm font-medium bg-purple-50 px-3 py-1 rounded-full text-purple-700 shadow-sm">
            {monthNames[month]} {year}
          </span>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-purple-50 hover:text-purple-700 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            onClick={nextMonth}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        {/* Day names */}
        <div className="grid grid-cols-7 mb-3">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {/* Empty cells for days before the first day of month */}
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-9" />
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const isToday =
              day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()

            const dayHasEvent = hasEvent(day)

            return (
              <div key={`day-${day}`} className={cn("h-9 flex flex-col items-center justify-center relative")}>
                <button
                  className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center text-sm transition-all transform hover:-translate-y-0.5 hover:shadow-sm",
                    isToday
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-md"
                      : dayHasEvent
                        ? "bg-purple-50 text-purple-700 font-medium hover:bg-purple-100"
                        : "hover:bg-gray-100",
                  )}
                >
                  {day}
                </button>

                {dayHasEvent && !isToday && <span className="absolute bottom-0 h-1 w-1 rounded-full bg-purple-500" />}
              </div>
            )
          })}
        </div>

        {/* Today's events */}
        <div className="mt-3 bg-gray-50 rounded-xl p-3">
          <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            Today's Schedule
          </h4>

          {getEventsForDay(currentDate.getDate()).length > 0 ? (
            <div className="space-y-3">
              {getEventsForDay(currentDate.getDate()).map((event, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <div className="flex flex-col gap-1 mt-1">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {event.time}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {event.location}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-100">
                      {event.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm">
              <p className="text-sm text-gray-500 mb-2">No events scheduled for today</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-1 text-xs text-purple-600 border-purple-200 hover:bg-purple-50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <PlusCircle className="h-3.5 w-3.5 mr-1.5" />
                Add Event
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
