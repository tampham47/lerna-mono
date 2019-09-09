module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'window',
      externals: {
        react: 'React'
      }
    }
  }
}
