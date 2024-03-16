'use server'

import prisma from '@/app/db'
import { revalidatePath } from 'next/cache'

export async function createItem(
  prevState: {
    input: string
  },
  formData: FormData,
) {
  const input = formData.get('input') as string
  try {
    await prisma.todo.create({
      data: {
        input: input,
      },
    })

    revalidatePath('/better')
    return {
      input: '',
    }
  } catch (error) {
    return {
      input: input,
    }
  }
}

export async function editItem(
  prevState: {
    message: string
    pending: boolean
  },
  formData: FormData,
) {
  const input = formData.get('input') as string
  const inputId = formData.get('inputId') as string

  try {
    await prisma.todo.update({
      where: {
        id: inputId,
      },
      data: {
        input: input,
      },
    })

    revalidatePath('/')
    return { message: `Todo Added.`, pending: false }
  } catch (e) {
    return { message: `Failed to create todo`, pending: false }
  }
}

export async function deleteItem(formData: FormData) {
  const inputId = formData.get('inputId') as string

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  })

  revalidatePath('/')
}
