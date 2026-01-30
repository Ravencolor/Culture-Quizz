import { Trophy, Home, RotateCcw, Star } from "lucide-react"

interface ResultsProps {
  score: number
  total: number
  onRestart: () => void
  onHome: () => void
}

export function Results({ score, total, onRestart, onHome }: ResultsProps) {
  const percentage = Math.round((score / total) * 100)

  const getMessage = () => {
    if (percentage === 100) return "Parfait !"
    if (percentage >= 80) return "Excellent !"
    if (percentage >= 60) return "Bien joué !"
    if (percentage >= 40) return "Pas mal !"
    return "Continuez à apprendre !"
  }

  const getStars = () => {
    if (percentage >= 80) return 3
    if (percentage >= 50) return 2
    if (percentage >= 20) return 1
    return 0
  }

  const stars = getStars()

  return (
    <main className="min-h-dvh bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        {/* Trophy Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
              <Trophy className="w-12 h-12 text-primary" />
            </div>
            {percentage === 100 && (
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-chart-4 flex items-center justify-center">
                <span className="text-sm font-bold text-background">100</span>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {getMessage()}
        </h1>
        <p className="text-muted-foreground mb-8">
          Quiz terminé
        </p>

        {/* Score Card */}
        <div className="bg-card rounded-2xl p-6 border border-border mb-8">
          {/* Stars */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className={`w-10 h-10 ${
                  star <= stars
                    ? "text-chart-4 fill-chart-4"
                    : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          {/* Score */}
          <div className="mb-4">
            <span className="text-6xl md:text-7xl font-bold text-primary">
              {score}
            </span>
            <span className="text-2xl text-muted-foreground">
              /{total}
            </span>
          </div>

          {/* Percentage */}
          <div className="w-full bg-secondary rounded-full h-3 mb-2 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {percentage}% de bonnes réponses
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground 
                       font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Rejouer
          </button>
          
          <button
            onClick={onHome}
            className="flex items-center justify-center gap-2 w-full py-4 bg-secondary text-secondary-foreground 
                       font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all"
          >
            <Home className="w-5 h-5" />
            Accueil
          </button>
        </div>
      </div>
    </main>
  )
}
