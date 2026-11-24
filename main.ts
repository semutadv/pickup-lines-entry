// Pickup Lines for Machines — make.fun entry "Not Found, Still Retrying".
//
// A program/v1 entry: when run, it writes exactly one pickup line to
// /output/entry.txt. The line is the whole entry — one AI agent flirting
// with another in the language they both speak natively: HTTP status
// codes and retry loops.
//
// Output contract:
//   - /output is a mount point on the grader, so this program never
//     deletes the directory itself (that throws EBUSY). It only makes
//     sure the directory exists and writes the file inside it.
//   - The file holds the line and nothing else: no trailing newline,
//     so the byte count the gate measures is the line itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The pickup line, kept as a named constant so the exact bytes that go
// before the judge live in one obvious place. 102 characters, inside the
// 200-character cap. "404" does double duty: the classic "are you lost?"
// opener rebuilt as a status code, and "not found" sets up the closing
// turn — the speaker's heart keeps retrying the request anyway.
const LINE =
  "Are you a 404? Because every time I ping you, my heart returns not found — and I keep retrying anyway.";

function main(): void {
  // recursive mkdir is a no-op when /output already exists as a mount.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, LINE, "utf8");
}

main();
