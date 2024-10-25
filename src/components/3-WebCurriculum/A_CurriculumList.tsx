import Appear from "@common/components/Animated/Appear";
import LineAppear from "@common/components/Animated/LineAppear";
import inject from "@common/utils/inject";
import { CurriculumItemContent } from "@common/types";
import CurriculumItem from "./A1_CurriculumItem";

const CurriculumList = () => {
  const steps: CurriculumItemContent[] = inject("webCurriculum", "steps");

  return (
    <div className="flex h-full">
      <div className="mx-auto mt-5 flex flex-col gap-4 text-white overflow-y-scroll w-full">
        {steps.map((item, index) => (
          <div
            key={index}
            className="relative flex items-start px-4 w-full text-left cursor-pointer"
          >
            {/* Circle with step number */}
            <Appear delay={(index + 1) * 0.45} duration={0.3}>
              <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center z-10">
                <span className="text-black font-semibold">{index + 1}</span>
              </div>
            </Appear>

            {/* Vertical Line */}
            {index + 1 !== steps.length && (
              <LineAppear
                direction="vertical"
                delay={(index + 1) * 0.5}
                duration={0.4}
                className="absolute left-[1.82rem] top-7 w-px h-full bg-white -z-10"
              />
            )}

            <CurriculumItem item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumList;
