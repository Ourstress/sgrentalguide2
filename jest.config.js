module.exports = {
  // The transform section tells Jest that all js or jsx files need to be transformed
  // using a jest-preprocess.js file in the project root
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  // tells Jest how to handle imports
  // moduleNameMapper mocks static file imports which Jest can’t handle
  // For stylesheets, we need to use the package identity-obj-proxy
  // For all other assets we need to use a manual mock called fileMock.js
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  // tell Jest to ignore any tests in the node_modules or .cache directories
  testPathIgnorePatterns: ['node_modules', '.cache'],
  // Gatsby includes un-transpiled ES6 code
  // gatsby-browser-entry.js isn’t being transpiled before running in Jest.
  // Fix this by changing the default transformIgnorePatterns to exclude the gatsby module.
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  // globals section sets __PATH_PREFIX__, which is usually set by Gatsby, and which some components need.
  globals: {
    __PATH_PREFIX__: '',
  },
  // Need to set testURL to a valid URL, because some DOM APIs such as localStorage are unhappy with the default
  // Since we are using Jest 23.5.0 or later, testURL will default to http://localhost so you can skip this setting.
  // testURL: 'http://localhost',
  setupFiles: ['<rootDir>/loadershim.js'],
  setupTestFrameworkScriptFile: '<rootDir>/setup-test-env.js',
}
