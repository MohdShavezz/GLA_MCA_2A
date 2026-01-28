//loops
// for (let i = 0; i < Things.length; i++) {
//   Things[i]
// }


// let c=1
// while(true){
//   console.log(c)
//   c++
//   if(c==5){
//     break
//   }
// }

// let c=1
// do {  //start
// console.log('first run')
//   // console.log(c) 
//   // if(c==2){
//   //   break
//   // }
//   // c++
  
// } while (false);


// for of 
// let arr = [10, 20, 30];
// for (let value of arr) {
//   console.log(value);
// }



// let obj={
//   name:'tom',
//   age:22,
//   phone:12343234
// }
// // for(let i in obj){
// //   // console.log(i)
// //   // console.log(obj[i])
// // }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// forEach vs Map 
let arr=[1,2,3,4,5]
// arr.forEach((ele,ind)=>{
//   // console.log(ele,ind,arr)
//   if(ele==2){
//     arr[ind]=0
//   }
// })
// console.log(arr)

let arr2=arr.map(ele=>{
  return ele*2
})
console.log(arr,arr2)
