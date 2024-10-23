import webDev from "@assets/webDev.webp";
import mobileDev from "@assets/mobileDev.webp";
import gameDev from "@assets/gameDev.webp";
import useScreenStore from "@state/screenNavigation/context";
import { Screens } from "@common/types";
import { FaChevronRight } from "react-icons/fa";
import SlideIn from "@common/components/Animated/SlideIn";

const FieldList = () => {
  const { move } = useScreenStore();

  const fieldList: FieldListType[] = [
    {
      name: "Web",
      image: webDev,
      screen: "webCurriculum",
    },
    {
      name: "Mobile",
      image: mobileDev,
      screen: "mobileCurriculum",
    },
    {
      name: "Game",
      image: gameDev,
      screen: "gameCurriculum",
    },
  ];

  return (
    <div className="flex h-full">
      <div className="m-auto flex flex-col gap-10">
        {fieldList.map((item, index) => (
          <SlideIn key={index} delay={index * 0.3}>
            <div
              onClick={() => move(item.screen, "next")}
              className="h-fit flex gap-4 border border-transparent hover:border-white ms-5 pe-5 rounded-md cursor-pointer"
            >
              {/* Image */}
              <div className="border border-gray-200/80 rounded-md">
                <img
                  src={item.image}
                  className="w-32 h-32 object-cover bg-gray-200 rounded-md"
                />
              </div>

              {/* Text */}
              <span className="flex flex-col h-fit my-auto text-white font-semibold">
                <span className="text-3xl">{item.name}</span>
                <span className="-mt-1 text-2xl">Developer</span>
              </span>

              {/* Arrow */}
              <span className="text-3xl text-white my-auto ms-2">
                <FaChevronRight className="text-lg" />
              </span>
            </div>
          </SlideIn>
        ))}
      </div>
    </div>
  );
};

type FieldListType = {
  name: string;
  image: string;
  screen: Screens;
};

export default FieldList;
