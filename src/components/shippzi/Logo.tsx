import { motion } from "motion/react";
import logoAsset from "@/assets/shippzi-logo.png";

export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`group inline-flex items-center ${className}`}
      aria-label="Shippzi home"
    >
      <motion.img
        src={logoAsset}
        alt="Shippzi"
        className={`h-9 w-auto md:h-10 select-none ${light ? "brightness-0 invert" : ""}`}
        draggable={false}
        whileHover={{ rotate: [0, -1.5, 1.5, 0] }}
        transition={{ duration: 0.6 }}
      />
    </motion.a>
  );
}
