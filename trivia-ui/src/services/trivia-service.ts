import { GameFormData } from "../components/GameForm/schema";

const BASE_URL = "https://opentdb.com/api.php?amount=3&";

export interface CategoryResponse {
  id: number;
  name: string;
}

export const difficulties = ["easy", "medium", "hard"]

export const fetchNewTrivia = async (data: GameFormData) => {
  const response = await fetch(`${BASE_URL}category=${data.category}&difficulty=${data.difficulty}&type=multiple`);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return await response.json();
}

export const getAllCategories = async () => {
  const response = await fetch("https://opentdb.com/api_category.php");

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();

  const formattedData = data.trivia_categories;

  return formattedData as CategoryResponse[];
}