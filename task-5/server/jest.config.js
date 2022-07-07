/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/services/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    "text-summary",
    "lcov",
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "**/*.spec.ts",
  ],
};