import Appear from "@common/components/Animated/Appear";
import LineAppear from "@common/components/Animated/LineAppear";
import TrainAppear from "@common/components/Animated/TrainAppear";

const CurriculumList = () => {
  const steps: Steps[] = [
    {
      title: "Pengenalan Unity",
      description:
        "Belajar dasar-dasar Unity, tools yang digunakan, dan konsep-konsep dasar pemrograman.",
    },
    {
      title: "Pengenalan C#",
      description:
        "Belajar dasar-dasar C#, tools yang digunakan, dan konsep-konsep dasar pemrograman.",
    },
    {
      title: "Unity Lanjutan",
      description: "Belajar Unity Physics, Unity Animation, dan Unity UI.",
    },
  ];

  return (
    <div className="flex h-full">
      <div className="mx-auto mt-10 flex flex-col text-white overflow-y-scroll">
        {steps.map((item, index) => (
          <div key={index} className="relative flex items-start py-4">
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
                className="absolute left-3.5 top-7 w-px h-full bg-white -z-10"
              />
            )}

            {/* Step Content */}
            <div className="ms-4 w-72">
              <TrainAppear delay={(index + 1) * 0.45 + 0.4}>
                <span className="font-semibold text-lg">{item.title}</span>
              </TrainAppear>
              <TrainAppear
                delay={(index + 1) * 0.45 + 0.9}
                from="top"
                duration={0.3}
              >
                <div className="opacity-90">{item.description}</div>
              </TrainAppear>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type Steps = {
  title: string;
  description: string;
};

export default CurriculumList;
