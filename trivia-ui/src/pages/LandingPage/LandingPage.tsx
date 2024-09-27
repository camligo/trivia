import ArrowButton from "../../components/ArrowButton/ArrowButton"
import MessageCard from "../../components/MessageCard/MessageCard"
import styles from "./LandingPage.module.scss"
import gif from "../../assets/rondy-stickers-flying-rocket.gif"
import { useContext, useEffect } from "react"
import { CategoryContext } from "../../context/CategoryContextProvider/CategoryContextProvider"
import { getAllCategories } from "../../services/trivia-service"


const LandingPage = () => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { setCategories } = context;

  useEffect(() => {
    getAllCategories()
      .then(data => {
        setCategories(data)
      })
      .catch(e => console.error(e))
  }, []);

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
