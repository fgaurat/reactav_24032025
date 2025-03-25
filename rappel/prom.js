

const getTodo = (id)=>{

    const p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const todo ={
                id,
                title: `Todo id : ${id}`,
                completed:false
            } 
            resolve(todo)
        
        },500)
    
    })
    return p

}

// const pTodo = getTodo(1)
// pTodo.then(todo=>console.log(todo))

// getTodo(1).then(todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then(todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then(todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then(todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then(todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then(todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// })

// const pTodo1 = getTodo(1)
// const pTodo2 = getTodo(2)
// const pTodo3 = getTodo(3)
// const pTodo4 = getTodo(4)

// Promise.all([pTodo1,pTodo2,pTodo3,pTodo4]).then((arr)=>console.log(arr))

// const main = async ()=>{
// const todo1 = await getTodo(1)
// console.log(todo1)
// const todo2 = await getTodo(todo1.id+1)
// console.log(todo2)
// const todo3 = await getTodo(todo2.id+1)
// console.log(todo3)
// const todo4 = await getTodo(todo3.id+1)
// console.log(todo4)

// }


// main()




const f = ()=>{
    return Promise.resolve(2)
}



const r = f()
// r.then(data => console.log(data))
r.then(console.log)