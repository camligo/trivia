import "./App.scss";
import CreateGamePage from "./pages/CreateGamePage/CreateGamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/game/new" element={<CreateGamePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
