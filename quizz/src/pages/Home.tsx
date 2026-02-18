import { useState } from "react"
import { CategorySelection } from "@/components/quiz/category-selection"
import { Quiz } from "@/components/quiz/quiz"
import { Results } from "@/components/quiz/results"

export type GameState = "home" | "categories" | "quiz" | "results"

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("home")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(10)

  const handleStart = () => {
    setGameState("categories")
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setScore(0)
    setGameState("quiz")
  }

  const handleQuizComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setGameState("results")
  }

  const handleRestart = () => {
    setSelectedCategory(null)
    setScore(0)
    setGameState("categories")
  }

  const handleHome = () => {
    setSelectedCategory(null)
    setScore(0)
    setGameState("home")
  }

  if (gameState === "home") {
    return (
      <main className="min-h-dvh flex flex-col items-center justify-center bg-background p-4">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <img
              src="/logo.jpg"
              alt="CultureQuiz Logo"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              CultureQuiz
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Testez vos connaissances
            </p>
          </div>

          <button
            onClick={handleStart}
            className="mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-xl 
                       hover:opacity-90 active:scale-95 transition-all duration-200
                       shadow-lg shadow-primary/25"
          >
            Commencer
          </button>
        </div>
      </main>
    )
  }

  if (gameState === "categories") {
    return <CategorySelection onSelect={handleCategorySelect} onBack={handleHome} />
  }

  if (gameState === "quiz" && selectedCategory) {
    return (
      <Quiz
        categoryId={selectedCategory}
        onComplete={handleQuizComplete}
        onBack={handleHome}
      />
    )
  }

  if (gameState === "results") {
    return (
      <Results
        score={score}
        total={totalQuestions}
        onRestart={handleRestart}
        onHome={handleHome}
      />
    )
  }

  return null
}
