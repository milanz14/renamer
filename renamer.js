const { readdir } = require("fs/promises");
const path = require("path");
const { rename } = require("fs");

// pass in file type to be searched for
const firstType = process.argv[2];
// pass in second file type for renaming
const secondType = process.argv[3];

const getFilesFromDir = async (dir, name) => {
  const matchingFiles = [];
  const files = await readdir(dir);
  for (const file of files) {
    const filename = path.parse(file);
    if (filename.ext === `.${firstType}`) {
      filename.ext = `.${secondType}`;
      const splitUpBaseString = filename.base.split(".");
      splitUpBaseString[1] = secondType;
      const newString = splitUpBaseString.join(".");
      filename.base = newString;
      console.log(filename);
    }
  }
};

getFilesFromDir("./");
