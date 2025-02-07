import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

import { log } from "./log";

const pkgJson = resolve(__dirname, "../package.json");
const pkg = JSON.parse(readFileSync(pkgJson, "utf8"));

const year = new Date().getFullYear();

export const LICENSE_BANNER_TEXT = `/*
 * Educata-style v${pkg.version} (https://educata.github.io/educata-style/)
 * Copyright 2025${year === 2025 ? "" : `-${year}`} ${pkg.author}
 * Licensed under MIT (https://github.com/educata/educata-style/blob/main/LICENSE)
 */
`;

export function prependTextToFile(filePath: string, text: string): void {
  try {
    const fileContent = readFileSync(filePath, "utf8");

    const newContent = text + fileContent;

    writeFileSync(filePath, newContent, "utf8");

    log(`📃 Text has been prepended to the file: ${filePath}`);
  } catch (error) {
    log(
      `❌ Error while prepending text to the file: ${error.message}`,
      false,
      true,
      true
    );
  }
}
