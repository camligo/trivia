import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./NextQuestionButton.module.scss";

const NextQuestionButton = () => {

  return (
    <>
      <button className={styles.btnContainer} type="submit">
        <FontAwesomeIcon icon={faArrowRight} className={styles.btnNext} />
      </button>
    </>
  )
}

export default NextQuestionButton;
