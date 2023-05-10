### Renamer
<hr />

- Command line tool for renaming file extensions

### Tech
<hr />

- [Typescript]()
- [ts-node](https://www.npmjs.com/package/ts-node)

### How does it work
<hr />

- Renamer takes in the expected extension name and a second extension name
- it will review all files in the directory if they match the input extension

`ts-node renamer.js png jpg`

- the above code would rename every png into jpg

### To Run Locally
<hr />

- `git clone` this repository
- `cd renamer`
- `npm i`
- `drag/copy your files over into the root directory`
- `to convert files, follow the instructions as per the 'How does it work' section`
