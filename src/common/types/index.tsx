export type Screens =
  | "introduction"
  | "curriculum"
  | "webCurriculum"
  | "mobileCurriculum"
  | "gameCurriculum";

export type ScreenDirection = "left" | "right" | "up" | "down";

export type CurriculumData = {
  title: string;
  description: string;
  subFolder: string;
  listFiles: string[];
};

export type Subject = "web" | "mobile" | "game";

export type IntroductionData = {
  angkatan: string;
};
