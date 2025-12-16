import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GiftBox from "../components/gift/GiftBox";
import ConfettiEffect from "../components/gift/Confetti";

export default function Gift() {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => navigate("/meme"), 5000);
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
        textAlign: "center",
      }}
    >
      {opened && <ConfettiEffect />}

      <div
        style={{
          background: "#fffafc",
          borderRadius: 24,
          padding: "40px 30px",
          maxWidth: 360,
          width: "100%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            color: "#b03060",
            marginBottom: 20,
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
          }}
        >
          Something for you ❤️
        </h1>

        {!opened && <GiftBox onOpen={handleOpen} />}

        {opened && (
          <p
            style={{
              marginTop: 20,
              color: "#b03060",
              fontSize: 16,
            }}
          >
            Opening your gift…
          </p>
        )}
      </div>
    </div>
  );
}
