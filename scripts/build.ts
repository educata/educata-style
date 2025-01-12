import { execSync } from "child_process";
import { existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const isWatchMode = process.argv.includes("--watch");

const srcDir = resolve(__dirname, "../scss");
const distDir = resolve(__dirname, "../dist");
const entryFile = resolve(srcDir, "main.scss");
const outputFile = resolve(distDir, "educata.css");
const minifiedOutputFile = resolve(distDir, "educata.min.css");

if (!existsSync(distDir)) {
  mkdirSync(distDir);
}

try {
  console.log("🔨 Compiling SCSS...");

  execSync(`sass ${entryFile}:${outputFile} --style=expanded`, {
    stdio: "inherit",
  });

  console.log("✅ Regular CSS compiled successfully!");

  execSync(`sass ${entryFile}:${minifiedOutputFile} --style=compressed`, {
    stdio: "inherit",
  });

  console.log("✅ Minified CSS compiled successfully!");
} catch (error) {
  console.error("❌ An error occurred while compiling SCSS:", error);
  process.exit(1);
}

if (isWatchMode) {
  console.log("👀 Watching for changes...");

  execSync(`sass --watch ${entryFile}:${outputFile} --style=expanded`, {
    stdio: "inherit",
  });

  execSync(
    `sass --watch ${entryFile}:${minifiedOutputFile} --style=compressed`,
    { stdio: "inherit" }
  );
} else {
  console.log("✅ Build process completed successfully!");
}
