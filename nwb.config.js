module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactResponsiveSidebarMenu',
      externals: {
        react: 'React'
      }
    }
  }
}
