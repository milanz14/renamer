const path = require("path");
const fs = require("fs");
const { readdir } = require("fs/promises");

// pass in file type to be searched for
const firstType: string = process.argv[2];
// pass in second file type for renaming
const secondType: string = process.argv[3];

const getFilesFromDir = async (dir: string): Promise<void> => {
  const files: string[] = await readdir(dir);
  for (const file of files) {
    const filename: { [key: string]: string } = path.parse(file);
    if (filename.ext === `.${firstType}`) {
      const formattedFileName: string = path.format(filename);
      const nameBeforeDot: string = formattedFileName.split(".")[0];
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
