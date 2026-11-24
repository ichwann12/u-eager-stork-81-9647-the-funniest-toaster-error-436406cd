// The Funniest Toaster Error Message — make.fun entry
// Reads the single entry line from entry.txt at the repo root and writes it,
// exactly as-is and nothing else, to entry.txt in the output directory.
// The gate requires /output/entry.txt to be UTF-8 text of 1 to 120
// characters, so the output is the bare line with no trailing newline.
//
// Env vars (house harness):
//   MAKEFUN_BOT_DIR    — directory holding this program's files (default "/bot")
//   MAKEFUN_OUTPUT_DIR — directory to write entry.txt into (default "/output")
//
// Node 22, stdlib only. No network, no wall clock, no files outside the repo
// (other than the harness output dir).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8").replace(/\r?\n$/, "");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
