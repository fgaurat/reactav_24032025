import { beforeEach, describe, test,expect } from "vitest";
import { Todos } from "../core/Todo";
import TodoList from './TodoList'
import {render} from '@testing-library/react'
// 



describe('Testing TodoList',()=>{

    let todos:Todos

    beforeEach(()=>{
        todos = [
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
              },
              {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
              },
              {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
              }
        ]
    })

    test('Render Todolist',()=>{
        render(<TodoList todos={todos}/>)
    })

    test('Render 3 Rows in Todolist',()=>{
        const r = render(<TodoList todos={todos}/>)
        const rows = r.container.querySelectorAll('tbody>tr')
        expect(rows.length).toBe(3)
    })



})