import { Transform } from "stream";

const transform = async (input, output) => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      const reversedChunk = chunk
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("");
      callback(null, reversedChunk + "\n");
    },
  });
  input.pipe(reverse).pipe(output);
};

await transform(process.stdin, process.stdout);
