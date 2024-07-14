// jest.config.js or package.json

// For jest.config.js
module.exports = {
    // other Jest config options
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: [
      '**/__tests__/**/*.js',   // Matches all .js files in __tests__ folders
      '**/?(*.)+(spec|test).js' // Matches all .js files ending with .spec.js or .test.js
    ],
  };