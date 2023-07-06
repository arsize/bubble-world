import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// 用户相关信息
interface UserState {
  token: string
  isFirstOpen: boolean //是否第一次进来
  changeOpenStatus: (val: boolean) => void
}

const useUsersStore = create<UserState>()(
  persist(
    (set) => ({
      token: '',
      isFirstOpen: true,
      changeOpenStatus: (val: boolean) => {
        set({
          isFirstOpen: val,
        })
      },
    }),
    {
      name: 'user-info',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useUsersStore
