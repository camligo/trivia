import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./StarIcon.module.scss";

interface StarIconProps {
  isFilled: boolean;
}

const StarIcon = ({ isFilled }: StarIconProps)  => {

  return (
    <FontAwesomeIcon
      icon={faStar}
      className={isFilled ? styles.starFilled : styles.starEmpty}
    />
  )
}

export default StarIcon
