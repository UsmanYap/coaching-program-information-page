import CurriculumList from "@components/4-MobileCurriculum/A_CurriculumList";
import Footer from "@components/_shared/Footer";
import ScreenTitle from "@components/_shared/ScreenTitle";
import { FaMobileAlt } from "react-icons/fa";

const MobileCurriculum = () => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <ScreenTitle
          title="Mobile Curriculum"
          icon={<FaMobileAlt className="w-8 h-8" />}
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

export default MobileCurriculum;
