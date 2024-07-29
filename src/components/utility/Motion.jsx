import React from "react";
import { motion } from "framer-motion";

const motionProps = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: [0.42, 0, 0.58, 1],
    type: "spring",
    stiffness: 100,
    damping: 10,
  },
  exit: { opacity: 0, y: 50 },
};

const Motion = ({ children }) => {
  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default Motion;
