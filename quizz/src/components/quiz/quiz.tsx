import { useEffect, useState, useCallback, useRef } from "react"
import { ArrowLeft, Clock } from "lucide-react"


interface Question {
  id: number
  question: string
  answers: string[]
  correctAnswer: string
}

interface QuizProps {
  categoryId: string
  onComplete: (score: number, total: number) => void
  onBack: () => void
}


function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Sélectionne 4 réponses (dont la bonne) parmi les 10 fournies par l'API
function getRandomAnswers(allAnswers: string[], correctAnswer: string): string[] {
  const wrongAnswers = allAnswers.filter((a) => a !== correctAnswer)
  const selectedWrong = shuffleArray(wrongAnswers).slice(0, 3)
  return shuffleArray([...selectedWrong, correctAnswer])
}

export function Quiz({ categoryId, onComplete, onBack }: QuizProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedAnswers, setDisplayedAnswers] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [loading, setLoading] = useState(true)

  const timerRef = useRef<number | null>(null)
  const transitionTimeoutRef = useRef<number | null>(null)

  
  useEffect(() => {
    fetch(`http://localhost:3001/api/questions/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(shuffleArray(data))
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erreur API:", err)
        setLoading(false)
      })
  }, [categoryId])

  const currentQuestion = questions[currentIndex]

  const moveToNextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
      setTimeLeft(30)
    } else {
      onComplete(score, questions.length)
    }
  }, [currentIndex, questions.length, score, onComplete])

  const handleAnswer = useCallback(
    (answer: string) => {
      if (isAnswered) return

      setSelectedAnswer(answer)
      setIsAnswered(true)

      if (timerRef.current) clearInterval(timerRef.current)

      if (answer === currentQuestion?.correctAnswer) {
        setScore((prev) => prev + 1)
      }

      transitionTimeoutRef.current = setTimeout(() => {
        moveToNextQuestion()
      }, 1500)
    },
    [isAnswered, currentQuestion, moveToNextQuestion]
  )

  // Mise à jour des réponses affichées 
  useEffect(() => {
    if (currentQuestion) {
      setDisplayedAnswers(
        getRandomAnswers(currentQuestion.answers, currentQuestion.correctAnswer)
      )
    }
  }, [currentQuestion])

  // 3. Gestion du Timer (30s par question)
  useEffect(() => {
    if (isAnswered || !currentQuestion || loading) return

    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          setIsAnswered(true)
          transitionTimeoutRef.current = window.setTimeout(moveToNextQuestion, 1500)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isAnswered, currentQuestion, loading, moveToNextQuestion])

  if (loading) return <div className="flex justify-center items-center h-dvh">Chargement du quiz...</div>
  if (!currentQuestion) return null

  const timerPercentage = (timeLeft / 30) * 100

  return (
    <main className="min-h-dvh bg-background p-4 pb-8">
      <div className="max-w-lg mx-auto flex flex-col min-h-[calc(100dvh-2rem)]">
        <header className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 rounded-xl bg-secondary text-secondary-foreground hover:opacity-80">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-muted-foreground font-medium">
            Question {currentIndex + 1}/{questions.length}
          </span>
        </header>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className={`font-bold text-lg ${timeLeft <= 10 ? "text-destructive" : "text-foreground"}`}>
                {timeLeft}s
              </span>
            </div>
            <span className="text-sm text-muted-foreground">Score: {score}</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-linear ${timeLeft <= 10 ? "bg-destructive" : "bg-primary"}`}
              style={{ width: `${timerPercentage}%` }}
            />
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 mb-6 border border-border">
          <h2 className="text-xl font-semibold text-card-foreground leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="grid gap-3 flex-1">
          {displayedAnswers.map((answer, index) => {
            const isCorrect = answer === currentQuestion.correctAnswer
            const isSelected = selectedAnswer === answer
            const showCorrect = isAnswered && isCorrect
            const showWrong = isAnswered && isSelected && !isCorrect

            let buttonClass = "p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 "
            if (showCorrect) buttonClass += "bg-green-500 border-green-500 text-white"
            else if (showWrong) buttonClass += "bg-red-500 border-red-500 text-white"
            else if (isAnswered) buttonClass += "bg-secondary/50 border-border text-muted-foreground opacity-50"
            else buttonClass += "bg-card border-border text-card-foreground hover:border-primary/50"

            return (
              <button key={index} onClick={() => handleAnswer(answer)} disabled={isAnswered} className={buttonClass}>
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary text-sm font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{answer}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}
