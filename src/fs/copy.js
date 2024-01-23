import { promises as fs } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

async function checkFolder(path) {
  return await fs
    .access(path, fs.constants.F_OK)
    .then(() => true)
    .catch((e) => false);
}

const copy = async (from, to) => {
  const errMessage = "FS operation failed";
  const isFromPath = await checkFolder(from);
  const isToPath = await checkFolder(to);
  if (!isFromPath || isToPath) {
    throw new Error(errMessage);
  }

  async function deepCopy(source, target) {
    const isSource = await checkFolder(source);
    if (!isSource) return;

    const isTarget = await checkFolder(target);
    if (!isTarget) {
      await fs.mkdir(target);
    }

    const files = await fs.readdir(source);

    files.forEach(async (file) => {
      const sourcePath = path.join(source, file);
      const targetPath = path.join(target, file);
      const isDirectory = (await fs.stat(sourcePath)).isDirectory();

      if (isDirectory) {
        await deepCopy(sourcePath, targetPath);
      } else {
        await fs.copyFile(sourcePath, targetPath);
      }
    });
  }
  await deepCopy(from, to);
};

// Тhere is an another solution, but fs.cp() - experimental
// const copy = async (source, target) => {
//   const errMessage = "FS operation failed";
//   try {
//     await fs.cp(source, target, { recursive: true, force: false, errorOnExist: true, })
//   } catch {
//     throw new Error(errMessage)
//   }
// };

const sourcePath = path.join(__dirname, "files");
const destinationPath = path.join(__dirname, "files_copy");
await copy(sourcePath, destinationPath);
