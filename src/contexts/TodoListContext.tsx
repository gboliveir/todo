import { createContext, ReactNode, SetStateAction, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const initialTodoList = [
  {
    id: uuidv4(),
    isActive: false,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloremque dolor facilis ipsum voluptatem nihil ex dicta earum aliquid in temporibus doloribus amet nobis facere error unde eius porro quia!'
  },
  {
    id: uuidv4(),
    isActive: false,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloremque dolor facilis ipsum voluptatem nihil ex dicta earum aliquid in temporibus doloribus amet nobis facere error unde eius porro quia!'
  }
]

interface TodoListProviderProps {
  children: ReactNode;
}

interface TodoListData {
  id: string;
  isActive: boolean;
  description: string;
}

interface TodoListContextData {
  todoList: TodoListData[];
  addTodo: (todo: TodoListData) => void;
  removeTodo: (id: string) => void;
  handleChangeActivationTodoItem: (id: string) => void;
}

export const TodoListContext = createContext<TodoListContextData>({} as TodoListContextData);

export function TodoListProvider({ children }: TodoListProviderProps) {
  const [todoList, setTodoList] = useState<TodoListData[]>(initialTodoList);

  async function addTodo(newTodo: TodoListData) {
    setTodoList([ ...todoList, newTodo ]);
  }

  async function removeTodo(id: string) {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    
    setTodoList(newTodoList);
  }

  async function handleChangeActivationTodoItem(id: string) {
    console.log(id);

    const newTodoList = todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, isActive: !todo.isActive }
      }

      return todo;
    });

    console.log(newTodoList);
    
    setTodoList(newTodoList);
  }

  return (
    <TodoListContext.Provider value={{ todoList, addTodo, removeTodo, handleChangeActivationTodoItem }}>
      {children}
    </TodoListContext.Provider>
  );
}