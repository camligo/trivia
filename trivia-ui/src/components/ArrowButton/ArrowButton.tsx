import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./ArrowButton.module.scss"

const ArrowButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game/new")
  }

  return (
    <>
      <button className={styles.btnContainer} onClick={handleClick}>
        <FontAwesomeIcon icon={faArrowRight} className={styles.btnNext} />
      </button>
    </>
  )
}

export default ArrowButton
