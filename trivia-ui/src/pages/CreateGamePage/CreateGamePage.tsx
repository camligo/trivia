import { useNavigate } from "react-router-dom"
import CategorySelect from "../../components/CategorySelect/CategorySelect"
import DifficultyButtons from "../../components/DifficultyButtons/DifficultyButtons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./CreateGamePage.module.scss"

const CreateGamePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backArrow} onClick={handleBackClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
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
