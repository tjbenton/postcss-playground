// Require the requirables, then send them to a modules object on the browser.
window.modules = {
  'postcss': require('postcss'),
  'postcss-spiffing': require('postcss-spiffing'),
  'autoprefixer-core': require('autoprefixer-core'),
  'postcss-simple-vars': require('postcss-simple-vars'),
  'postcss-nested': require('postcss-nested'),
  'postcss-discard-duplicates': require('postcss-discard-duplicates'),
  'postcss-cssnext': require('postcss-cssnext'),
  'postcss-scss': require('postcss-scss'),
}
