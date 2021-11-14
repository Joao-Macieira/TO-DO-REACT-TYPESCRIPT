import { useEffect, useState } from "react";

import { Item } from "./types/Item";
import List from "./components/List";
import { AddArea } from "./components/AddArea";

import { Container, Area, Header } from "./App.styled";
import TaskService from "./services/TaskService";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    const { data } = await TaskService.getAll();

      setList(data);
  }

  const handleAddTask = async (taskName: string) => {
    const newItem = { name: taskName, done: false }

    await TaskService.create(newItem);

    init();
  }

  const onChangeStatus = async (id: string, taskName: string, status: boolean) => {
    const updatedList = { name: taskName, done: status }

    await TaskService.update(updatedList, id)

    init()
  }

  const deleteItemList = async (id: string) => {
    await TaskService.delete(id);

    init()
  }

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index ) =>
          <List key={index} list={item} changeDone={onChangeStatus} deleteItem={deleteItemList} />
        )}
      </Area>
    </Container>
  )
}

export default App;
