module.exports = {
  theme: 'default-vue-a11y',
  title: 'Vue Axe',
  head: [
    ['meta', { name: 'theme-color', content: '#fff' }],
  ],
  themeConfig: {
    home: false,
    repo: 'vue-a11y/vue-axe',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        editLinkText: 'Edit this page on GitHub',
        sidebar: [
          '/',
          {
            title: "Guide",
            collapsable: false,
            children: [
              '/guide/',
              '/guide/options.md',
              '/guide/api.md',
              '/guide/locales.md',
            ]
          }
        ]
      }
    }
  }
}