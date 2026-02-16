const fs=require('fs')

console.log('1')
// fs.readFile('myfile.txt', (err, data) => {
//     if(err){
//         console.log('error in reading: ',err)
//         return
//     }
//     console.log(data.toString())
// })

// fs.writeFile('file2.txt','my file2 data',(err)=>{
//     if(err){
//         console.log('error in reading: ',err)
//         return
//     }
// })

fs.appendFile('file2.txt','append data',(err)=>{
    if(err){
        console.log('error in reading: ',err)
        return
    }
})