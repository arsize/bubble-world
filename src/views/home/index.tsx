import { defineComponent } from 'vue'
import { NButton, NRadio } from 'naive-ui'
import Header from '@/layout/Header'
import RecentlyUpdate from './parts/RecentlyUpdate'

export default defineComponent({
  name: 'Home',
  setup(props, ctx) {
    return () => (
      <>
        <Header />
        <RecentlyUpdate />
      </>
    )
  },
})
