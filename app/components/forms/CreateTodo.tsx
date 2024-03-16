'use client';
import { useRef } from 'react';
import { createItem } from '@/app/action';

import { useFormState } from 'react-dom';
import { SaveButton } from '@/app/components/forms/buttons/SaveButton';

export const CreateTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(createItem, {
    input: '',
  });

  return (
    <form
      className="flex flex-col space-y-4"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   const form = e.target as HTMLFormElement;
      //   const formData = new FormData(form);

      //   createItem(formData).then(() => {
      //     form.reset();
      //   });
      // }}
      action={async (formData: FormData) => {
        formAction(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
    >
      <input
        type="text"
        name="input"
        className="h-10 w-full rounded-md border px-3 py-1"
      />

      <SaveButton />
    </form>
  );
};
