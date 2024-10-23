import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const DiagonalAppear = (props: Props) => {
  const { children, className, delay = 0, duration = 1 } = props;

  const diagonalAppearAnimation = {
    initial: { clipPath: "polygon(0 0, 0 0, 0 0, 0 0)", opacity: 0 },
    animate: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      transition: { duration: duration, delay },
    },
    exit: {
      clipPath: "polygon(0 0, 0 0, 0 0, 0 0)",
      opacity: 0,
      transition: { duration: duration },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={diagonalAppearAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default DiagonalAppear;
