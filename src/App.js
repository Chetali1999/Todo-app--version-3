import './App.css';
import AppName from './Components/AppName';
import AddTODO from './Components/AddTODO';
import TodoItems from './Components/TodoItems';
import { useState } from 'react'
import WelcomeMsge from './Components/WelcomMsge';

function App() {

  const initialTodoItems = [
    //   {
    //   name: 'Buy Milk',
    //   dueDate: '20-01-2024',
    // },
    // {
    //   name: 'Go To College',
    //   dueDate: '20-01-2024',
    // },
  ];

  const [todoItems, setToDoItems] = useState(initialTodoItems)

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItem = [...todoItems,
    {
      name: itemName,
      dueDate: itemDueDate,
    }
    ]
    setToDoItems(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) =>
      item.name !== todoItemName);
    setToDoItems(newTodoItem);
    // console.log(`Item Deleted:${todoItemName}`);
  }

  return (
    <>
      <center className='todo-container'>
        <AppName />
        <div className='todo-items'>
          <AddTODO onNewItem={handleNewItem} />
          {todoItems.length === 0 ?
            <WelcomeMsge />
            :
            <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
          }
        </div>
      </center>
    </>
  );
}

export default App;
