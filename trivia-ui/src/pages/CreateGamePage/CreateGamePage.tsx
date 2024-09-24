import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./CreateGamePage.module.scss"
import GameForm from "../../components/GameForm/GameForm";
import { GameFormData } from "../../components/GameForm/schema";
import { fetchNewTrivia } from "../../services/trivia-service";

const CreateGamePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSubmit = async (data: GameFormData) => {
    fetchNewTrivia(data)
        .then((game) => {
            console.log(game)
        })
        .catch((e) => console.log(e));
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.backArrow} onClick={handleBackClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>

      <GameForm onSubmit={handleSubmit} />
      {/* <div className={styles.contentContainer}>
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
      </div> */}
    </div>
  )
}

export default CreateGamePage
