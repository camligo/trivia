import { GameFormData } from "../components/GameForm/schema.ts";
import * as triviadb from "./trivia-service.ts";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export const createGame = async (data: GameFormData) => {
  const response = await fetch(`${baseURL}/games`, {
    method: 'POST',
    body: JSON.stringify({
        "category": parseInt(data.category),
        "difficulty": data.difficulty
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error('Failed to post');
  }

  return response;
}

// export const updateGame = async (id: number) => {
//   const response = await fetch(`${baseURL}/games/${id}`, {
//     method: 'PATCH',
//     body: JSON.stringify({
//       "score": parseInt(score),
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   });
// }
