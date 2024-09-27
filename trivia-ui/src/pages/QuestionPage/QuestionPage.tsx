import { useEffect, useRef } from "react";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import music from "../../assets/Fluffing-a-Duck.mp3"

const QuestionPage = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // play audio when component mounts
    if (audioRef.current) {
      audioRef.current.play();
    }

    // stop audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // reset audio
      }
    }
  }, [])
  return (
    <>
      <audio ref={audioRef} src={music} loop />
      <QuestionForm />
    </>
  )
}

export default QuestionPage
