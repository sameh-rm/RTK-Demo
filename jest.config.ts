import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['']
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
  setupFiles: ['./jest.polyfills.js'],
  modulePaths: ['<rootDir>']
};

export default createJestConfig(config);
