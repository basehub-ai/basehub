import { main } from "./bin/main";
import { Args } from "./bin/index";

export interface GenerateOptions {
  /**
   * Output directory for the generated client
   */
  output?: string;
  /**
   * BaseHub token (if not provided, will look for BASEHUB_TOKEN env var)
   */
  token?: string;
  /**
   * BaseHub ref to use (branch name or commit ID)
   */
  ref?: string;
  /**
   * Prefix for environment variables
   */
  envPrefix?: string;
  /**
   * Add banner code at the top of each generated file
   */
  banner?: string;
  /**
   * Enable draft mode
   */
  draft?: boolean;
  /**
   * Enable watch mode for automatic regeneration
   */
  watch?: boolean;
  /**
   * API version to use
   */
  apiVersion?: string;
  /**
   * Enable debug logging
   */
  debug?: boolean;
  /**
   * Force draft mode (internal use)
   */
  forceDraft?: boolean;
  /**
   * SDK version (defaults to package version)
   */
  version?: string;
}

/**
 * Convert GenerateOptions to CLI Args format
 */
function optionsToArgs(options: GenerateOptions = {}): Args {
  const args: Partial<Args> = {};

  if (options.output) args["--output"] = options.output;
  if (options.token) args["--token"] = options.token;
  if (options.ref) args["--ref"] = options.ref;
  if (options.envPrefix) args["--env-prefix"] = options.envPrefix;
  if (options.banner) args["--banner"] = options.banner;
  if (options.draft) args["--draft"] = true;
  if (options.watch) args["--watch"] = true;
  if (options.apiVersion) args["--api-version"] = options.apiVersion;
  if (options.debug) args["--debug"] = true;

  return args as Args;
}

/**
 * Get the BaseHub package version
 */
function getPackageVersion(): string {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pkg = require("../package.json");
    return pkg.version;
  } catch {
    return "unknown";
  }
}

/**
 * Generate BaseHub client code
 *
 * @param options Configuration options for generation
 * @returns Promise that resolves when generation is complete
 *
 * @example
 * ```typescript
 * import { generate } from 'basehub/cli'
 *
 * // Basic usage
 * await generate()
 *
 * // With options
 * await generate({
 *   output: './my-basehub',
 *   draft: true,
 *   watch: false
 * })
 * ```
 */
export async function generate(options: GenerateOptions = {}): Promise<void> {
  const version = options.version || getPackageVersion();
  const args = optionsToArgs(options);
  const opts = {
    version,
    ...(options.forceDraft && { forceDraft: true }),
  };

  return main(args, opts);
}

/**
 * Generate BaseHub client in development mode (draft + watch enabled)
 *
 * @param options Configuration options for generation
 * @returns Promise that resolves when generation is complete
 *
 * @example
 * ```typescript
 * import { dev } from 'basehub/cli'
 *
 * // Start development mode
 * await dev({
 *   output: './my-basehub'
 * })
 * ```
 */
export async function dev(options: GenerateOptions = {}): Promise<void> {
  return generate({
    ...options,
    watch: true,
    forceDraft: true,
  });
}

/**
 * Alias for generate() - builds the BaseHub client
 */
export const build = generate;

// Re-export types that might be useful
export type { Args } from "./bin/index";
export type { Options } from "./bin/util/get-stuff-from-env";
