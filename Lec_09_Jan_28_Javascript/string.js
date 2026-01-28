// strings 
let str='hello words'  //immutable
// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// str='   asdf    '
// console.log(str.trim().length)

// slice (str) vs splice (arr)
// console.log(str.slice(0,5))
// console.log(str.slice(-5,-1))

// let arr=[1,2,3,4]
// //insert 9 at 2nd index //12934
// //splice(inde,delete, insert)
// arr.splice(2,1,9)
// console.log(arr)


// str='hello words' 
// let splitted=str.split('')
// console.log(splitted)
// let joins=splitted.join('')
// console.log(joins)
//catch reverse => array
// console.log([1,2,3,4].reverse())


str='hello words' 
// let s=str.split('')
// let r=s.reverse()
// console.log(r.join(''))
// console.log(str.split('').reverse().join(''))


// console.log("hello world world".replace("world", "JS"));   
// console.log("ha ha ha".replaceAll("ha", "ho"));      

let arr=[1,2,3]
// console.log(str.includes('he'))
// console.log(arr.includes(1))


str='122344' 
//OUTPUT: 4321
//30: sum of squares
let res=str.split('')
let rev=res.reverse()

let dummy=[]
for(let i of rev ){
  // console.log(i)
  if(!dummy.includes(i)){
    dummy.push(i)
  }
}
let out=dummy.join('') //"4321"
let sum=0
for(let i=0;i<out.length;i++){
  // let t=Number(out[i])
  let t=+out[i]
  sum+=out[i]*out[i]
}
console.log(typeof sum)

// How to capitalize first letter? 
let s = "hello"; //Hello