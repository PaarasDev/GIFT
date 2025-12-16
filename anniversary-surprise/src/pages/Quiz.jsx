import useQuiz from "../hooks/useQuiz";
import { useNavigate } from "react-router-dom";

export default function Quiz({ setQuizPassed }) {
  const { current, answerQuestion, correct } = useQuiz();
  const navigate = useNavigate();

  const handleClick = (option) => {
    const finished = answerQuestion(option);
    if (finished) {
      setQuizPassed(true);
      navigate("/gift");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fffafc",
          borderRadius: 20,
          padding: 28,
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            marginBottom: 20,
            color: "#b03060",
            fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
          }}
        >
          {current.question}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {current.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleClick(opt)}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #ffd6e8",
                background: "#fff",
                cursor: "pointer",
                fontSize: "1rem",
                color: "#b03060",
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {!correct && (
          <p
            style={{
              marginTop: 16,
              color: "#d6336c",
              fontSize: 14,
            }}
          >
            Wrong answer ❤️ Try again
          </p>
        )}
      </div>
    </div>
  );
}
