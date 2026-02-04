// setTimeout(function() {
//   console.log('three')
// }, 3000);
// setTimeout(function() {
//   console.log('one')
// }, 1000);
// setTimeout(function() {
//   console.log('two')
// }, 2000);

//callback hell, pyramid of doom
// setTimeout(function() {
//   console.log('three')
//   setTimeout(function() {
//   console.log('one')
//   setTimeout(function() {
//   console.log('two')
// }, 2000);
// }, 1000);
// }, 3000);

//with Callback 
// function Order(processCB){
//   console.log('Order..')
//   processCB(Deliver)
// }
// function Process(deliverCB){
//   console.log('Process..')
//   deliverCB()
// }
// function Deliver(){
//   console.log('Deliver..')
// }
// Order(Process)

// api => server 
// async , 1000 
// data:
// states: pending, fullfilled, rejected
// Promise(res,rej)

// let p=new Promise((res,rej)=>setTimeout(function() {
//   let allgood=true
//   if(allgood){
//     res('resolve promise')
//   }else{
//     rej('error accured')
//   }
// }, 1000))
// p
// .then(data=>console.log(data))
// .catch(error=>console.log(error))
// .finally(()=>{
//   console.log('anyway run')
// })

let order=new Promise((res,rej)=>setTimeout(()=>rej('rejected Order'), 3000))
let process=new Promise((res,rej)=>setTimeout(()=>res('process resolve'), 1000))
let deliver=new Promise((res,rej)=>setTimeout(()=>res('deliver resolve'), 2000))

// order.then((data)=>{
//   console.log('order then:',data)
//   return process
// }).then((data)=>{
//   console.log('process then:',data)
//   return deliver
// }).then((data)=>{
//   console.log('deliver then:',data)
// }).catch(err=>console.log(err))
async function fn(){
  try {
    /* code */
     let o=await order
   console.log(o)
  let p=await process
  console.log(p)
  let d=await deliver
  console.log(d)
  } catch (e) {
    console.log(e)
  } finally{
    console.log('anyway run')
  }
}
fn()


// homework
// promise 
// all, allSettled, race, raceAll