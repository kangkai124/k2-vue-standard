module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [['import', {
    libraryName: 'iview',
    libraryDirectory: 'src/components'
  }]],
  'env': {
    'test': {
      'plugins': ['transform-runtime'],
      'presets': [
        ['env', { 'targets': { 'node': 'current' }}]
      ]
    }
  }
}
