import fs from "fs";
import zlib from "zlib";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const compress = async (source, target) => {
  const readStream = fs.createReadStream(source);
  const writeStrem = fs.createWriteStream(target);
  const gZip = zlib.createGzip();

  readStream.pipe(gZip).pipe(writeStrem);
};

const source = path.join(__dirname, "files", "fileToCompress.txt");
const target = path.join(__dirname, "files", "archive.gz");
await compress(source, target);
