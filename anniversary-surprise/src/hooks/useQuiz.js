import { useState } from "react";
import quizQuestions from "../data/quizQuestions";

export default function useQuiz() {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(true);

  const current = quizQuestions[index];

  const answerQuestion = (option) => {
    if (option !== current.answer) {
      setCorrect(false);
      return false;
    }
    setCorrect(true);
    if (index < quizQuestions.length - 1) {
      setIndex(index + 1);
      return false;
    }
    return true;
  };

  return { current, answerQuestion, correct };
}
