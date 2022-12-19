import { defineComponent } from 'vue'
import style from './less/header.module.less'

export default defineComponent({
  name: 'Header',
  setup(props, ctx) {
    return () => (
      <>
        <div class={style.container}></div>
      </>
    )
  },
})
