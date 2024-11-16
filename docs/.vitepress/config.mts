import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kinToys",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'ChromeWebStore', link: 'https://chromewebstore.google.com/detail/kintoys/johmoplafihagepgbceblbhlmacejoee' }
    ],

    sidebar: [
      {
        text: 'usage',
        items: [
          { text: '使い方', link: '/usage' },
          { text: 'テンプレート記法', link: '/template-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/motohasystem/kinToys' }
    ]
  }
})
