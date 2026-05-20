import type { TestUserConfig, ViteUserConfig } from 'vitest/config'

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig
}

const config: VitestConfig = {
  test: {
    exclude: ['dist/**', 'node_modules/**'],
    reporters: process.env.CI
      ? ['verbose', ['junit', { outputFile: 'test-results/junit.xml' }]]
      : ['verbose'],
  },
}

export default config
