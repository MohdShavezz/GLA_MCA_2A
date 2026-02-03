// let userObj={
//   // isActive:true,
//   firstname:"John",
//   lastname:"doe",
//   contact:{
//     phone:9989898980
//   }
// }
// Object.assign(userObj,{isActive:true})
// console.log(userObj)
// console.log({isActive:true,...userObj})

// let userObj2=userObj
// let userObj2={...userObj} //shallow

//deep vs shallow
// let userObj2=JSON.parse(JSON.stringify(userObj))

// userObj2.firstname='fnchange'
// userObj2.contact.phone='phonechange'
// console.log(userObj)
// console.log(userObj2)

// let userObj={
//   firstname:"John",
//   lastname:"doe",
//   contact:{
//     phone:9989898980
//   },
//   // greet(){
//   //   console.log(`Hello ${this.firstname} ${this.lastname}`)
//   // }
// }
// function greet(gt){
//     console.log(`${gt} ${this.firstname} ${this.lastname}`)
// }

//call apply bind
// userObj.greet()
// greet.call(userObj,'Hello')
// greet.apply(userObj,['Hello'])
// greet.bind(userObj,'Hello')()


// Object.seal():
// Object.seal() is a method that seals an object, preventing the addition or deletion of properties, 
// while allowing the modification of existing properties.
// console.log(userDetails.isSealed(person)); // Output: false

// Object.freeze():
// Object.freeze() is a method that freezes an object, making it completely immutable.
// Frozen objects are read-only, and no modifications, additions, or deletions of properties are allowed.
// Object.isFrozen(userDetails) // false
// let obj=Object.freeze(userDetails) 
// obj.firstname='change' // not allowed


let arr = [1, 1, 2, 3, 4, 4, 5, 6]
// output: {'1':2,'2':1,'3':1,'4':2,'5':1,'6':1}
let obj={}
for(let i of arr){
  if(!obj.hasOwnProperty(i)){
    obj[i]=1
  }else{
    obj[i]+=1
  }
}
console.log(obj)
