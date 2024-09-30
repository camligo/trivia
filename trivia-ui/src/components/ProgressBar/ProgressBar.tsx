import styles from "./ProgressBar.module.scss"

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{width: `${progress}%`}}
      />
    </div>
  )
}

export default ProgressBar
