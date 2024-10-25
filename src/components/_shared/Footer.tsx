import SlideIn from "@common/components/Animated/SlideIn";
import { ScreenDirection, Screens } from "@common/types";
import useScreenStore from "@state/screenNavigation/context";

interface Props {
  prevPage?: FooterNav;
  nextPage?: FooterNav;
  appearDelay?: number;
}

const Footer = (props: Props) => {
  const { prevPage, nextPage, appearDelay = 0.3 } = props;
  const { move } = useScreenStore();

  const buttonClass =
    "text-white flex gap-2 items-center border border-gray-300 p-1.5 px-3 rounded-md hover:bg-gray-300/40";

  return (
    <div className="pb-6 pt-3 px-7">
      <div className="flex justify-between">
        {prevPage && (
          <SlideIn from="bottom" delay={appearDelay}>
            <button
              className={buttonClass}
              onClick={() => move(prevPage.to, "prev", prevPage.direction)}
            >
              <span className="text-2xl -mt-0.5">←</span>
              <span className="text-xl">{prevPage.label}</span>
            </button>
          </SlideIn>
        )}
        {nextPage && (
          <SlideIn from="bottom" delay={appearDelay} className="ms-auto">
            <button
              className={buttonClass}
              onClick={() => move(nextPage.to, "next", nextPage.direction)}
            >
              <span className="text-xl">{nextPage.label}</span>
              <span className="text-2xl -mt-0.5">→</span>
            </button>
          </SlideIn>
        )}
      </div>
    </div>
  );
};

type FooterNav = {
  label: string;
  to: Screens;
  direction: ScreenDirection;
};

export default Footer;
export type { FooterNav };
