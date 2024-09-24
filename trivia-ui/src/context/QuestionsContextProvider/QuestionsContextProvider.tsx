import { createContext, FC, ReactNode, useState } from "react";
import { QuestionResponse } from "../../services/trivia-service"

interface QuestionsContextType {
  questions: QuestionResponse[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionResponse[]>>;
}

export const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

interface QuestionsContextProviderProps {
  children: ReactNode;
}

const QuestionsContextProvider: FC<QuestionsContextProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionResponse[]>([]);

  return (
    <QuestionsContext.Provider value={{questions, setQuestions}}>
      {children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContextProvider
