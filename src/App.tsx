import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { NConfigProvider, darkTheme } from 'naive-ui'

export default defineComponent({
  name: 'App',
  setup(props, ctx) {
    return () => (
      <NConfigProvider theme={darkTheme}>
        <RouterView />
      </NConfigProvider>
    )
  },
})
