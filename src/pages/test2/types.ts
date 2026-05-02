export type Stage =
  | "intro"
  | "level1-intro"
  | "level1-play"
  | "level1-done"
  | "level2-intro"
  | "level2-play"
  | "level2-done"
  | "level3-intro"
  | "level3-play"
  | "level3-done"
  | "final";

export interface Progress {
  stage: Stage;
  completedLevels: number[];
}

export const STORAGE_KEY = "conty-dedicatoria-tuty-v1";
