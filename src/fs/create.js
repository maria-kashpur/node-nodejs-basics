import { promises as fs } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const create = async (filePath) => {
  const errMessage = "FS operation failed";
  try {
    await fs.writeFile(filePath, fileContent, { flag: "wx" });
  } catch {
    throw new Error(errMessage);
  }
};

const filePath = path.join(__dirname, "files", "fresh.txt");
const fileContent = "I am fresh and young";
await create(filePath, fileContent);
