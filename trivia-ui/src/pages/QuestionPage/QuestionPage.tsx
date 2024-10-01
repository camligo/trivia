import { useContext, useEffect, useRef, useState } from "react";
import QuestionForm from "../../components/QuestionForm/QuestionForm";
import music from "../../assets/Fluffing-a-Duck.mp3"
import { QuestionsContext } from "../../context/QuestionsContextProvider/QuestionsContextProvider";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const QuestionPage = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error("QuestionsContext is undefined");
  }

  const { questions, currentQuestionIndex } = context;
  const totalQuestions = questions.length;

  const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;

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
      <ProgressBar progress={progressPercentage} />
      <audio ref={audioRef} src={music} loop />
      <QuestionForm />
    </>
  )
}

export default QuestionPage
