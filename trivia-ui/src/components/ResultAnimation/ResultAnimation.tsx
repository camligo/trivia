import bottle from "../../assets/rondy-stickers-exploding-bottle-1.gif"
import help from "../../assets/rondy-stickers-lettering-sticker-help.gif"
import flag from "../../assets/rondy-stickers-checkered-flag.gif"
import styles from "./ResultAnimation.module.scss";

interface ResultAnimationProps {
  percentageScore: number;
}

const ResultAnimation = ({ percentageScore }: ResultAnimationProps) => {
  let img = flag;
  if (percentageScore >= 75) {
    img = bottle;
  } else if (percentageScore < 40) {
    img = help;
  }

  return (
    <div className={styles.GifContainer}>
      <img src={img} alt={img} className={styles.Gif} />
    </div>
  )
}

export default ResultAnimation
