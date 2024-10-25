import AnimatedHeight from "@common/components/Animated/AnimatedHeight";
import TrainAppear from "@common/components/Animated/TrainAppear";
import { CurriculumItemContent } from "@common/types";
import { downloadFile } from "@common/utils/downloadFile";
import { useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";

interface Props {
  item: CurriculumItemContent;
  index: number;
}

const CurriculumItem = (props: Props) => {
  const { item, index } = props;
  const [isOpen, setIsOpen] = useState(false);

  // TODO: implement with dynamic materi files
  const fileList = [
    "/materi/web/1.docx",
    "/materi/web/1.pptx",
    "/materi/web/1.txt",
  ];

  const handleDownloadFile = (file: string) => {
    // TODO: add error handling
    downloadFile(file, file.split("/").pop()!);
  };

  return (
    <div>
      <div
        className="flex pb-2 ms-1 ps-3 hover:bg-zinc-700/20 transition duration-150 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full">
          <TrainAppear delay={(index + 1) * 0.45 + 0.4}>
            <span className="font-semibold text-lg">{item.title}</span>
          </TrainAppear>
          <TrainAppear
            delay={(index + 1) * 0.45 + 0.9}
            from="top"
            duration={0.3}
          >
            <div className="opacity-90 text-justify">{item.description}</div>
          </TrainAppear>
        </div>
        <div className="mx-4 my-auto">
          <TrainAppear delay={(index + 1) * 0.45 + 1}>
            <FaChevronDown className="text-white w-5 h-5 mt-1" />
          </TrainAppear>
        </div>
      </div>

      <AnimatedHeight isOpen={isOpen}>
        <div className="bg-zinc-800/20 pb-2 ms-1 px-3 pt-2 flex flex-col gap-2">
          {fileList.map((file, index) => (
            <div
              className="flex items-center gap-3 cursor-pointer"
              key={index}
              onClick={() => handleDownloadFile(file)}
            >
              <FaDownload /> Download Materi {file.split("/").pop()}
            </div>
          ))}
        </div>
      </AnimatedHeight>
    </div>
  );
};

export default CurriculumItem;
