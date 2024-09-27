import { createContext, FC, ReactNode, useState } from "react";
import { QuestionResponse } from "../../services/trivia-service"

interface QuestionsContextType {
  questions: QuestionResponse[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionResponse[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

interface QuestionsContextProviderProps {
  children: ReactNode;
}

const QuestionsContextProvider: FC<QuestionsContextProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionResponse[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  return (
    <QuestionsContext.Provider value={{questions, setQuestions, currentQuestionIndex, setCurrentQuestionIndex}}>
      {children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContextProvider
