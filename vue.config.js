module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/k2-vue-standard/'
    : '/',
  outputDir: 'docs'
}
