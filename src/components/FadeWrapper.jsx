import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function FadeWrapper({ children }) {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="w-full overflow-visible"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
