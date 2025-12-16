import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NoteCard from "./NoteCard";
import loveNotes from "../../data/loveNotes";
import FloatingHearts from "../common/FloatingHearts";

export default function NotesGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* NOTES GRID */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 22,
          paddingBottom: 50,
        }}
      >
        {loveNotes.map((note, i) => (
          <NoteCard
            key={i}
            id={i}
            text={note}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>

      {/* OVERLAY */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: 20,

              /* 🔑 REQUIRED FOR HEARTS */
              overflow: "hidden",
            }}
          >
            {/* FLOATING HEARTS (BACKGROUND) */}
            <FloatingHearts />

            {/* ZOOMED NOTE (FOREGROUND) */}
            <motion.div
              layoutId={`note-${selected}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                zIndex: 1001,

                background: "#fffafc",
                padding: 32,
                borderRadius: 20,
                maxWidth: 420,
                width: "100%",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                color: "#b03060",
                fontSize: "1.2rem",
                lineHeight: 1.5,
                border: "1px solid #ffd6e8",
              }}
            >
              {loveNotes[selected]}

              <div
                style={{
                  marginTop: 18,
                  fontSize: 14,
                  opacity: 0.6,
                }}
              >
                Tap anywhere outside to close 💕
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
