import { create } from "zustand";

export const userStore = create(() => ({
    user: {
        userId: "",
        userName: "",
    },
    isLoggedIn: false,
    isLoading: false,
}));
