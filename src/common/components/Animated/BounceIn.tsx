import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  from?: "left" | "right" | "top" | "bottom" | "none";
  delay?: number;
  grow?: boolean;
}

const BounceIn = (props: Props) => {
  const { children, className, from = "none", delay = 0, grow = true } = props;

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
        return { x: 0, y: 0 };
    }
  };

  const bounceInAnimation = {
    initial: {
      ...getInitialPosition(),
      opacity: 0,
      scale: grow ? 0.8 : 1,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay },
    },
    exit: {
      opacity: 0,
      scale: grow ? 0.8 : 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={bounceInAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BounceIn;
