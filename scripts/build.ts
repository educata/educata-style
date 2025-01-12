import { execSync } from "child_process";
import { existsSync, mkdirSync, copyFileSync } from "fs";
import { resolve } from "path";

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

if (!existsSync(distDir)) {
  mkdirSync(distDir);
}

try {
  log("🔨 Compiling SCSS...");

  execSync(`sass ${entryFile}:${outputFile} --style=expanded`, {
    stdio: "inherit",
  });

  log("✅ Regular CSS compiled successfully!");

  execSync(`sass ${entryFile}:${minifiedOutputFile} --style=compressed`, {
    stdio: "inherit",
  });

  log("✅ Minified CSS compiled successfully!");

  log("📦 Copying CSS to site folder...");
  copyFileSync(outputFile, siteOutputFile);
  copyFileSync(minifiedOutputFile, siteMinifiedOutputFile);
  log("✅ CSS copied to site folder successfully!");
} catch (error) {
  log(`❌ An error occurred while compiling SCSS: ${error}`, true, true);
  process.exit(1);
}

if (isWatchMode) {
  log("👀 Watching for changes...");

  execSync(`sass --watch ${entryFile}:${outputFile} --style=expanded`, {
    stdio: "inherit",
  });

  execSync(`sass --watch ${entryFile}:${minifiedOutputFile} --style=compressed`, {
    stdio: "inherit",
  });

  log("📦 Copying CSS to site folder...");
  copyFileSync(outputFile, siteOutputFile);
  copyFileSync(minifiedOutputFile, siteMinifiedOutputFile);
  log("✅ CSS copied to site folder successfully!");
} else {
  log("✅ Build process completed successfully!", true);
}

function log(message: string, bypass = false, isError = false) {
  if (isSilentMode && !bypass) {
    return;
  }
  const date = new Date();
  if (isError) {
    console.error(`[${date.toLocaleString()}]: ${message}`);
  } else {
    console.log(`[${date.toLocaleString()}]: ${message}`);
  }
}
