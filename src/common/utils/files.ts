import { addDownloadedFile } from "./downloadedFileHistory";

export const downloadFile = async (
  filePath: string,
  fileName: string
): Promise<boolean> => {
  try {
    addDownloadedFile(filePath);

    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error("File download failed:", err);
    return false;
  }

  return true;
};
