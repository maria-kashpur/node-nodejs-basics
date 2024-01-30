const parseArgs = () => {
  const message = process.argv
    .reduce((acc, el, i, arr) => {
      if (el.startsWith("--")) {
        acc.push(`${el.slice(2)} is ${arr[i + 1]}`);
      }
      return acc;
    }, [])
    .join(", ");

  console.log(message);
};

parseArgs();
