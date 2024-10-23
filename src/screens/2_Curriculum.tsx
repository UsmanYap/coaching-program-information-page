import Footer from "@components/_shared/Footer";
import FieldList from "@components/2-Curriculum/A_FieldList";

const CurriculumScreen = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full">
        <FieldList />
      </div>
      <div className="mt-auto">
        <Footer prevPage={{ label: "Home", to: "introduction" }} />
      </div>
    </div>
  );
};

export default CurriculumScreen;
