import fs from "fs/promises";
import { createHash } from "crypto";
import * as url from "url";
import path from "path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async (filePath) => {
  const content = await fs.readFile(filePath);
  const hash = createHash("sha256").update(content).digest("hex");
  console.log(hash);
};

const file = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
await calculateHash(file);
