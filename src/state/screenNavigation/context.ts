import { Screens } from "@common/types";
import { create } from "zustand";

interface ScreenState {
  currentScreen: Screens;
  previousScreen?: Screens;
  lastAction?: "prev" | "next";
  move: (to: Screens, type: "prev" | "next") => void;
}

const useScreenStore = create<ScreenState>()((set) => ({
  currentScreen: "introduction",
  move: (to, type) =>
    set((state) => ({
      currentScreen: to,
      previousScreen:
        type === "prev" ? state.currentScreen : state.previousScreen,
      lastAction: type,
    })),
}));

export default useScreenStore;
