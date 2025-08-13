import { motion } from "framer-motion";

export default function FadeWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="min-h-[60vh]"
    >
      {children}
    </motion.div>
  );
}
