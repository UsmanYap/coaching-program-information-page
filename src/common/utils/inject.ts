import introduction from "@data/1-introduction.json";
import webCurriculum from "@data/3-webCurriculum.json";
import mobileCurriculum from "@data/4-mobileCurriculum.json";
import gameCurriculum from "@data/5-gameCurriculum.json";

export function inject<T = string>(jsonName: string): T {
  let jsonObject: T;

  switch (jsonName) {
    case "introduction":
      jsonObject = introduction as T;
      break;
    case "webCurriculum":
      jsonObject = webCurriculum as T;
      break;
    case "mobileCurriculum":
      jsonObject = mobileCurriculum as T;
      break;
    case "gameCurriculum":
      jsonObject = gameCurriculum as T;
      break;

    default:
      throw new Error(`No JSON file found for name: ${jsonName}`);
  }

  if (jsonObject === undefined) {
    return "" as T;
  }

  return jsonObject as T;
}
