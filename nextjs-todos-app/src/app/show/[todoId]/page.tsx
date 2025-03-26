import React from 'react'

export async function generateStaticParams(){
    const todos = await service.getTodos()
    return todos.map()

}


function page({params}:{params:{todoId:number}}) {
    const {todoId} = params

    const todo = await service.getTodo(todoId)



  return (
    <div>page</div>
  )
}

export default page