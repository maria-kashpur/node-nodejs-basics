const parseEnv = () => {
  const prefix = "RSS_";
  const rssVariables = Object.keys(process.env).filter((envVar) =>
    envVar.startsWith(prefix)
  );
  const message = rssVariables
    .map((rssVar, i) => `${rssVar}=${process.env[rssVar]}`)
    .join("; ");
  console.log(message);
};

parseEnv();
