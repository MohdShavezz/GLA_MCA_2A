// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)

// let arr=[1,2,3,4]
// arr.length=2
// console.log(arr)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let myList = fruits.toString();
// let jn = fruits.join(',');
// console.log(jn)

// find every some 
// let arr=[1,2,3,4,5]
// let a=arr.find((ele)=>{
//   return ele>1
// })
// console.log(a)

//EVERY VS SOME
// let arr=[1,2,3,4,5]
//every element greater that 0  //false
// const a=arr.every((ele)=>{
//   return ele>0
// })
// console.log(a)

//some elements less that 2
// const b=arr.some((ele)=>{
//   return ele<2
// })
// console.log(b)

//MATH

// console.log(Math.max(1,2,3,4))
// console.log(Math.min(1,2,3,4))

// console.log(Math.ceil(3.6))
// console.log(Math.floor(3.6))
// console.log(Math.round(3.7))
// console.log(Math.round(3.3))
// console.log(Math.pow(2,3))
// let r=Math.random()*10
// console.log(r.toFixed())


//Array REF
// let arr=[1,2,3,4]
// // let arr2=arr
// let arr2=[...arr]
// arr2[0]=7
// console.log(arr)
// console.log(arr2)


// let arr=[1,2,3,4]
// // let a=arr[0]
// // let b=arr[1]
// // let c=arr[2]
// // let d=arr[3]
// let [a,b,c,d]=arr
// console.log(a,b,c,d)

// let arr=[1,2,3,4,5,6,7,8]
// let [a,b,...c]=arr
// console.log(a,b,c)

let arr=[1,2,2,3,3,4,6]
// make it unique 

// let dummy=[]
// for (let ele of arr) {
//   // console.log(i)
//   if(!dummy.includes(ele)){
//     dummy.push(ele)
//   }
// }
// console.log(dummy)

// let s=new Set(arr)
// console.log(s,typeof s)
// let makeArray=Array.from(s)
// console.log(makeArray)


const nestedArr = [1, [2, 3], [4, [5, 6]]];
// const deeplyFlattened = nestedArr.flat(Infinity);
// console.log(deeplyFlattened)
// do it without flat