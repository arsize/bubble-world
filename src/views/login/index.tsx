import { defineComponent, ref } from 'vue'
import './index.less'
import { NButton } from 'naive-ui'

import PostItem from './component/PostItem'
import router from '@/router'

const pre_port_items = ref([1, 2, 3, 4])

const tap = () => {
  router.replace('/')
}

export default defineComponent({
  name: 'login',
  setup(props, ctx) {
    return () => (
      <>
        <div class="container">
          <div class="flex-left">
            <div class="roll-list">
              {pre_port_items.value.map((item) => (
                <PostItem />
              ))}
            </div>
          </div>
          <div class="flex-right">
            <NButton onClick={tap}>登录</NButton>
          </div>
        </div>
      </>
    )
  },
})
