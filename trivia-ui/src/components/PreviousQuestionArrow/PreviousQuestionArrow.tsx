import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./PreviousQuestionArrow.module.scss"

interface PreviousQuestionArrowProps {
  onClick: () => void;
}

const PreviousQuestionArrow = ({ onClick }: PreviousQuestionArrowProps) => {
  return (
    <>
      <div className={styles.backArrow} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    </>
  )
}

export default PreviousQuestionArrow
