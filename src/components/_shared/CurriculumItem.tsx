import AnimatedHeight from "@common/components/Animated/AnimatedHeight";
import Rotate from "@common/components/Animated/Rotate";
import TrainAppear from "@common/components/Animated/TrainAppear";
import LoadingSpinner from "@common/components/Icons/Spinner";
import { CurriculumData, Subject } from "@common/types";
import {
  addDownloadedFile,
  isFileHasDownloaded,
} from "@common/utils/downloadedFileHistory";
import { downloadFile } from "@common/utils/files";
import clsx from "clsx";
import { useState } from "react";
import { FaCheck, FaChevronDown, FaDownload } from "react-icons/fa";

interface Props {
  data: CurriculumData;
  index: number;
  subject: Subject;
}

const CurriculumItem = (props: Props) => {
  const { data, index, subject } = props;
  const { title, description, subFolder, listFiles } = data;

  const [isOpen, setIsOpen] = useState(false);
  const [fileToDownload, setFileToDownload] = useState<string | null>(null);
  const [iconState, setIconState] = useState<IconState>("idle");

  const baseFilePath = `materi/${subject}/${subFolder}`;

  const handleDownloadFile = async (file: string) => {
    setFileToDownload(file);
    setIconState("downloading");

    const filePath = `${baseFilePath}/${file}`;
    const res = await downloadFile(filePath, file);
    if (res) {
      setIconState("success");
      addDownloadedFile(filePath);
    } else {
      setIconState("failed");
    }
    setTimeout(() => {
      setIconState("idle");
      setFileToDownload(null);
    }, 2000);
  };

  const iconStateMap = {
    idle: <FaDownload />,
    downloading: <LoadingSpinner />,
    success: <FaCheck />,
    failed: <FaDownload />,
  };

  const isFileExists = subFolder && listFiles.length > 0;
  const isFileDownloaded = (file: string) =>
    isFileHasDownloaded(`${baseFilePath}/${file}`);

  return (
    <div>
      <div
        className={clsx(
          "flex pb-2 ms-1 ps-3 hover:bg-zinc-700/20 transition duration-150 rounded-md",
          isOpen && "bg-zinc-700/20"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Title & Description */}
        <div className="w-full">
          <TrainAppear delay={(index + 1) * 0.45 + 0.4}>
            <span className="font-semibold text-lg">{title}</span>
          </TrainAppear>
          <TrainAppear
            delay={(index + 1) * 0.45 + 0.9}
            from="top"
            duration={0.3}
          >
            <div className="opacity-90 text-justify">{description}</div>
          </TrainAppear>
        </div>

        {/* Dropdown Icon */}
        <div className="mx-4 my-auto">
          <TrainAppear delay={(index + 1) * 0.45 + 1}>
            <Rotate trigger={isOpen}>
              <FaChevronDown className="text-white w-5 h-5 mt-1" />
            </Rotate>
          </TrainAppear>
        </div>
      </div>

      {/* Dropdown Content */}
      <AnimatedHeight isOpen={isOpen}>
        <div className="bg-zinc-800/20 pb-2 ms-1 px-3 pt-2 flex flex-col gap-2">
          {isFileExists ? (
            listFiles.map((file, index) => (
              <div
                className={clsx(
                  "flex items-center gap-3 cursor-pointer w-fit pe-8",
                  isFileDownloaded(file) && "text-gray-400/80"
                )}
                key={index}
                onClick={() => handleDownloadFile(file)}
              >
                {iconStateMap[fileToDownload === file ? iconState : "idle"]}
                <span>{file}</span>
              </div>
            ))
          ) : (
            <div>Belum ada materi 😢</div>
          )}
        </div>
      </AnimatedHeight>
    </div>
  );
};

type IconState = "idle" | "downloading" | "success" | "failed";

export default CurriculumItem;
