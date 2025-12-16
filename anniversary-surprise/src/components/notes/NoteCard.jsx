import { motion } from "framer-motion";

export default function NoteCard({ text, onClick, id }) {
  return (
    <motion.div
      layoutId={`note-${id}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: "#fffafc",
        padding: 22,
        borderRadius: 16,
        minHeight: 130,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        border: "1px solid #ffd6e8",
        color: "#b03060",
        fontSize: "clamp(0.95rem, 2.6vw, 1.1rem)",
        lineHeight: 1.4,
        cursor: "pointer",
      }}
    >
      {text}
    </motion.div>
  );
}
