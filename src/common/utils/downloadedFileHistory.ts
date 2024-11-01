import { ValidFile } from "@common/types";

export const isFileHasDownloaded = (
  basePath: string,
  file: ValidFile
): boolean => {
  const fileItem = `${basePath}/${file.fileName} (${file.lastModified})`;

  const downloadedFiles = localStorage.getItem("downloadedFiles");
  if (downloadedFiles) {
    const files = JSON.parse(downloadedFiles);
    return files.includes(fileItem);
  }

  return false;
};

export const addDownloadedFile = (file: string): void => {
  const downloadedFiles = localStorage.getItem("downloadedFiles");
  if (downloadedFiles) {
    const files = JSON.parse(downloadedFiles);
    if (!files.includes(file)) {
      files.push(file);
      localStorage.setItem("downloadedFiles", JSON.stringify(files));
    }
  } else {
    localStorage.setItem("downloadedFiles", JSON.stringify([file]));
  }
};
