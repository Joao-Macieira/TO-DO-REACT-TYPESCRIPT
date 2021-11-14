import { ChangeEvent, useState } from 'react';
import { Item } from '../../types/Item';
import { Itens } from "./List.styled";

type Props = {
  list: Item;
  changeDone: (id: string, taskName: string, status: boolean) => void;
  deleteItem: (id: string) => void;
}

const List = ( { list, changeDone, deleteItem }: Props ) => {
  const [isChecked, setIsChecked] = useState(list.done)

  const handleChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    changeDone(list._id, list.name, e.target.checked)
  }

  const handleDelete = () => {
    deleteItem(list._id)
  }

  return (
    <Itens done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChangeStatus}
      />
      <label>{list.name}</label>
      <span onClick={handleDelete}>X</span>
    </Itens>
  )
}

export default List;
