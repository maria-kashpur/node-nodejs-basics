import { promises as fs } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async (file) => {
  try {
    const text = await fs.readFile(file, { encoding: "utf8" });
    console.log(`${text}`);
  } catch {
    throw new Error("FS operation failed");
  }
};

const file = path.join(__dirname, "files", "fileToRead.txt");
await read(file);
