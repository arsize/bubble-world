import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { NConfigProvider, lightTheme } from 'naive-ui'

export default defineComponent({
  name: 'App',
  setup(props, ctx) {
    return () => (
      <NConfigProvider theme={lightTheme}>
        <RouterView />
      </NConfigProvider>
    )
  },
})
