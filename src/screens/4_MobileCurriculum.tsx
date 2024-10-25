import CurriculumList from "@components/4-MobileCurriculum/A_CurriculumList";
import BackgroundLogo from "@components/_shared/BackgroundLogo";
import Footer from "@components/_shared/Footer";
import ScreenTitle from "@components/_shared/ScreenTitle";
import { FaMobileAlt } from "react-icons/fa";
import mobileDev from "@assets/mobileDev.webp";

const MobileCurriculum = () => {
  return (
    <div className="h-full flex flex-col">
      <ScreenTitle
        title="Mobile Curriculum"
        icon={<FaMobileAlt className="w-8 h-8" />}
      />
      <div className="h-full overflow-hidden">
        <CurriculumList />
      </div>
      <div className="mt-auto">
        <Footer
          prevPage={{ label: "Kurikulum", to: "curriculum", direction: "left" }}
        />
      </div>

      <img
        src={mobileDev}
        className="absolute -z-20 bottom-24 -right-24 scale-100 opacity-15"
      />

      <BackgroundLogo className="-left-56" />
    </div>
  );
};

export default MobileCurriculum;
