import CurriculumList from "@components/3-WebCurriculum/A_CurriculumList";
import Footer from "@components/_shared/Footer";
import ScreenTitle from "@components/_shared/ScreenTitle";
import { CgWebsite } from "react-icons/cg";

const WebCurriculum = () => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <ScreenTitle
          title="Web Curriculum"
          icon={<CgWebsite className="w-8 h-8" />}
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

export default WebCurriculum;
