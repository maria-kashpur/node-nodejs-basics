import { promises as fs, fstat, readdir } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async (dir) => {
  const errMessage = "FS operation failed";
  try {
    const files = await fs.readdir(dir);
    console.log(files);
  } catch {
    throw new Error(errMessage);
  }
};

const dir = path.join(__dirname, "files");
await list(dir);
