export type Screens =
  | "introduction"
  | "curriculum"
  | "webCurriculum"
  | "mobileCurriculum"
  | "gameCurriculum";

export type ScreenDirection = "left" | "right" | "up" | "down";

export type CurriculumItemContent = {
  title: string;
  description: string;
};
