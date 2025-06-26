import { configDefaults, defineProject } from 'vitest/config';

export default defineProject({
  test: {
    include: ['specs/*.spec.ts'],
    exclude: [...configDefaults.exclude, '**/e2e/**'],
  },
});
