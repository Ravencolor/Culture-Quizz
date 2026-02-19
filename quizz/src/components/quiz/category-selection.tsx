import React, { useEffect, useState } from "react"
import { ArrowLeft, Scroll, Clapperboard, Trophy, Globe, Atom, Music } from "lucide-react"
import { fetchCategories } from "@/lib/quiz-data";

interface Category {
  id: string
  name: string
  icon: string
  description: string
  color: string
}

interface CategorySelectionProps {
  onSelect: (categoryId: string) => void
  onBack: () => void
}


const iconMap: Record<string, React.ReactNode> = {
  scroll: <Scroll className="w-8 h-8" />,
  clapperboard: <Clapperboard className="w-8 h-8" />,
  trophy: <Trophy className="w-8 h-8" />,
  globe: <Globe className="w-8 h-8" />,
  atom: <Atom className="w-8 h-8" />,
  music: <Music className="w-8 h-8" />,
}

export function CategorySelection({ onSelect, onBack }: CategorySelectionProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Appel à votre serveur Node.js (assurez-vous qu'il tourne sur le port 3001)
    fetch("http://localhost:3001/api/categories")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur réseau lors de la récupération des catégories")
        return res.json()
      })
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError("Impossible de charger les catégories.")
        setLoading(false)
      })
  }, [])

  return (
    <main className="min-h-dvh bg-background p-4 pb-8">
      <div className="max-w-lg mx-auto">
        <header className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-secondary text-secondary-foreground hover:opacity-80 transition-opacity"
            aria-label="Retour"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Choisir une catégorie
          </h1>
        </header>

        {loading && (
          <div className="flex justify-center py-10 text-muted-foreground">
            Chargement des thèmes...
          </div>
        )}

        {error && (
          <div className="p-4 bg-destructive/10 text-destructive rounded-xl text-center mb-4">
            {error}
          </div>
        )}

        <div className="grid gap-4">
          {!loading && categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border
                       hover:border-primary/50 hover:bg-card/80 transition-all duration-200
                       text-left group"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl text-foreground"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <span style={{ color: category.color }}>
                  {iconMap[category.icon]}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}