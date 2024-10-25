import useScreenStore from "@state/screenNavigation/context";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

const ScreenTransition = (props: Props) => {
  const { children, disabled } = props;
  const { currentScreen, lastDirection } = useScreenStore();

  const animations = {
    transition: { type: "tween", duration: 1 },
    animate: { x: 0 },
  };

  const animationMap = {
    left: { axis: "x", initial: "-100%", exit: "100%" },
    right: { axis: "x", initial: "100%", exit: "-100%" },
    up: { axis: "y", initial: "-100%", exit: "100%" },
    down: { axis: "y", initial: "100%", exit: "-100%" },
  };

  if (lastDirection && !disabled) {
    const { axis, initial, exit } = animationMap[lastDirection];
    Object.assign(animations, {
      initial: { [axis]: initial },
      animate: { [axis]: 0 },
      exit: { [axis]: exit },
    });
  }

  return (
    <motion.div
      className="w-full h-full bg-primary"
      key={currentScreen}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animations}
    >
      {children}
    </motion.div>
  );
};

export default ScreenTransition;
