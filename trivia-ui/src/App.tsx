import "./App.scss";
import CreateGamePage from "./pages/CreateGamePage/CreateGamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import QuestionsContextProvider from "./context/QuestionsContextProvider/QuestionsContextProvider";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

function App() {


  return (
    <>
      <QuestionsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/game/new" element={<CreateGamePage />} />
            <Route path="/game" element={<QuestionPage />}/>
          </Routes>
        </BrowserRouter>
      </QuestionsContextProvider>
    </>
  )
}

export default App
