import CurriculumList from "@components/3-WebCurriculum/A_CurriculumList";
import BackgroundLogo from "@components/_shared/BackgroundLogo";
import Footer from "@components/_shared/Footer";
import ScreenTitle from "@components/_shared/ScreenTitle";
import { CgWebsite } from "react-icons/cg";
import webDev from "@assets/webDev.webp";

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
        <Footer
          prevPage={{ label: "Kurikulum", to: "curriculum", direction: "left" }}
        />
      </div>

      <img
        src={webDev}
        className="absolute -z-20 bottom-36 -right-20 scale-125 opacity-15"
      />

      <BackgroundLogo className="-left-56" />
    </div>
  );
};

export default WebCurriculum;
