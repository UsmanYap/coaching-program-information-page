import axios from "axios";
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
      try {
        const res = await axios.head(`${basePath}/${file}`);
        const lastModified = res.headers["last-modified"];

        if (lastModified) {
          const parsedLastModified = moment(lastModified).format(
            "HH:mm:ss, DD-MM-YYYY"
          );
          return {
            fileName: file,
            lastModified: parsedLastModified,
          };
        }
      } catch (error) {
        console.error("Error fetching file headers:", error);
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
    const res = await axios.head(filePath);
    if (res.status !== 200) {
      throw new Error("File not found");
    }

    const lastModified = res.headers["last-modified"];
    if (!lastModified) {
      return false;
    }

    const parsedLastModified = moment(lastModified).format(
      "HH:mm:ss, DD-MM-YYYY"
    );
    addDownloadedFile(`${filePath} (${parsedLastModified})`);

    const link = document.createElement("a");
    const url = URL.createObjectURL(res.data);
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("File download failed:", err);
    return false;
  }

  return true;
};
