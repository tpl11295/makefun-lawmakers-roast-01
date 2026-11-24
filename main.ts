// The Long Roast: Lawmakers and the File They Cannot Convert — one satirical
// sentence, 320 characters at most, roasting lawmakers who would regulate AI,
// crypto or the internet but cannot convert a file to PDF.
// Fresh line: grand ambitions to write the laws for the whole internet,
// defeated by one Word-to-PDF conversion.
import * as fs from "node:fs";

const LINE =
  "They want to write the laws for AI, crypto, and the entire internet, yet the committee spent a whole week asking an intern to convert a Word file to PDF — and the file is still converting.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
