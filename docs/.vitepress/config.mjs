import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Veo3 Prompt",
  description: "Veo提示词合集，助你少浪费积分",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '提示词', link: '/prompt/切割/切金色玻璃棒棒糖' }
    ],

    sidebar: [
      {
        text: '切割',
        items: [
          { text: '切金色玻璃棒棒糖', link: '/prompt/切割/切金色玻璃棒棒糖' },
          { text: '切冰块质感的杯子蛋糕', link: '/prompt/切割/切冰块质感的杯子蛋糕' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
