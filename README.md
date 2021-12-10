Count PDF pages
===

> A simple script to count the number of PDF pages among files in a directory. It uses two different libraries in case there are errors.

## Install

```sh
npx degit mhkeller/count-pdf-pages#main
cd count-pages
npm install
```

## Running

Add a list of full file paths to the directories that contain PDFs to the array in `config.js` (the script will search all sub-directories for PDFs). Then choose one of the following commands.

```sh
npm run pdf-lib # Uses [pdf-lib](https://www.npmjs.com/package/pdf-lib)
npm run pdf-parse # Uses [pdf-parse](https://www.npmjs.com/package/pdf-parse)
npm start # Runs both commands
```
