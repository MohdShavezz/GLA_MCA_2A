import {EventEmitter} from 'events'

const myEmitter=new EventEmitter()

// myEmitter.on('greet',(data)=>{  // listen
//     console.log(data)
// })

// myEmitter.emit('greet',"good morning!!!")

// myEmitter.on('error',(error)=>{
//     console.log(error)
// })

myEmitter.on('event2',(data)=>{
    console.log(data)
})
myEmitter.on('event1',()=>{
    console.log('event1 run..')
    myEmitter.emit('event2','hi this is E2')
})

myEmitter.emit('event1')

