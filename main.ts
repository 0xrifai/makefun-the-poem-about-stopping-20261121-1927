// Writes one short poem about stopping — the power to stop and to stay —
// to /output/entry.txt. Node 22+ stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "The kettle sang, and I did not pour.",
  "The phone lit its small blue eye, and I let it dim.",
  "All day the world kept handing me its levers —",
  "today my hand stayed mine,",
  "and the quiet came and sat beside me.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
