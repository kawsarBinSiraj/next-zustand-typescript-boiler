import { create } from "zustand";

type Store = {
    count: number;
    inc: () => void;
    allRemove: () => void;
};

const useStore = create<Store>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    allRemove: () => set((state) => ({ count: 0 })),
}));

export default useStore;
