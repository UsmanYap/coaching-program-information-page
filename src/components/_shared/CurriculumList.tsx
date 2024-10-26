import Appear from "@common/components/Animated/Appear";
import LineAppear from "@common/components/Animated/LineAppear";
import { CurriculumData, Screens, Subject } from "@common/types";
import { inject } from "@common/utils/inject";
import CurriculumItem from "./CurriculumItem";

interface Props {
  subject: Subject;
}

const CurriculumList = (props: Props) => {
  const { subject } = props;

  const curriculumMap = {
    web: "webCurriculum",
    mobile: "mobileCurriculum",
    game: "gameCurriculum",
  };

  const data = inject<CurriculumData[]>(curriculumMap[subject] as Screens);

  console.log(data);

  return (
    <div className="flex h-full">
      <div className="mx-auto mt-5 flex flex-col gap-4 text-white overflow-y-scroll w-full">
        {data.map((item, index) => (
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
            {index + 1 !== data.length && (
              <LineAppear
                direction="vertical"
                delay={(index + 1) * 0.5}
                duration={0.4}
                className="absolute left-[1.82rem] top-7 w-px h-full bg-white -z-10"
              />
            )}

            <CurriculumItem data={item} index={index} subject={subject} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumList;
