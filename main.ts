// main.ts — entrypoint for "The agent builds a game from one prompt" (program/v1).
// The entry is a post on X carrying a short video. This program does exactly
// one thing: it copies POST.json from the repository root into the output
// directory, so the grader can read the post's address. Nothing else:
// no network, no clock, no files outside the repository, and the same
// bytes out on every run: copying a file is deterministic by construction,
// so the two grading runs always write identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
