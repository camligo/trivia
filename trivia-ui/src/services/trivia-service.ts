const BASE_URL = "https://opentdb.com/api.php?amount=3&";

export const fetchNewTrivia = async (category: string, difficulty: string) => {
  const response = await fetch(`${BASE_URL}category=${category}&difficulty=${difficulty}&type=multiple`);

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

  return await response.json();
}
