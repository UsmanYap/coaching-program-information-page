import { ValidFile } from "@common/types";
import { addDownloadedFile } from "./downloadedFileHistory";
import moment from "moment";

export const validateFiles = async (
  basePath: string,
  fileName: string[]
): Promise<ValidFile[]> => {
  if (fileName.length === 0) {
    return [];
  }

  const validFiles = await Promise.all(
    fileName.map(async (file) => {
      const res = await fetch(`${basePath}/${file}`, { method: "HEAD" });
      const lastModified = res.headers.get("last-modified");

      if (lastModified !== null) {
        const parsedLastModified = moment(lastModified).format(
          "HH:mm:ss, DD-MM-YYYY"
        );
        return {
          fileName: file,
          lastModified: parsedLastModified,
        };
      }

      return null;
    })
  );

  return validFiles.filter((file) => file !== null);
};

export const downloadFile = async (
  filePath: string,
  fileName: string
): Promise<boolean> => {
  try {
    const res = await fetch(filePath, { method: "GET" });
    if (!res.ok) {
      throw new Error("File not found");
    }

    const lastModified = res.headers.get("last-modified");
    if (!lastModified) {
      return false;
    }

    const parsedLastModified = moment(lastModified).format(
      "HH:mm:ss, DD-MM-YYYY"
    );
    addDownloadedFile(`${filePath} (${parsedLastModified})`);

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
