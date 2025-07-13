import DefaultTheme from 'vitepress/theme'
import Video from './video.vue'
import './global.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('Video', Video)
  }
}