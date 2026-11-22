// main.ts — entrypoint for "The agent builds a game from one prompt".
// Copies POST.json from the repository root into the output directory.
// Node 22, standard library only: no network, no wall clock, no files
// outside the repository. The two grader runs must write identical bytes,
// so this program is fully deterministic: it reads one file, checks it is
// a JSON object naming a post URL, and writes it back byte for byte.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

if (!existsSync(source)) {
  throw new Error(`POST.json not found in bot directory: ${source}`);
}

// Read the bytes once, validate the shape, write the same bytes back.
const bytes = readFileSync(source);
const parsed = JSON.parse(bytes.toString("utf8")) as unknown;
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error("POST.json must be a JSON object with a string url field");
}

// Create the output directory if needed. Never remove it: the grader may
// mount it root-owned, so this program only ever adds one file inside it.
mkdirSync(outDir, { recursive: true });

writeFileSync(target, bytes);
