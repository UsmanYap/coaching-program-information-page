import Footer from "@components/_shared/Footer";
import FieldList from "@components/2-Curriculum/A_FieldList";
import BackgroundLogo from "@components/_shared/BackgroundLogo";

const CurriculumScreen = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full">
        <FieldList />
      </div>
      <div className="mt-auto">
        <Footer
          prevPage={{ label: "Home", to: "introduction", direction: "left" }}
        />
      </div>

      <BackgroundLogo className="-right-56" />
      <BackgroundLogo size="small" className="bottom-10 -left-24" />
    </div>
  );
};

export default CurriculumScreen;
