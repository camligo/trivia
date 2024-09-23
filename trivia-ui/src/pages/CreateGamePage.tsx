import CategorySelect from "../components/CategorySelect/CategorySelect"
import DifficultyButtons from "../components/DifficultyButtons/DifficultyButtons"
import styles from "./CreateGamePage.module.scss"

const CreateGamePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>
          Choose a category:
        </h2>
        <CategorySelect />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>
          Difficulty level:
        </h2>
        <DifficultyButtons />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.startBtn}>
          Start
        </button>
      </div>
    </div>
  )
}

export default CreateGamePage
