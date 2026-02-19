const API_URL = "http://localhost:3001/api";

export async function fetchCategories() {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error("Erreur catégories");
  return response.json();
}

export async function fetchQuestions(categoryId: string) {
  const response = await fetch(`${API_URL}/questions/${categoryId}`);
  if (!response.ok) throw new Error("Erreur questions");
  return response.json();
}