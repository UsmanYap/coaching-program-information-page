import CurriculumList from "@components/5-GameCurriculum/A_CurriculumList";
import Footer from "@components/_shared/Footer";
import ScreenTitle from "@components/_shared/ScreenTitle";
import { IoGameController } from "react-icons/io5";

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
        <Footer prevPage={{ label: "Kurikulum", to: "curriculum" }} />
      </div>
    </div>
  );
};

export default GameCurriculum;
