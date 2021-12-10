const fs = require('fs');
const glob = require('glob');
const { PDFDocument } = require('pdf-lib');
const notify = require('wsk-notify');

const inDirs = require('./config.js');

let dirCount = 0;
let pageCount = 0;
main();

async function main () {
	for (const dir of inDirs) {
		let dirPageCount = 0;
		const globDir = dir + '/**/*.pdf';
		notify({ m: `Doing dir ${++dirCount} of ${inDirs.length}...`, v: globDir, d: ['bold', 'cyan'] });
		const pdfPaths = glob.sync(globDir);
		notify({ m: `\tFound files...`, v: pdfPaths.length, d: ['cyan'] });
		for (const pdfPath of pdfPaths) {
			let dataBuffer = fs.readFileSync(pdfPath);

			// Load a PDFDocument from the existing PDF bytes
			const pdfDoc = await PDFDocument.load(dataBuffer);
			const numpages = pdfDoc.getPages().length;
			pageCount += numpages;
			dirPageCount += numpages;
		};
		notify({ m: '\tPages...', v: dirPageCount, d: 'magenta' });
	};
	notify({ m: 'Pdf pages reviewed...', v: pageCount, d: ['bold', 'yellow'] });
}
