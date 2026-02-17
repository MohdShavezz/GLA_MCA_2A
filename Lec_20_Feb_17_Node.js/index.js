import http from 'http'

const users=[
    {id:1,name:'tom',age:'22'},
    {id:2,name:'doe',age:'23'},
    {id:3,name:'riya',age:'21'},
]
const app=http.createServer((req,res)=>{
    if( req.method==="GET"&&req.url==='/'){
        res.end('default / route')
    }else  if( req.method==="GET"&&req.url==='/users'){//http://localhost:5000/users 
        res.end(JSON.stringify(users))
    }else if(req.method==='POST' && req.url==='/users'){ //http://localhost:5000/users with payload
        let body=''
        req.on('data',(chunk)=>{
            body+=chunk
        })
        req.on('end',()=>{
            let userObj=JSON.parse(body)
            let obj={
                id:users.length>0?users.length+1:1,
                ...userObj
            }
            users.push(obj)
            res.end(JSON.stringify(users))
        })
    }else if( req.method==="DELETE" && req.url.includes('/users/')){//http://localhost:5000/users/id
        const userId=+req.url.split('/')[2]
        console.log(userId,typeof userId)
        const ind=users.findIndex(ele=>ele.id===userId)
        // console.log(ind)
        users.splice(ind,1)
        res.end(JSON.stringify(users))
    }else if( req.method==="PUT" && req.url.includes('/users/')){//http://localhost:5000/users/id with payload
        const userId=+req.url.split('/')[2]
         let body=''
        req.on('data',(chunk)=>{
            body+=chunk
        })
        req.on('end',()=>{
            const userObj=JSON.parse(body)
            const ind=users.findIndex(ele=>ele.id===userId)
            users[ind]={id:userId,...userObj}
            res.end(JSON.stringify(users))
        })
                
    }
})

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server is running of port ',port)
})