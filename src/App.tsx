import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Screens } from "@common/types";
import IntroductionScreen from "@screens/1_Introduction";
import CurriculumScreen from "@screens/2_Curriculum";
import useScreenStore from "@state/screenNavigation/context";
import WebCurriculum from "@screens/3_WebCurriculum";
import MobileCurriculum from "@screens/4_MobileCurriculum";
import GameCurriculum from "@screens/5_GameCurriculum";
import useQueryState from "@common/hooks/useQueryState";

function App() {
  const { currentScreen, move, lastAction } = useScreenStore();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [currentPage, setCurrentPage] = useQueryState<Screens>("page");

  const screens: { [key in Screens]: JSX.Element } = {
    introduction: <IntroductionScreen />,
    curriculum: <CurriculumScreen />,
    webCurriculum: <WebCurriculum />,
    mobileCurriculum: <MobileCurriculum />,
    gameCurriculum: <GameCurriculum />,
  };

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);

      if (currentPage) {
        move(currentPage, "next");
      }
    }
  }, []);

  useEffect(() => {
    setCurrentPage(currentScreen);
  }, [currentScreen]);

  const screenTransition = {
    initial: isFirstLoad ? {} : { x: lastAction === "next" ? "100%" : "-100%" },
    animate: { x: 0 },
    exit: { x: lastAction === "next" ? "-100%" : "100%" },
    transition: { type: "tween", duration: 1 },
  };

  return (
    <div className="w-full h-full max-w-[428px] flex overflow-hidden mx-auto border border-gray-200/30">
      <motion.div
        className="w-full h-full bg-primary"
        key={currentScreen}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={screenTransition}
      >
        {screens[currentScreen]}
      </motion.div>
    </div>
  );
}

export default App;
