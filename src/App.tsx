import { Header } from './components/Header';
import { TodoCreateInput } from './components/TodoCreateInput';
import { TodoList } from './components/TodoList';

import { TodoListProvider } from './contexts/TodoListContext';

export function App() {
  return (
    <div>
      <Header />
      <TodoListProvider>
        <TodoCreateInput />
        <TodoList />
      </TodoListProvider>
    </div>
  )
}