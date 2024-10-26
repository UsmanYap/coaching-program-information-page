import clsx from "clsx";
import { FaSpinner } from "react-icons/fa";

interface Props {
  className?: string;
}
const LoadingSpinner = (props: Props) => {
  const { className } = props;

  return (
    <FaSpinner
      className={clsx("animate-spin text-white text-2xl w-4 h-4", className)}
    />
  );
};

export default LoadingSpinner;
