module.exports = {
  base: '/',
  dest: 'dist',
  theme: 'vuepress-theme-resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: [ '/' ]
      }
    ]
  }
}