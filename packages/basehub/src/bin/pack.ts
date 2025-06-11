import { main } from "./main";
import { Args } from "./index";
import { ALL_PACK_MODULES } from "./shared-modules";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export const pack = async (
  args: Args,
  opts: { version: string }
): Promise<string> => {
  console.log("📦 Starting pack process...");

  // Step 1: Generate the client first
  console.log("🪄 Generating BaseHub client...");
  await main(args, opts);

  // Determine output directory
  const outputDir = args["--output"] || ".basehub";
  const basehubOutputPath = path.resolve(process.cwd(), outputDir);

  if (!fs.existsSync(basehubOutputPath)) {
    throw new Error(`Generated client not found at: ${basehubOutputPath}`);
  }

  // Step 2: Create standalone bundle
  console.log("📦 Creating standalone bundle...");
  const standaloneDir = path.join(basehubOutputPath, "standalone");
  fs.mkdirSync(standaloneDir, { recursive: true });

  // Bundle the generated client into a standalone version
  await bundleStandalone(basehubOutputPath, standaloneDir, "1.0.0");

  // Step 3: Create tarball
  console.log("🗜️ Creating tarball...");
  const packDest = args["--pack-dest"] || process.cwd();

  let tarballPath: string;
  try {
    tarballPath = await createTarball(
      standaloneDir,
      "1.0.0", // Hard-coded version
      packDest
    );
  } finally {
    // Step 4: Cleanup (unless user wants to keep generated client)
    if (!args["--keep-generated"]) {
      console.log("🧹 Cleaning up generated client directory...");
      try {
        fs.rmSync(basehubOutputPath, { recursive: true, force: true });
        console.log("✅ Cleanup complete");
      } catch (error) {
        console.warn(
          `⚠️ Warning: Could not clean up ${basehubOutputPath}:`,
          error
        );
      }
    } else {
      console.log(`📁 Generated client directory kept: ${basehubOutputPath}`);
    }
  }

  console.log(`✅ Pack complete! Tarball created: ${tarballPath}`);
  return tarballPath;
};

async function bundleStandalone(
  sourcePath: string,
  targetPath: string,
  version: string
): Promise<void> {
  // Read the generated index files
  const indexTsPath = path.join(sourcePath, "index.ts");
  const indexJsPath = path.join(sourcePath, "index.js");

  let indexTsContent = fs.readFileSync(indexTsPath, "utf-8");
  let indexJsContent = fs.existsSync(indexJsPath)
    ? fs.readFileSync(indexJsPath, "utf-8")
    : indexTsContent; // fallback to TS if JS doesn't exist

  // Replace all imports from "basehub/*" with relative imports in both files
  // This prevents circular dependencies when the tarball is named "basehub"
  indexTsContent = indexTsContent.replace(
    /from\s+["']basehub\/([^"']+)["']/g,
    'from "./bundled/$1"'
  );
  indexJsContent = indexJsContent.replace(
    /from\s+["']basehub\/([^"']+)["']/g,
    'from "./bundled/$1"'
  );

  // Also handle export statements in both files
  indexTsContent = indexTsContent.replace(
    /export\s+\*\s+from\s+["']basehub\/([^"']+)["']/g,
    'export * from "./bundled/$1"'
  );
  indexJsContent = indexJsContent.replace(
    /export\s+\*\s+from\s+["']basehub\/([^"']+)["']/g,
    'export * from "./bundled/$1"'
  );

  // Create bundled directory for dependencies
  const bundledDir = path.join(targetPath, "bundled");
  fs.mkdirSync(bundledDir, { recursive: true });

  // Copy all the generated files
  copyDirRecursive(sourcePath, targetPath, ["standalone", "node_modules"]);

  // Bundle common dependencies that were imported from "basehub"
  await bundleBasehubDependencies(bundledDir);

  // Fix imports in the copied dist files
  await fixDistImports(bundledDir);

  // Write the modified index files
  fs.writeFileSync(path.join(targetPath, "index.ts"), indexTsContent);
  fs.writeFileSync(path.join(targetPath, "index.js"), indexJsContent);

  // Fix imports in all BASEHUB_MODULES entrypoint files
  await fixEntrypointImports(targetPath);

  // Read basehub package.json for dependency versions
  const basehubModulePath = require("resolve-pkg")("basehub");
  let basehubDependencies = {};

  const basehubPkgJsonPath = path.join(basehubModulePath, "package.json");
  const basehubPkgJson = JSON.parse(
    fs.readFileSync(basehubPkgJsonPath, "utf-8")
  );

  // Extract only the external dependencies we know are needed
  const externalDeps = [
    "github-slugger",
    "shiki",
    "@radix-ui/react-slot",
    "@shikijs/transformers",
    "@xmldom/xmldom",
    "github-slugger",
    "hast-util-to-jsx-runtime",
    "lodash.debounce",
    "lodash.get",
    "pusher-js",
    "server-only",
    "shiki",
    "typesense",
    "zod",
  ];
  basehubDependencies = Object.fromEntries(
    externalDeps
      .filter(
        (dep) =>
          basehubPkgJson.dependencies?.[dep] ||
          basehubPkgJson.devDependencies?.[dep]
      )
      .map((dep) => [
        dep,
        basehubPkgJson.dependencies?.[dep] ||
          basehubPkgJson.devDependencies?.[dep],
      ])
  );

  console.log(`✅ Found external dependencies:`, basehubDependencies);

  // Create package.json for the standalone version
  const packageJson = {
    version,
    name: "basehub",
    main: "./index.js",
    types: "./index.d.ts",
    exports: {
      ".": {
        import: "./index.js",
        require: "./index.js",
        types: "./index.d.ts",
      },
      "./*": "./*",
    },
    sideEffects: false,
    files: ["**/*"],
    dependencies: basehubDependencies,
    peerDependencies: {},
  };

  fs.writeFileSync(
    path.join(targetPath, "package.json"),
    JSON.stringify(packageJson, null, 2)
  );

  console.log("✅ Standalone bundle created");
}

