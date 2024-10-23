import { motion } from "framer-motion";
import clsx from "clsx";

interface TrainAppearProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  from?: "left" | "right" | "top" | "bottom";
}

const TrainAppear = ({
  children,
  delay = 0,
  duration = 0.5,
  className,
  from = "left",
}: TrainAppearProps) => {
  const getInitialPosition = () => {
    switch (from) {
      case "right":
        return { x: "100%", y: 0 };
      case "top":
        return { x: 0, y: "-100%" };
      case "bottom":
        return { x: 0, y: "100%" };
      case "left":
      default:
        return { x: "-100%", y: 0 };
    }
  };

  const childVariants = {
    hidden: {
      ...getInitialPosition(),
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeInOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={clsx(className, "overflow-hidden")}
    >
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.div>
  );
};

export default TrainAppear;
