import prisma from '@/app/db'
import { TodoList } from '@/app/components/TodoList'
import { CreateTodo } from '@/app/components/forms/CreateTodo'

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      input: true,
      id: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return data
}

export default async function Home() {
  const data = await getData()
  return (
    <div className='h-screen w-screen flex flex-col gap-8 items-center justify-center'>
      <h1 className='text-center text-4xl font-bold'>CRUD APP - WITH NEON</h1>
      <div className='border rounded-lg shadow-xl p-10 w-1/3'>
        <CreateTodo />
        <div className='mt-5 flex flex-col gap-y-2'>
          <TodoList data={data} />
        </div>
      </div>
    </div>
  )
}
