const path = require("path");
const fs = require("fs");
const { readdir } = require("fs/promises");

// pass in file type to be searched for
const firstType = process.argv[2];
// pass in second file type for renaming
const secondType = process.argv[3];

const getFilesFromDir = async (dir) => {
  const files = await readdir(dir);
  for (const file of files) {
    const filename = path.parse(file);
    if (filename.ext === `.${firstType}`) {
      const formattedFileName = path.format(filename);
      const nameBeforeDot = formattedFileName.split(".")[0];
      fs.rename(formattedFileName, `${nameBeforeDot}.${secondType}`, () => {
        console.log(`${nameBeforeDot} extension updated!`);
      });
    } else {
      console.log(
        `'${filename.name}' does not match ${firstType} file extension. Skipping.`
      );
    }
  }
};

getFilesFromDir("./");
