export const isFileHasDownloaded = (file: string): boolean => {
  const downloadedFiles = localStorage.getItem("downloadedFiles");
  if (downloadedFiles) {
    const files = JSON.parse(downloadedFiles);
    return files.includes(file);
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
