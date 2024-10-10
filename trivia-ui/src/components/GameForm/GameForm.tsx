import { useForm } from "react-hook-form";
import { GameFormData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CategorySelect from "../CategorySelect/CategorySelect";
import styles from "./GameForm.module.scss";
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

  isSubmitSuccessful && reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formContentContainer}>
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
              <div key={level}>
                <input
                  {...register("difficulty")}
                  type="radio"
                  id={level.toLowerCase()}
                  value={level.toLowerCase()}
                />
                <label htmlFor={level.toLowerCase()} className={styles.btn}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </label>
              </div>
            ))}
          </div>
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
