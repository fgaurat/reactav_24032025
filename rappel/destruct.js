

const arr = [10,20,30,40,50]

console.log(arr)

console.log(arr[0])

const [a,b,...c] = arr
console.log(a,b,c)

const f = ()=>{
    return "truc"
}

const v = 12

const s = [v,f]


const [thevalue, thefunction] =s
console.log(thevalue, thefunction())
// console.log(f()) 

const o = {"name":"GAURAT","firstName":"Fred","age":18,"job":"dev"}

const o2 = {...o,"age":48}
console.log(o2)



const theFunction = ()=>{
    const o = {"name":"GAURAT","firstName":"Fred","age":18,"job":"dev"}
    return o
}



const {name} = theFunction()
