import styles from "./MessageCard.module.scss"

const MessageCard = () => {
  return (
    <article className={styles.messageContainer}>
      <div className={styles.messageContent}>
        <h1>Welcome to the Trivia App!</h1>
        <p>Press to button to create a new quiz.</p>
      </div>
    </article>
  )
}

export default MessageCard
