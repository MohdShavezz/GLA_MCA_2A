import path from 'path'
import url from 'url'

// path 
let p='.dir/dir1/dir2/file.txt'
console.log(path.basename(p))
console.log(path.dirname(p))
console.log(path.extname(p))

const __filename=url.fileURLToPath(import.meta.url)
console.log(__filename)
const __dirname=path.dirname(__filename)
const custom=path.join(__dirname,'folder1','folder2')
console.log('custom: ',custom)