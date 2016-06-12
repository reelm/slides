const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(process.argv[3]);
const archive = archiver('zip');

output.on('close', () => {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);
archive.bulk([
    { expand: true, cwd: process.argv[2], src: ['**'] }
]);
archive.finalize();
