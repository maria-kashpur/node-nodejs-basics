import { promises as fs } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async (filePath) => {
  const errMessage = "FS operation failed";
  try {
    await fs.rm(filePath);
  } catch {
    throw new Error(errMessage);
  }
};

const file = path.join(__dirname, "files", "fileToRemove.txt");

await remove(file);
