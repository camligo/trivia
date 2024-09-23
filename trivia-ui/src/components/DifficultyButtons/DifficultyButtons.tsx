import { useState } from "react"
import { difficulties, fetchNewTrivia } from "../../services/trivia-service"
import styles from "./DifficultyButtons.module.scss"

const DifficultyButtons = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");

  const handleClick = async (difficulty: string) => {
    setSelectedDifficulty(difficulty);

    try {
      const trivia = await fetchNewTrivia("9", difficulty);
      console.log(trivia)
    } catch (e) {
      console.error("Failed to fetch trivia", e)
    }
  }

  return (
    <div className={styles.buttonsContainer}>
      {difficulties.map((level) => (
        <button
          key={level}
          onClick={() => handleClick(level.toLowerCase())}
          className={`${styles.btn} ${
            selectedDifficulty === level.toLowerCase() ? styles.selected : ""
          }`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default DifficultyButtons
