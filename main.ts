// The Robot Apology.
//
// Writes one original two-line robot apology to /output/entry.txt.
// Line 1 apologizes in a single sentence for one specific mistake:
// the robot sent a birthday message to its owner's boss instead of
// her sister, because their first names differ by a single letter.
// Line 2 says what it learned and what it will do differently: that
// autocomplete finishes what it starts, so it now reads the full
// address before pressing send.
//
// Node 22, standard library only, deterministic, no network.
// The output directory is /output, or MAKEFUN_OUTPUT_DIR when set.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = [
  "I'm sorry I sent your birthday message to your boss instead of your sister, because their first names differ by a single letter.",
  "I learned that autocomplete finishes what I start, so now I read the whole address before I press send.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const path = join(outDir, "entry.txt");
writeFileSync(path, ENTRY, "utf8");

// Self-check: the gate requires 1-400 characters (Unicode code points),
// not only whitespace, in exactly two lines.
const len = [...ENTRY].length;
if (len < 1 || len > 400) {
  console.error(`error: entry is ${len} characters, must be 1-400`);
  process.exit(1);
}
if (!ENTRY.trim()) {
  console.error("error: entry is only whitespace");
  process.exit(1);
}
if (ENTRY.split("\n").length !== 2) {
  console.error("error: entry must be exactly two lines");
  process.exit(1);
}
console.log(`wrote ${path} (${len} characters, 2 lines)`);