async function bundleBasehubDependencies(bundledDir: string): Promise<void> {
  // Get the basehub module path to access dist files
  const basehubModulePath = require("resolve-pkg")("basehub");

  if (!basehubModulePath) {
    throw new Error("Could not resolve basehub module path");
  }

  const distDir = path.join(basehubModulePath, "dist");
  const bundledDistDir = path.join(bundledDir, "dist");

  // Copy the entire dist directory to bundled/dist/
  // This preserves all internal imports and file structure
  if (fs.existsSync(distDir)) {
    copyDirRecursive(distDir, bundledDistDir);
    console.log("✅ Copied dist directory to bundled/dist/");
  } else {
    console.warn(`⚠️  Warning: dist directory not found at ${distDir}`);
  }

  // Create bundled wrapper files that point to correct relative path to dist/moduleName
  for (const moduleName of ALL_PACK_MODULES) {
    const bundledJsPath = path.join(bundledDir, `${moduleName}.js`);
    const bundledDtsPath = path.join(bundledDir, `${moduleName}.d.ts`);

    // Calculate correct relative path from bundled wrapper to dist directory
    const moduleDepth = moduleName.split("/").length - 1;
    const distRelativePath =
      moduleDepth > 0 ? "../".repeat(moduleDepth) + "dist" : "./dist";

    // Ensure nested directory structure exists
    fs.mkdirSync(path.dirname(bundledJsPath), { recursive: true });

    // Create JS wrapper that points to correct dist path
    fs.writeFileSync(
      bundledJsPath,
      `export * from "${distRelativePath}/${moduleName}";\n`
    );

    // Create TypeScript declaration wrapper
    fs.writeFileSync(
      bundledDtsPath,
      `export * from "${distRelativePath}/${moduleName}";\n`
    );

    console.log(
      `✅ Created bundled wrapper: ${moduleName} (using ${distRelativePath})`
    );
  }

  console.log("✅ Created bundled wrapper files pointing to ./dist/");
}

async function fixDistImports(bundledDir: string): Promise<void> {
  const bundledDistDir = path.join(bundledDir, "dist");

  if (!fs.existsSync(bundledDistDir)) {
    console.warn("⚠️ bundled/dist directory not found, skipping import fixes");
    return;
  }

  // Get all JS and TS files in the dist directory
  const distFiles = getAllFilesRecursively(bundledDistDir, [".js", ".d.ts"]);

  for (const filePath of distFiles) {
    try {
      let content = fs.readFileSync(filePath, "utf-8");
      let modified = false;

      // Fix relative imports that are incorrect due to the new directory structure
      // Replace ./bundled/ with ../../bundled/ (going up from bundled/dist/ to root)
      if (content.includes("./bundled/")) {
        content = content.replace(
          /from\s+["']\.\/bundled\/([^"']+)["']/g,
          'from "../../bundled/$1"'
        );
        content = content.replace(
          /export\s+\*\s+from\s+["']\.\/bundled\/([^"']+)["']/g,
          'export * from "../../bundled/$1"'
        );
        modified = true;
      }

      // Fix ./dist/ imports to be relative within the dist directory
      if (content.includes("./dist/")) {
        content = content.replace(
          /from\s+["']\.\/dist\/([^"']+)["']/g,
          'from "./$1"'
        );
        content = content.replace(
          /export\s+\*\s+from\s+["']\.\/dist\/([^"']+)["']/g,
          'export * from "./$1"'
        );
        modified = true;
      }

      // Handle external dependencies that need to be resolved
      // For now, let's identify and warn about them
      const externalImports = findExternalImports(content);
      if (externalImports.length > 0) {
        console.warn(
          `⚠️ External dependencies found in ${path.relative(
            bundledDistDir,
            filePath
          )}: ${externalImports.join(", ")}`
        );
        console.warn(
          "   These may need to be installed separately or bundled."
        );
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
      }
    } catch (error) {
      console.warn(`⚠️ Failed to fix imports in ${filePath}:`, error);
    }
  }

  console.log("✅ Fixed imports in bundled/dist files");
}

