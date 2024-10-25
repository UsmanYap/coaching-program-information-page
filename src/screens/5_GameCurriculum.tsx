import CurriculumList from "@components/5-GameCurriculum/A_CurriculumList";
import BackgroundLogo from "@components/_shared/BackgroundLogo";
import Footer from "@components/_shared/Footer";
import ScreenTitle from "@components/_shared/ScreenTitle";
import { IoGameController } from "react-icons/io5";
import gameDev from "@assets/gameDev.webp";

const GameCurriculum = () => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <ScreenTitle
          title="Game Curriculum"
          icon={<IoGameController className="w-8 h-8" />}
        />
      </div>
      <div className="h-full overflow-hidden">
        <CurriculumList />
      </div>
      <div className="mt-auto">
        <Footer
          prevPage={{ label: "Kurikulum", to: "curriculum", direction: "left" }}
        />
      </div>

      <img
        src={gameDev}
        className="absolute -z-20 bottom-28 -right-24 scale-100 opacity-15"
      />

      <BackgroundLogo className="-left-56" />
    </div>
  );
};

export default GameCurriculum;
