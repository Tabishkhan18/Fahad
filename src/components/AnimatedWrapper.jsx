// import React from "react";
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="md:w-full flex justify-end"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
