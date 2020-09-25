// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  clearMocks: true,
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdaptor: 'react16',
  },
  setupFiles: [
    '<rootDir>/client/setupTests.js',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
