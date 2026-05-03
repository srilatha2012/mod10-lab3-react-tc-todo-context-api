
import './App.css'
import TodoInput from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoProvider } from './contexts/TodoContext'

function App() {


  return (
    <>
    <h1>Todo App(Context API)</h1>
    <TodoProvider>
      <TodoInput/>
      <TodoList/>
     </TodoProvider>
    </>
  )
}

export default App
