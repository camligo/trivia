import { useState } from "react"
import { difficulties, fetchNewTrivia } from "../../services/trivia-service"
import styles from "./DifficultyButtons.module.scss"
import { UseFormRegisterReturn } from "react-hook-form"

interface DifficultyButtonsProps {
  register: UseFormRegisterReturn<"difficulty">
}

const DifficultyButtons = ({ register }: DifficultyButtonsProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");

  const handleClick = async (difficulty: string) => {
    setSelectedDifficulty(difficulty);
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
          type="button"
          {...register}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default DifficultyButtons
