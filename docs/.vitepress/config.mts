import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kinToys",
  description: "Keep Integrating New Toys",
  locales: {
    root: {
      label: 'Japanese',
      lang: 'ja'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ChromeWebStore', link: 'https://chromewebstore.google.com/detail/kintoys/johmoplafihagepgbceblbhlmacejoee' }
    ],

    sidebar: [
      {
        text: 'usage',
        items: [
          { text: '使い方', link: '/usage' },
          { text: 'テンプレート記法', link: '/template-examples' },
          { text: 'オプション画面', link: '/option-screen' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/motohasystem/kinToys' }
    ]
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:image", content: "https://kintoys.app/og.png" }],
    ["meta", { property: "og:site_name", content: "kinToys" }],
    [
      'script',
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-1VC62B4WWE' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1VC62B4WWE');`
    ]
  ],
})
