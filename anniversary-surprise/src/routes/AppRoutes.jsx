import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Landing from "../pages/Landing";
import Quiz from "../pages/Quiz";
import Gift from "../pages/Gift";
import Meme from "../pages/Meme";
import LoveNotes from "../pages/LoveNotes";

export default function AppRoutes() {
  const [quizPassed, setQuizPassed] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<Quiz setQuizPassed={setQuizPassed} />} />
        <Route
          path="/gift"
          element={quizPassed ? <Gift /> : <Navigate to="/quiz" />}
        />
        <Route path="/meme" element={<Meme />} />
        <Route path="/love" element={<LoveNotes />} />
      </Routes>
    </BrowserRouter>
  );
}
