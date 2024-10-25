import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction?: "vertical" | "horizontal";
  duration?: number;
  delay?: number;
}

const GrowIn = (props: Props) => {
  const { children, direction = "vertical", duration = 0.3, delay = 0 } = props;

  const directionMap = {
    vertical: {
      initial: { height: 0 },
      animate: { height: "auto", transition: { duration, delay } },
      exit: { height: 0, transition: { duration } },
    },
    horizontal: {
      initial: { width: 0 },
      animate: { width: "auto", transition: { duration, delay } },
      exit: { width: 0, transition: { duration } },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={directionMap[direction]}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default GrowIn;
