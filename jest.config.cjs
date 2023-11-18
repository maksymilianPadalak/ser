module.exports = {
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'babel-jest',
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    '^@/(.*)$': '<rootDir>/src/\$1',
    '^@atoms/(.*)$': '<rootDir>/src/ui/atoms/\$1',
    '^@molecules/(.*)$': '<rootDir>/src/ui/molecules/\$1',
    '^@organisms/(.*)$': '<rootDir>/src/ui/organisms/\$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/\$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/\$1',
  },
  preset: 'ts-jest',
};