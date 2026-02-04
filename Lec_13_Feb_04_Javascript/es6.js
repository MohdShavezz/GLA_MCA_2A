//ES6 2015
// 1. let , const 
// 2. arrow function

//3
// function sum(a=0,b=1,c=5){
//     console.log(a,b,c)
// }
// sum()

// 4. destructuring arr or obj 
// let [a,b] = [1,2,3]

//5. spread operator [...]

// 6. rest parameter
// function sum(...a){ //rest parameter
//   console.log(Array.from(arguments))
//   console.log(a)
//     // console.log(a+b)
// }
// sum(1,2,3,4,5,6)

//6. Class 
// class Person{
//     name
//     constructor(name){
//         this.name=name
//     }
//     greet(){
//         console.log(`Hi, ${this.name}`)
//     }
// }
// let p1Obj=new Person('Shavez')
// p1Obj.greet()

// 7. Promise
// 8. for i of arr , in
// 9. new Set([1,2,2,3])
// 10. new Map()
// let mp=new Map()
// mp.set(1,'one')
// mp.set('two',2)
// console.log(mp.get(1))
// console.log(mp.get('two'))
// console.log(mp.get(2))
// console.log(mp.has(2))
// mp.delete(1)
// console.log(mp.size)
// mp.clear()
// console.log(mp.size)

//11. map filter reduce
// let arr=[1,2,3,4,5,6] //56
// sum of the squares of even numbers 
// let sum=0
// for(let i=1;i<arr.length;i+=2){
//   sum+=arr[i]*arr[i]
// }
// console.log(sum)
// let even=arr.filter(val=>val%2==0)
// let sqrs=even.map(val=>val*val) 
// let sum=sqrs.reduce((acc,val)=>{
//   return acc+val
// },0)
//console.log(arr.filter(val=>val%2==0).map(val=>val*val).reduce((acc,val)=>acc+val,0))
