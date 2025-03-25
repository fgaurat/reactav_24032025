import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from '../ui/checkbox'
import { useSaveTodo } from '@/hooks/useSaveTodo'


 
const formSchema = z.object({
  todoTitle: z.string().min(2,{"message":"Minimum 2 caractères"}).max(50),
  todoCompleted:z.boolean()
})

function TodoForm() {
  const {saveTodo,isLoading} = useSaveTodo()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todoTitle: "",
      todoCompleted:false
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    saveTodo({"title":values.todoTitle,"completed":values.todoCompleted})
    
  }

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="todoTitle"
          render={({ field }) => (

            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Todo title" {...field} />
              </FormControl>
              <FormDescription>
                Todo title
              </FormDescription>
              <FormMessage />
            </FormItem>


          )}
        />
        <FormField
          control={form.control}
          name="todoCompleted"
          render={({ field }) => (

            <FormItem>
              <FormLabel>Completed</FormLabel>
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange}/>
              </FormControl>
              <FormDescription>
                Todo completed
              </FormDescription>
              <FormMessage />
            </FormItem>


          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default TodoForm