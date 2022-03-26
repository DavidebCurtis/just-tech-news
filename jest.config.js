/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,

  collectCoverageFrom: ["src/**/*.js"],
  coverageDirectory: "<rootDir>/coverage",
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },

  testEnvironment: "node",

  coverageProvider: "v8",

  moduleFileExtensions: ["js"],

  testMatch: ["**/__tests__/**/*.test.(js)"],

  watchPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/server.js"
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/src/server.js"]
};
