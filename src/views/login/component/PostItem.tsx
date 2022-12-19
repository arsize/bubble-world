import { defineComponent } from 'vue'
import style from './item.module.less'

export default defineComponent({
  name: 'post-item',
  setup(props, ctx) {
    return () => (
      <>
        <div class={style.itemBox}>hello</div>
      </>
    )
  },
})
