export interface Category {
  id: string
  name: string
  icon: string
  description: string
  color: string
}

export interface Question {
  id: number
  question: string
  answers: string[]
  correctAnswer: string
}

// src/lib/quiz-data.ts modifié
const API_URL = "http://localhost:3001/api";

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des catégories");
  return response.json();
}

export async function fetchQuestions(categoryId: string): Promise<Question[]> {
  const response = await fetch(`${API_URL}/questions/${categoryId}`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des questions");
  return response.json();
}