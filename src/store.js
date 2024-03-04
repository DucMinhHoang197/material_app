import create from "zustand";

export const useLogStore = create((set) => ({
  isLogged: window.localStorage.getItem("isLogged") === "true",
  setLogIn: () => set(() => ({ isLogged: true })),
  setLogOut: () => window.localStorage.removeItem("isLogged"),
}));
