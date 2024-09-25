import "./App.scss";
import CreateGamePage from "./pages/CreateGamePage/CreateGamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import QuestionsContextProvider from "./context/QuestionsContextProvider/QuestionsContextProvider";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import ScoreContextProvider from "./context/ScoreContextProvider/ScoreContextProvider";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {

  return (
    <>
      <QuestionsContextProvider>
      <ScoreContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/game/new" element={<CreateGamePage />} />
            <Route path="/game/:id" element={<QuestionPage />}/>
            <Route path="/game/results" element={<ResultsPage />} />
          </Routes>
        </BrowserRouter>
      </ScoreContextProvider>
      </QuestionsContextProvider>
    </>
  )
}

export default App
