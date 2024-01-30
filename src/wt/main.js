import { Worker } from "worker_threads";
import { cpus } from "os";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const performCalculations = async (incrementalNumber, length) => {
  const cores = cpus().length;
  const file = path.join(__dirname, "worker.js");

  const createWorkerThread = (num) =>
    new Promise((resolve) => {
      const worker = new Worker(file, { workerData: num });

      worker.on("message", (data) =>
        resolve({
          status: "resolved",
          data,
        })
      );

      worker.on("error", (data) =>
        resolve({
          status: "error",
          data: null,
        })
      );
    });

  const workerThreads = Array.from({ length: cores }, (_, i) =>
    createWorkerThread(incrementalNumber + i)
  );
  const results = await Promise.all(workerThreads);
  console.log(results);
};

await performCalculations(10);
