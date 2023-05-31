import { create } from 'zustand'

const userStore = create((set) => ({
  light: false,
  change: () =>
    set((state) => ({
      light: !state.light,
    })),
}))

export default userStore
