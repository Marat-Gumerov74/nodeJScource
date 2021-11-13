const fs = require('fs');
const zlib = require('zlib')

// // объявим читающий поток readStream
// const readStream = fs.createReadStream('./text.txt');
//
// readStream.on('data', (chunk) => {
//   console.log('---------------');
//   console.log(chunk.toString());
// })

// // объявим пишущий поток readStream
// const readStream = fs.createReadStream('./text.txt');
// const writeStream = fs.createWriteStream('./new-text.txt')
//
// readStream.on('data', (chunk) => {
//   writeStream.write(chunk)
// })

// объявим пишущий поток дуплексный - pip

const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('./new-text.txt')
const compressStream = zlib.createGzip()

const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with Error...');
}

readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError)