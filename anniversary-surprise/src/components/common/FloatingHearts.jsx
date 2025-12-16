import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 900, // behind the note
      }}
    >
      {Array.from({ length: 24 }).map((_, i) => {
        const left = Math.random() * 100;

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              top: "100%",
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              top: "-60px", // GOES PAST TOP BEFORE FADING
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${left}%`,
              fontSize: 26,
            }}
          >
            💗
          </motion.div>
        );
      })}
    </div>
  );
}
