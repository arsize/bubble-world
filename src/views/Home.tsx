import { defineComponent } from 'vue'
import { NButton, NRadio } from 'naive-ui'

export default defineComponent({
  name: 'home',
  setup(props, ctx) {
    return () => (
      <>
        <div>hello2</div>
        <NButton type="default">moren </NButton>
        <NRadio checked>Now</NRadio>
      </>
    )
  },
})
