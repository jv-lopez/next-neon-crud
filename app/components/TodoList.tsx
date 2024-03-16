'use client'

import { DeleteTodo } from '@/app/components/forms/DeleteTodo'
import { UpdateTodo } from '@/app/components/forms/UpdateTodo'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { PenLine } from 'lucide-react'

type Props = {
  data: {
    id: string
    input: string
  }[]
}

export const TodoList = ({ data }: Props) => {
  const [activeForm, setActiveForm] = useState<string>('')

  const showEditForm = (id: string) => {
    setActiveForm(id)
  }

  return (
    <>
      {data?.map((todo) => (
        <div
          key={todo.id}
          className=' flex flex-row space-y-2 items-center justify-between rounded-lg border p-4'
        >
          <div
            className={cn(
              'flex space-x-2',
              todo.id === activeForm ? 'hidden' : 'flex',
            )}
          >
            <div className='grid gap-1.5 leading-none'>
              <label
                htmlFor={`checkbox-${todo.id}`}
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                {todo.input}
              </label>
            </div>
          </div>
          <div
            className={cn(
              'space-x-2 items-center',
              todo.id === activeForm ? 'hidden' : 'flex',
            )}
          >
            <Button
              variant='outline'
              className='p-2 w-8 h-8'
              onClick={() => showEditForm(todo.id)}
            >
              <PenLine />
            </Button>
            <DeleteTodo id={todo.id} />
          </div>
          <UpdateTodo
            activeForm={activeForm}
            setActive={setActiveForm}
            todo={todo}
          />
        </div>
      ))}
    </>
  )
}
