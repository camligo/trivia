import "./App.scss";
import CreateGamePage from "./pages/CreateGamePage/CreateGamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import QuestionsContextProvider from "./context/QuestionsContextProvider/QuestionsContextProvider";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import ScoreContextProvider from "./context/ScoreContextProvider/ScoreContextProvider";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import CategoryContextProvider from "./context/CategoryContextProvider/CategoryContextProvider";
import ReviewPage from "./pages/ReviewPage/ReviewPage";

function App() {
  return (
    <>
      <CategoryContextProvider>
      <QuestionsContextProvider>
      <ScoreContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/game/new" element={<CreateGamePage />} />
            <Route path="/game/:id" element={<QuestionPage />}/>
            <Route path="/game/:id/results" element={<ResultsPage />} />
            <Route path="/game/:id/review" element={<ReviewPage />} />
          </Routes>
        </BrowserRouter>
      </ScoreContextProvider>
      </QuestionsContextProvider>
      </CategoryContextProvider>
    </>
  )
}

export default App
