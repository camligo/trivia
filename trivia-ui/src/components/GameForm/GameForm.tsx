import { FormProvider, useForm } from "react-hook-form";
import { GameFormData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CategorySelect from "../CategorySelect/CategorySelect";
import styles from "./GameForm.module.scss";
import DifficultyButtons from "../DifficultyButtons/DifficultyButtons";
import { useState } from "react";
import { difficulties } from "../../services/trivia-service";

interface GameFormProps {
    defaultValues?: GameFormData;
    onSubmit: (data: GameFormData) => Promise<unknown>;
}

const GameForm = ({
    defaultValues = {category: '9', difficulty: 'easy'},
    onSubmit
}: GameFormProps) => {

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
    } = useForm<GameFormData>({ resolver: zodResolver(schema), defaultValues });

    const [selectedDifficulty, setSelectedDifficulty] = useState<string>(defaultValues.difficulty);

    const handleClick = async (difficulty: string) => {
      setSelectedDifficulty(difficulty);
    }

    isSubmitSuccessful && reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>
          Choose a category:
        </h2>
        <CategorySelect register={register("category")} />
      </div>

      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>
          Difficulty level:
        </h2>
        <div className={styles.buttonsContainer}>
          {difficulties.map((level) => (
            <label key={level} className={styles.btn}>
              <input
                {...register("difficulty")}
                type="radio"
                value={level.toLowerCase()}
              />
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.startBtn} type="submit">
          Start
        </button>
      </div>
    </form>
  )
}

export default GameForm;
