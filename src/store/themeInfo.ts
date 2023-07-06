import { create } from 'zustand'

// 全局主题变更
interface ThemeState {
  light: boolean
  change: () => void
}

const useThemeStore = create<ThemeState>((set) => ({
  light: true,
  change: () =>
    set((state) => ({
      light: !state.light,
    })),
}))

export default useThemeStore
