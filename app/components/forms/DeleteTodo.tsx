import { deleteItem } from '@/app/action';
import { DeleteButton } from '@/app/components/forms/buttons/DeleteButton';

type Props = {
  id: string;
};

export const DeleteTodo = (props: Props) => {
  return (
    <form action={deleteItem}>
      <input type="hidden" name="inputId" defaultValue={props.id} />
      <DeleteButton />
    </form>
  );
};
