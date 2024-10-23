import { Screens } from "@common/types";
import introduction from "@data/1-introduction.json";
import webCurriculum from "@data/3-webCurriculum.json";

type JsonData = Record<string, unknown>;

function inject<T = string>(jsonName: Screens, propertyName: string): T {
  let jsonObject: JsonData;

  switch (jsonName) {
    case "introduction":
      jsonObject = introduction;
      break;
    case "webCurriculum":
      jsonObject = webCurriculum;
      break;
    case "mobileCurriculum":
      jsonObject = webCurriculum;
      break;

    case "gameCurriculum":
      jsonObject = webCurriculum;
      break;

    default:
      throw new Error(`No JSON file found for name: ${jsonName}`);
  }

  const propertyValue = jsonObject[propertyName];
  if (propertyValue === undefined) {
    return "" as T;
  }

  return propertyValue as T;
}

export default inject;
