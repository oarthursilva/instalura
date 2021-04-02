module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules',
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '/node_modules/',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
  ],
};
