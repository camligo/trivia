import { createContext, FC, ReactNode, useState } from "react";

interface ScoreContextType {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

interface ScoreContextProviderProps {
  children: ReactNode;
}

const ScoreContextProvider: FC<ScoreContextProviderProps> = ({ children }) => {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider value={{score, setScore}}>
      {children}
    </ScoreContext.Provider>
  )
}

export default ScoreContextProvider
