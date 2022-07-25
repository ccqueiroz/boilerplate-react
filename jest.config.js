module.exports = {
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  roots: ['<rootDir>'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.tsx',
    '!src/config/stylesGlobal/*.{js,jsx,ts,tsx}',
    '!src/index.tsx',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/', '<rootDir>/src/reportWebVitals.ts'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {'\\.(css|scss|sass)$': 'identity-obj-proxy'},
};
