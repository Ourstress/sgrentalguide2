// set up your Babel config
// we have npm install -D babel-preset-gatsby
const babelOptions = {
  presets: ['babel-preset-gatsby'],
}
module.exports = require('babel-jest').createTransformer(babelOptions)