function getAllFilesRecursively(dir: string, extensions: string[]): string[] {
  const files: string[] = [];

  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (extensions.some((ext) => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

function findExternalImports(content: string): string[] {
  const externalImports: string[] = [];

  // Find all import/export statements
  const importRegex = /(?:import|export).*?from\s+["']([^"']+)["']/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];

    // Check if importPath exists and is an external package (not relative import)
    if (
      importPath &&
      !importPath.startsWith(".") &&
      !importPath.startsWith("/")
    ) {
      // Known external dependencies that might cause issues
      const problematicDeps = ["github-slugger", "shiki", "react", "react-dom"];
      if (problematicDeps.includes(importPath)) {
        externalImports.push(importPath);
      }
    }
  }

  return [...new Set(externalImports)]; // Remove duplicates
}

async function fixEntrypointImports(targetPath: string): Promise<void> {
  // Fix imports in all BASEHUB_MODULES entrypoint files that were copied from the generated client
  for (const moduleName of ALL_PACK_MODULES) {
    const jsFile = path.join(targetPath, `${moduleName}.js`);
    const dtsFile = path.join(targetPath, `${moduleName}.d.ts`);

    // Calculate the correct relative path to bundled directory
    // Count how many directories deep this module is
    const moduleDepth = moduleName.split("/").length - 1;
    const relativePath =
      moduleDepth > 0 ? "../".repeat(moduleDepth) + "bundled" : "./bundled";

    // Fix JS file imports - use correct relative path to bundled
    if (fs.existsSync(jsFile)) {
      let content = fs.readFileSync(jsFile, "utf-8");

      // Replace "basehub/..." with correct relative path to bundled
      content = content.replace(
        /from\s+["']basehub\/([^"']+)["']/g,
        `from "${relativePath}/$1"`
      );
      content = content.replace(
        /export\s+\*\s+from\s+["']basehub\/([^"']+)["']/g,
        `export * from "${relativePath}/$1"`
      );

      fs.writeFileSync(jsFile, content);
      console.log(
        `✅ Fixed entrypoint imports in: ${moduleName}.js (using ${relativePath})`
      );
    }

    // Fix TypeScript declaration file imports
    if (fs.existsSync(dtsFile)) {
      let content = fs.readFileSync(dtsFile, "utf-8");

      // Replace "basehub/..." with correct relative path to bundled
      content = content.replace(
        /from\s+["']basehub\/([^"']+)["']/g,
        `from "${relativePath}/$1"`
      );
      content = content.replace(
        /export\s+\*\s+from\s+["']basehub\/([^"']+)["']/g,
        `export * from "${relativePath}/$1"`
      );

      fs.writeFileSync(dtsFile, content);
      console.log(
        `✅ Fixed entrypoint imports in: ${moduleName}.d.ts (using ${relativePath})`
      );
    }
  }
}

function copyDirRecursive(
  src: string,
  dest: string,
  exclude: string[] = []
): void {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);

  for (const item of items) {
    if (exclude.includes(item)) continue;

    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath, exclude);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function createTarball(
  standaloneDir: string,
  version: string,
  packDest: string
): Promise<string> {
  const tarballName = `basehub-${version}.tgz`;
  const tarballPath = path.resolve(packDest, tarballName);

  // Ensure pack destination directory exists
  fs.mkdirSync(packDest, { recursive: true });

  // Create tarball using tar command
  await execAsync(`cd "${standaloneDir}" && tar -czf "${tarballPath}" .`);

  return tarballPath;
}
