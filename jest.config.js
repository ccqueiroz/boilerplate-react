module.exports = {
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/*.{js,jsx,ts,tsx}',
    '!src/styles/*.{js,jsx,ts,tsx}',
    '!src/styles/**/*.{js,jsx,ts,tsx}',
    '!src/config/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/', '<rootDir>/src/reportWebVitals.ts'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {'\\.(css|scss|sass)$': 'identity-obj-proxy'},
};
