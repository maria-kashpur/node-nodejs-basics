import fs from "fs";
import zlib from "zlib";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const decompress = async (source, target) => {
  const readStream = fs.createReadStream(source);
  const writeStrem = fs.createWriteStream(target);
  const gunip = zlib.createGunzip();

  readStream.pipe(gunip).pipe(writeStrem);
};

const source = path.join(__dirname, "files", "archive.gz");
const target = path.join(__dirname, "files", "fileToCompress.txt");
await decompress(source, target);
