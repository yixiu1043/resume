module.exports = {
  base: '/resume/',
  dest: 'dist',
  title: '一修的简历',
  description: '一修的简历',
  theme: 'resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: [ '/' ]
      }
    ]
  }
}