import { defineComponent } from 'vue'
import style from './less/header.module.less'

export default defineComponent({
  name: 'Header',
  setup(props, ctx) {
    return () => (
      <>
        <div class={style.container}>
          <div class={style.widthLimit}>
            <div class={style.logo}>LOGO</div>

            <div class={style.centerBar}>
              <div>首页</div>
              <div>文库</div>
            </div>

            <div class={style.btnBox}>
              <div>Aa</div>
              <div>登录</div>
              <div>注册</div>
              <div>写文章</div>
            </div>
          </div>
        </div>
      </>
    )
  },
})
