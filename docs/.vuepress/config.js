module.exports = {
  base: "/resume/",
  dest: 'dist',
  title: 'Yixiu resume',
  description: '一修的简历',
  theme: 'resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: ['/']
      }
    ]
  }
}