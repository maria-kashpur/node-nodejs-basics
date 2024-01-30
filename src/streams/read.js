import { createReadStream } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async (filePath) => {
  const readStream = createReadStream(filePath);
  readStream.pipe(process.stdout);
};

const file = path.join(__dirname, "files", "fileToRead.txt");
await read(file);
