import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavorite = create(persist((set) => ({
    favorites: [],
    setFavorite: (id) => set((state) => ({
        favorites: [...state.favorites, {id: id}],
    })),
    removeFavorite: (id) => set ((state) => ({
        favorites: state.favorites.filter((favorite) => favorite.id !== id),
    }))
})),
);
export default useFavorite;