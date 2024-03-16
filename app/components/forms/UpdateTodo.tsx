import { editItem } from '@/app/action';
import { SaveButton } from '@/app/components/forms/buttons/SaveButton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

type Props = {
  todo: {
    id: string;
    input: string;
  };
  activeForm: string;
  setActive: Dispatch<SetStateAction<string>>;
};

export const UpdateTodo = ({ todo, activeForm, setActive }: Props) => {
  const [state, formAction] = useFormState(editItem, {
    message: '',
    pending: true,
  });

  useEffect(() => {
    if (state.pending === false) {
      setActive('');
    }
  }, [setActive, state.pending]);

  return (
    <form
      key={todo.id}
      className={cn(
        'gap-2 justify-between w-full',
        todo.id === activeForm ? 'flex' : 'hidden',
      )}
      action={formAction}
    >
      <input type="hidden" name="inputId" defaultValue={todo.id} />
      <input
        type="input"
        name="input"
        defaultValue={todo.input}
        className="h-10 rounded-md border px-3 py-1"
      />
      <div className="space-x-1 flex ">
        <Button type="button" variant="secondary" onClick={() => setActive('')}>
          Cancel
        </Button>
        <SaveButton />
      </div>
    </form>
  );
};
