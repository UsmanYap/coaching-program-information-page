import logoCP from "@assets/logo-cp.png";
import clsx from "clsx";

interface Props {
  position?: "center" | "manual";
  size?: "small" | "medium" | "large";
  className?: string;
}

const BackgroundLogo = (props: Props) => {
  const { position = "manual", size = "medium", className } = props;

  const logoSize = {
    small: "w-[15rem]",
    medium: "w-[30rem]",
    large: "w-[45rem]",
  };

  switch (position) {
    case "center":
      return (
        <img
          className="absolute top-44 -z-20"
          src={logoCP}
          alt="Logo Coaching Program"
        />
      );

    case "manual":
      return (
        <div
          className={clsx(
            "absolute overflow-hidden -z-20",
            logoSize[size],
            className
          )}
        >
          <img src={logoCP} alt="Logo Coaching Program" />
        </div>
      );

    default:
      return <></>;
  }
};

export default BackgroundLogo;
