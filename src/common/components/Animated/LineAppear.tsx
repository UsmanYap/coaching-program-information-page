import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  children?: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
  delay?: number;
  duration?: number;
}

const LineAppear = (props: Props) => {
  const {
    children,
    className,
    direction = "horizontal",
    delay = 0,
    duration = 0.5,
  } = props;

  const lineAppearAnimation = children
    ? {
        initial: {
          height: direction === "vertical" && !children ? 0 : "auto",
          width: direction === "horizontal" && !children ? 0 : "auto",
          opacity: 1,
        },
        animate: {
          height: direction === "vertical" && !children ? "100%" : "auto",
          width: direction === "horizontal" && !children ? "100%" : "auto",
          opacity: 1,
          transition: { duration, delay, ease: "easeInOut" },
        },
        exit: {
          height: direction === "vertical" && !children ? 0 : "auto",
          width: direction === "horizontal" && !children ? 0 : "auto",
          opacity: 1,
          transition: { duration: 0.5 },
        },
      }
    : {
        initial: {
          height: direction === "vertical" ? 0 : "2px",
          width: direction === "horizontal" ? 0 : "2px",
          opacity: 1,
        },
        animate: {
          height: direction === "vertical" ? "100%" : "2px",
          width: direction === "horizontal" ? "100%" : "2px",
          opacity: 1,
          transition: { duration, delay, ease: "easeInOut" },
        },
        exit: {
          height: direction === "vertical" ? 0 : "2px",
          width: direction === "horizontal" ? 0 : "2px",
          opacity: 1,
          transition: { duration: 0.5 },
        },
      };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={lineAppearAnimation}
      className={clsx(
        !children && className,
        !children &&
          (direction === "vertical"
            ? "h-full w-px bg-white"
            : "w-full h-px bg-white")
      )}
    >
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay, duration }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default LineAppear;
