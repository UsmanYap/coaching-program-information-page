import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
}

const SlideIn = (props: Props) => {
  const { children, className, from = "right", delay = 0 } = props;

  const getInitialPosition = () => {
    switch (from) {
      case "left":
        return { x: "-100%", y: 0 };
      case "right":
        return { x: "100%", y: 0 };
      case "top":
        return { x: 0, y: "-100%" };
      case "bottom":
        return { x: 0, y: "100%" };
      default:
        return { x: "100%", y: 0 };
    }
  };

  const slideInAnimation = {
    initial: { ...getInitialPosition(), opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay },
    },
    exit: {
      ...getInitialPosition(),
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideInAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
