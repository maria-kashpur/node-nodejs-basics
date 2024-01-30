import { createWriteStream } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const write = async (filePath) => {
  const writeStream = createWriteStream(filePath);
  process.stdin.pipe(writeStream);
};

const file = path.join(__dirname, "files", "fileToWrite.txt");
await write(file);
