// Museum of the Year 3000 — winning museum label for the year 3000.
// The line below is the entry: a single museum label (174 characters)
// describing a house key as a ceremonial object of the distant future.
// The label works because it treats a mundane object as archaeology:
// the key's teeth are useless as a blade, yet the panic of losing one
// is presented as a formal ritual, which is exactly how a year-3000
// curator would read our everyday anxieties back to us.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "House Key, c. 2020. Ceremonial dagger every adult carried to prove they owned a dwelling; its teeth opened nothing, but losing it caused the ritual panic of being locked out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
