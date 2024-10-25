import { useEffect, useState } from "react";
import { Screens } from "@common/types";
import IntroductionScreen from "@screens/1_Introduction";
import CurriculumScreen from "@screens/2_Curriculum";
import useScreenStore from "@state/screenNavigation/context";
import WebCurriculum from "@screens/3_WebCurriculum";
import MobileCurriculum from "@screens/4_MobileCurriculum";
import GameCurriculum from "@screens/5_GameCurriculum";
import useQueryState from "@common/hooks/useQueryState";
import ScreenTransition from "@common/components/Animated/ScreenTransition";

function App() {
  const { currentScreen, move } = useScreenStore();
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
        move(currentPage, "next", "left");
      }
    }
  }, []);

  useEffect(() => {
    setCurrentPage(currentScreen);
  }, [currentScreen]);

  return (
    <div className="w-full h-full max-w-[428px] flex mx-auto overflow-hidden md:border">
      <ScreenTransition disabled={isFirstLoad}>
        {screens[currentScreen]}
      </ScreenTransition>
    </div>
  );
}

export default App;
