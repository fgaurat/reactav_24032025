import { beforeEach, describe, test, expect, beforeAll, afterAll } from "vitest";
import { Todos } from "../core/Todo";
import TodoListHook from "./TodoListHook";
import { render, waitFor } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

describe('Testing TodoList', () => {

    let todos: Todos

    const server = setupServer(
        http.get(import.meta.env.VITE_TODOS_URL, () => {
            return HttpResponse.json(todos)
        })
    )

    beforeAll(() => {
        server.listen()
    })

    afterAll(() => {
        server.close()
    })


    beforeEach(() => {
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


    test("Testing Mock Http TodoList", async () => {
        const r = render(<TodoListHook />)
        await waitFor(() => {
            const rows = r.container.querySelectorAll('tbody>tr')
            expect(rows.length).toBe(3)
        })
    })


})