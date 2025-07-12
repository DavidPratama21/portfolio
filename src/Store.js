import { create } from "zustand";

export const useStore = create((set) => ({
    darkMode: "dark",
    toggleDarkMode: () =>
        set((state) => {
            const newMode = state.darkMode === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newMode);
            return { darkMode: newMode };
        }),
}));
