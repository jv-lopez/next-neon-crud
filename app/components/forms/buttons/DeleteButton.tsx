import { Button } from '@/components/ui/button';
import { Loader2, Trash } from 'lucide-react';
import React from 'react';
import { useFormStatus } from 'react-dom';

export const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      variant="outline"
      className="p-2 w-8 h-8"
    >
      {pending ? (
        <Loader2 className="animate-spin" />
      ) : (
        <Trash className="text-red-600" />
      )}
    </Button>
  );
};
