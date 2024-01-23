import { promises as fs } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async (dir, source, newName) => {
  try {
    const files = await fs.readdir(dir);
    const isValidNewName = !files.includes(newName);
    const isValidSource = files.includes(source);
    const errMessage = "FS operation failed";
    if (!isValidNewName || !isValidSource) throw new Error(errMessage);
    await fs.rename(path.join(dir, source), path.join(dir, newName));
  } catch {
    throw new Error(errMessage);
  }
};

const dir = path.join(__dirname, "files");
const currentName = "wrongFilename.txt";
const newName = "properFilename.md";
await rename(dir, currentName, newName);
