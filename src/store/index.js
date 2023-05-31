import { create } from 'zustand'

const useStore = create((set) => ({
  light: false,
  change: () =>
    set((state) => ({
      light: !state.light,
    })),
}))

export default useStore
