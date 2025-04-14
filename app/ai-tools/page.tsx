import BottomNavbar from "@/components/bottom-navbar"
import AiToolsPage from "@/components/ai-tools/ai-tools-page"

export default function AiTools() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
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

      <AiToolsPage />
      <BottomNavbar />
    </main>
  )
}
