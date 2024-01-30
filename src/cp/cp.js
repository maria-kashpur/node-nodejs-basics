import { fork } from "child_process";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (filePath, args) => {
  fork(filePath, args);
};

const file = path.join(__dirname, "files", "script.js");
spawnChildProcess(file, [1, 2, 3, "str"]);
