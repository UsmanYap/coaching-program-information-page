import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const Appear = (props: Props) => {
  const { children, className, delay = 0, duration = 0.5 } = props;

  const appearAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration, delay },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={appearAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Appear;
