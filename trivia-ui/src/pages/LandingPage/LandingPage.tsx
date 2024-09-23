import ArrowButton from "../../components/ArrowButton/ArrowButton"
import MessageCard from "../../components/MessageCard/MessageCard"
import styles from "./LandingPage.module.scss"
import gif from "../../assets/handy-curious-computer-character-reading-book.gif"


const LandingPage = () => {
  return (
    <main className={styles.pageWrapper}>
      <img
        src={gif}
        alt="Gif of computer reading book"
        className={styles.gifImage}
      />
      <div className={styles.cardWrapper}>
        <MessageCard />
        <ArrowButton />
      </div>
    </main>
  )
}

export default LandingPage
