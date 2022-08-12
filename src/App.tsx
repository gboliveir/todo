import { Header } from './components/Header';
import { TodoCreateInput } from './components/TodoCreateInput';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <div>
      <Header />
      <TodoCreateInput />
      <TodoList />
    </div>
  )
}