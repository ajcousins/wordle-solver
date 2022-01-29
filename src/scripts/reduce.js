if (process.argv[2] === undefined) {
  console.error(
    "ERROR: Pass path to .txt file as argument for parsing.\nUsage: npm run reduceLib FILENAME"
  );
  return null;
}

const fs = require("fs");

const filename = process.argv[2];

const writeLocation = filename.split("/").slice(0, -1).join("/");

fs.readFile(filename, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("OK: ", filename);

  let newFileContents = data
    .split("\n")
    .sort((a, b) => (a > b ? 1 : -1))
    .filter((item, pos, arr) => {
      return !pos || item != arr[pos - 1];
    })
    .join("','");

  newFileContents = "export const libraryArr = ['" + newFileContents + "'];";

  fs.writeFile(`${writeLocation}/libOutput.tsx`, newFileContents, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log(`The file was saved as ${writeLocation}/libOutput.tsx`);
  });
});
