import { ScreenDirection, Screens } from "@common/types";
import { create } from "zustand";

interface ScreenState {
  currentScreen: Screens;
  previousScreen?: Screens;
  lastAction?: "prev" | "next";
  lastDirection?: ScreenDirection;
  move: (
    to: Screens,
    action: "prev" | "next",
    direction: ScreenDirection
  ) => void;
}

const useScreenStore = create<ScreenState>()((set) => ({
  currentScreen: "introduction",
  move: (to, action, direction) =>
    set((state) => ({
      currentScreen: to,
      previousScreen:
        action === "prev" ? state.currentScreen : state.previousScreen,
      lastAction: action,
      lastDirection: direction,
    })),
}));

export default useScreenStore;
