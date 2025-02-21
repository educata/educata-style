import { execSync } from "child_process";
import { existsSync, mkdirSync, copyFileSync } from "fs";
import { resolve } from "path";

import { log } from "./log";
import { prependTextToFile, LICENSE_BANNER_TEXT } from "./banner";

const isWatchMode = process.argv.includes("--watch");
const isSilentMode = process.argv.includes("--silent");

const srcDir = resolve(__dirname, "../scss");
const distDir = resolve(__dirname, "../dist");
const entryFile = resolve(srcDir, "main.scss");
const outputFile = resolve(distDir, "educata.css");
const minifiedOutputFile = resolve(distDir, "educata.min.css");
const siteDir = resolve(__dirname, "../site");
const siteOutputFile = resolve(siteDir, "educata.css");
const siteMinifiedOutputFile = resolve(siteDir, "educata.min.css");
const storybookOutputFile = resolve(__dirname, "../stories/educata.min.css");

if (!existsSync(distDir)) {
  mkdirSync(distDir);
}

try {
  log("🔨 Compiling SCSS...");

  execSync(`sass ${entryFile}:${outputFile} --no-source-map --style=expanded`, {
    stdio: "inherit",
  });

  log("✅ Regular CSS compiled successfully!");

  execSync(`sass ${entryFile}:${minifiedOutputFile} --no-source-map --style=compressed`, {
    stdio: "inherit",
  });

  log("✅ Minified CSS compiled successfully!");

  log("📦 Copying CSS to site folder...");
  copyFileSync(outputFile, siteOutputFile);
  copyFileSync(minifiedOutputFile, siteMinifiedOutputFile);
  copyFileSync(outputFile, storybookOutputFile);
  prependTextToFile(siteOutputFile, LICENSE_BANNER_TEXT);
  prependTextToFile(siteMinifiedOutputFile, LICENSE_BANNER_TEXT);
  log("✅ CSS copied to site folder successfully!");
} catch (error) {
  log(`❌ An error occurred while compiling SCSS: ${error}`, isSilentMode, true, true);
  process.exit(1);
}

if (isWatchMode) {
  log("👀 Watching for changes...");

  execSync(`sass --watch ${entryFile}:${outputFile} --no-source-map --style=expanded`, {
    stdio: "inherit",
  });

  execSync(
    `sass --watch ${entryFile}:${minifiedOutputFile}  --no-source-map --style=compressed`,
    {
      stdio: "inherit",
    }
  );

  log("📦 Copying CSS to site folder...");
  copyFileSync(outputFile, siteOutputFile);
  copyFileSync(minifiedOutputFile, siteMinifiedOutputFile);
  prependTextToFile(siteOutputFile, LICENSE_BANNER_TEXT);
  prependTextToFile(siteMinifiedOutputFile, LICENSE_BANNER_TEXT);
  log("✅ CSS copied to site folder successfully!");
} else {
  log("✅ Build process completed successfully!", isSilentMode, true);
}
