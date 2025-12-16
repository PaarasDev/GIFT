import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#fffafc",
          borderRadius: 24,
          padding: "48px 32px",
          maxWidth: 420,
          width: "100%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            color: "#b03060",
            fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
            marginBottom: 16,
          }}
        >
          Happy Anniversary ❤️
        </motion.h1>

        <p
          style={{
            color: "#b03060",
            opacity: 0.85,
            fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
            marginBottom: 32,
          }}
        >
          I have a little surprise for you…
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/quiz")}
          style={{
            padding: "14px 36px",
            borderRadius: 30,
            border: "none",
            background: "#ff69b4",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(255,105,180,0.4)",
          }}
        >
          Start 💖
        </motion.button>
      </motion.div>
    </div>
  );
}
