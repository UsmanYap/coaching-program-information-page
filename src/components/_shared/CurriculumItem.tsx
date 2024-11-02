import AnimatedHeight from "@common/components/Animated/AnimatedHeight";
import Rotate from "@common/components/Animated/Rotate";
import TrainAppear from "@common/components/Animated/TrainAppear";
import LoadingSpinner from "@common/components/Icons/Spinner";
import { CurriculumData, Subject, ValidFile } from "@common/types";
import { isFileHasDownloaded } from "@common/utils/downloadedFileHistory";
import { downloadFile, validateFiles } from "@common/utils/files";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaCheck, FaChevronDown, FaDownload } from "react-icons/fa";

interface Props {
  data: CurriculumData;
  index: number;
  subject: Subject;
}

const CurriculumItem = (props: Props) => {
  const { data, index, subject } = props;
  const { title, description, subFolder, listFiles } = data;

  const [dropdownState, setDropdownState] = useState<DropdownState>("closed");
  const [fileToDownload, setFileToDownload] = useState<string | null>(null);
  const [iconState, setIconState] = useState<IconState>("idle");
  const [validFiles, setValidFiles] = useState<ValidFile[]>([]);

  const baseFilePath = `materi/${subject}/${subFolder}`;

  useEffect(() => {
    if (dropdownState === "opened" && validFiles.length === 0) {
      setDropdownState("loading");
      validateFiles(baseFilePath, listFiles).then((files) => {
        setValidFiles(files);
        setDropdownState((prevState) =>
          prevState === "loading" ? "opened" : prevState
        );
      });
    }
  }, [dropdownState, baseFilePath, listFiles, validFiles.length]);

  const handleDownloadFile = async (file: string) => {
    setFileToDownload(file);
    setIconState("downloading");

    const filePath = `${baseFilePath}/${file}`;
    const res = await downloadFile(filePath, file);
    if (res) {
      setIconState("success");
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

  const isDropdownOpened = dropdownState !== "closed";
  const isFileExists = subFolder && validFiles.length > 0;
  const isFileDownloaded = (file: ValidFile) =>
    isFileHasDownloaded(baseFilePath, file);

  return (
    <div>
      <div
        className={clsx(
          "flex pb-2 ms-1 ps-3 hover:bg-zinc-700/20 transition duration-150 rounded-md",
          dropdownState !== "closed" && "bg-zinc-700/20"
        )}
        onClick={() => setDropdownState(isDropdownOpened ? "closed" : "opened")}
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
            <Rotate trigger={isDropdownOpened}>
              <FaChevronDown className="text-white w-5 h-5 mt-1" />
            </Rotate>
          </TrainAppear>
        </div>
      </div>

      {/* Dropdown Content */}
      <AnimatedHeight isOpen={isDropdownOpened}>
        <div className="bg-zinc-800/20 pb-2 ms-1 px-3 pt-2 flex flex-col gap-2">
          {dropdownState === "loading" ? (
            <div className="flex items-center gap-2">
              <LoadingSpinner className="h-6 w-6" />
              <span className="text-gray-300/80">Loading...</span>
            </div>
          ) : isFileExists ? (
            validFiles.map((file, index) => (
              <div
                key={index}
                className={clsx(
                  "flex items-center gap-3 cursor-pointer w-fit pe-8",
                  isFileDownloaded(file) && "text-gray-400/80"
                )}
                onClick={() => handleDownloadFile(file.fileName)}
              >
                {
                  iconStateMap[
                    file.fileName === fileToDownload ? iconState : "idle"
                  ]
                }
                <span>{file.fileName}</span>
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
type DropdownState = "closed" | "opened" | "loading";

export default CurriculumItem;
