import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { getStuffFromEnv, resolveRef } from "./get-stuff-from-env";

vi.mock("next/headers", () => ({
  draftMode: async () => ({ isEnabled: true }),
  cookies: async () => ({ get: () => undefined }),
}));

// Mock fetch globally
const fetchSpy = vi.fn();
const originalEnv = { ...process.env };

beforeEach(() => {
  vi.stubGlobal("fetch", fetchSpy);
  fetchSpy.mockReset();
  fetchSpy.mockResolvedValue({
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve({
        id: "test-resolved-ref",
        ref: "main",
        repoHash: "abc123",
        type: "branch",
      }),
  });

  process.env = {
    ...originalEnv,
    NODE_ENV: "test",
    VERCEL_GIT_COMMIT_REF: "main",
    VERCEL_GIT_COMMIT_SHA: "abc123",
  };
});

afterEach(() => {
  process.env = originalEnv;
  vi.restoreAllMocks();
});

describe("resolveRef", () => {
  const baseArgs = {
    url: new URL("https://api.basehub.com/graphql"),
    token: "test-token",
    ref: null,
    gitBranch: null,
    gitCommitSHA: null,
    gitBranchDeploymentURL: null,
    productionDeploymentURL: null,
    apiVersion: "4",
    fallbackPlayground: undefined,
  };

  it("does not use cache: 'no-store' when draft is false", async () => {
    await resolveRef({ ...baseArgs, draft: false, revalidate: true });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [, fetchOptions] = fetchSpy.mock.calls[0]!;
    expect(fetchOptions.cache).not.toBe("no-store");
  });

  it("uses cache: 'no-store' when draft is true", async () => {
    await resolveRef({ ...baseArgs, draft: true, revalidate: true });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [, fetchOptions] = fetchSpy.mock.calls[0]!;
    expect(fetchOptions.cache).toBe("no-store");
  });

  it("does not use cache: 'no-store' when draft is undefined", async () => {
    await resolveRef({ ...baseArgs, revalidate: true });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [, fetchOptions] = fetchSpy.mock.calls[0]!;
    expect(fetchOptions.cache).not.toBe("no-store");
  });

  it("reuses resolved ref cache when revalidate is false", async () => {
    const args = {
      ...baseArgs,
      ref: "cache-ref",
      revalidate: false,
      draft: false,
    };

    await resolveRef(args);
    await resolveRef(args);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it("bypasses resolved ref cache when revalidate is true", async () => {
    const args = {
      ...baseArgs,
      ref: "revalidate-ref",
      revalidate: true,
      draft: false,
    };

    await resolveRef(args);
    await resolveRef(args);

    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });
});

describe("getStuffFromEnv", () => {
  it("uses no-store for resolveRef when Next draft mode is auto-detected", async () => {
    await getStuffFromEnv({
      token: "bshb_test_token",
      revalidateResolvedRef: true,
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    const [, fetchOptions] = fetchSpy.mock.calls[0]!;
    expect(fetchOptions.cache).toBe("no-store");
  });
});
