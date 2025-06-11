import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    testTimeout: 60000, // 60s timeout for pack tests (they can be slow)
    hookTimeout: 60000,
  },
});
