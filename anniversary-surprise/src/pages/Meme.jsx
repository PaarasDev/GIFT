import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Meme() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  // --- SOUND EFFECT (FIXED & RELIABLE) ---
  useEffect(() => {
    const audio = new Audio("/music/cat-laugh.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const tryPlay = () => {
      audio.play().catch(() => {});
      window.removeEventListener("pointerdown", tryPlay);
    };

    // Required for mobile browsers
    window.addEventListener("pointerdown", tryPlay);

    // Try once immediately (works on desktop)
    audio.play().catch(() => {});

    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        textAlign: "center",
      }}
    >
      {/* BACKGROUND CAT PATTERN */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/meme/cat-laugh.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "140px 140px",
          opacity: 0.12,
          filter: "blur(1px)",
          zIndex: 0,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "200px 200px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* FOREGROUND CONTENT */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <motion.img
          src="/images/meme/cat-laugh.jpg"
          alt="Laughing cat"
          style={{
            width: 260,
            borderRadius: 22,
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            ease: "easeInOut",
          }}
        />

        {/* (Text line intentionally neutral here) */}
        <h2 style={{ marginTop: 16, color: "#b03060" }}>
          😂 No gift for cute niggus 😝
        </h2>

        <button
          onClick={() => navigate("/love")}
          style={{
            marginTop: 18,
            padding: "14px 28px",
            borderRadius: 25,
            border: "none",
            background: "#ff69b4",
            color: "white",
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(255,105,180,0.45)",
          }}
        >
          Just Kidding 😘
          <span
            style={{
              display: "block",
              fontSize: 13,
              marginTop: 4,
              opacity: 0.9,
            }}
          >
            Click to see your real gift
          </span>
        </button>
      </div>
    </div>
  );
}
