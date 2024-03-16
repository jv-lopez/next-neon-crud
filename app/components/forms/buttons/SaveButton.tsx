import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useFormStatus } from 'react-dom';

export const SaveButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button variant="default">
      {pending ? <Loader2 className="animate-spin" /> : 'Save'}
    </Button>
  );
};
