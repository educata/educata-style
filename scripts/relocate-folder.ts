import {
  rm,
  statSync,
  mkdirSync,
  existsSync,
  unlinkSync,
  readdirSync,
  copyFileSync,
} from "fs";
import { join, resolve } from "path";
import { log } from "./log";

/*
 * Relocate folder
 *
 * Flags:
 *
 * --source <source_folder>
 * --destination <destination_folder>
 */

interface MoveOptions {
  source: string;
  destination: string;
}

function parseArguments(): MoveOptions {
  const sourceIndex = process.argv.indexOf("--source");
  const destinationIndex = process.argv.indexOf("--destination");

  if (sourceIndex === -1 || destinationIndex === -1) {
    log(`❌ Both --source and --destination arguments are required.`, false, true, true);
    process.exit(1);
  }

  if (!process.argv[sourceIndex + 1] || !process.argv[destinationIndex + 1]) {
    log(
      `❌ Please provide values for both --source and --destination arguments.`,
      false,
      true,
      true
    );
    process.exit(1);
  }

  return {
    source: resolve(process.argv[sourceIndex + 1]),
    destination: resolve(process.argv[destinationIndex + 1]),
  };
}

function validatePaths(source: string, destination: string): void {
  if (!existsSync(source)) {
    log(`❌ Source folder ${source} does not exist.`, false, true, true);
    process.exit(1);
  }

  if (!statSync(source).isDirectory()) {
    log(`❌ Source ${source} is not a directory.`, false, true, true);
    process.exit(1);
  }

  if (existsSync(destination) && !statSync(destination).isDirectory()) {
    log(
      `❌ Destination ${destination} exists but is not a directory.`,
      false,
      true,
      true
    );
    process.exit(1);
  }

  if (source === destination) {
    log(`❌ Source and destination paths are the same.`, false, true, true);
    process.exit(1);
  }
}

function ensureDestinationExists(destination: string): void {
  if (!existsSync(destination)) {
    try {
      mkdirSync(destination, { recursive: true });
    } catch (error) {
      log(`❌ Failed to create destination folder: ${error.message}`, false, true, true);
      process.exit(1);
    }
  }
}

function moveFiles(source: string, destination: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const files = readdirSync(source);

      for (const file of files) {
        const sourcePath = join(source, file);
        const destPath = join(destination, file);
        const isDirectory = statSync(sourcePath).isDirectory();

        if (isDirectory) {
          moveFolder(sourcePath, destPath);
        } else {
          if (existsSync(destPath)) {
            unlinkSync(destPath);
          }
          copyFileSync(sourcePath, destPath);
        }
      }

      rm(source, { recursive: true, force: true }, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}

function moveFolder(source: string, destination: string): Promise<void> {
  validatePaths(source, destination);
  ensureDestinationExists(destination);
  return moveFiles(source, destination);
}

const { source, destination } = parseArguments();
moveFolder(source, destination)
  .then(() => {
    log(`✅ Folder ${source} moved to ${destination} successfully.`, false, true, true);
  })
  .catch((error) => {
    log(`❌ Error: ${error.message}`, false, true, true);
    process.exit(1);
  });
