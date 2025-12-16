import { motion } from "framer-motion";

export default function GiftBox({ onOpen }) {
  return (
    <motion.div
      onClick={onOpen}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      style={{
        width: 160,
        height: 160,
        margin: "0 auto",
        background: "#ffb6c1",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: 64,
      }}
    >
      🎁
    </motion.div>
  );
}
