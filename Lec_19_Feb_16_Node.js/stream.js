const fs =require('fs')

const readable=fs.createReadStream('file.txt')
const writable=fs.createWriteStream('file2.txt')

// readable.on('data',chunk=>{
//     console.log(chunk.toString())
// })
// readable.on('error',(error)=>{
//     console.log('error in file reading: ',error)
// })
// readable.on('end',()=>{
//     console.log('read end: ')
// })

writable.write('append', () => {
  console.log('Write completed, do more writes now.');
})

// readable.pipe(writable)