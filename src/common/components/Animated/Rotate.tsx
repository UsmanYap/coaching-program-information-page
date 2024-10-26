import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  trigger: boolean;
  duration?: number;
  delay?: number;
}

const Rotate = (props: Props) => {
  const { children, className, trigger, duration = 0.2, delay = 0 } = props;

  const randomAngle = () => (Math.random() < 0.5 ? 1 : -1);

  return (
    <motion.div
      animate={{ rotate: trigger ? randomAngle() * 180 : 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Rotate;
