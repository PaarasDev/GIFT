import NotesGrid from "../components/notes/NotesGrid";

export default function LoveNotes() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          padding: "40px 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1100,

          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#fff",
          }}
        >
          You Mean Everything to Me 💕
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
            color: "#fff",
            opacity: 0.9,
            maxWidth: 600,
          }}
        >
          These are just a few reasons why I love you
        </p>

        <NotesGrid />
      </div>
    </div>
  );
}
