

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: sidebars[title.toLowerCase()]
    }
  ]
}

module.exports = {
  title: 'ES6+',
  description: 'Input validation for Vue.js',
  serviceWorker: true,
  base: '/',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
    ['meta', { name: "theme-color", content: "#41b883" }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ES6+',
      description: 'Input validation for Vue.js'
    }
  },
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Bölüm 1', link: '/ch1/' },
          { text: 'Bölüm 2', link: '/ch2/' },
          { text: 'Bölüm 3', link: '/ch3/' },
          { text: 'Bölüm 4', link: '/ch4/' },
          { text: 'Bölüm 5', link: '/ch5/' },
          { text: 'Bölüm 6', link: '/ch6/' },
          { text: 'Bölüm 7', link: '/ch7/' },
          { text: 'Bölüm 8', link: '/ch8/' }
        ],
        sidebar: {
          '/ch1/': [''],
          '/ch2/': [''],
          '/ch3/': [''],
          '/ch4/': [''],
          '/ch5/': [''],
          '/ch6/': [''],
          '/ch7/': [''],
          '/ch8/': ['']
        }
      }
    }
  }
};