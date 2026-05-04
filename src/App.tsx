
import './App.css'
import { FilterButtons } from './components/FilterButtons'
import TodoInput from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { FilterProvider } from './contexts/FilterContext'
import { TodoProvider } from './contexts/TodoContext'

function App() {


  return (
    <>
    <h1>Todo App(Context API)</h1>
    <TodoProvider>
      <FilterProvider>
      <TodoInput/>
      <FilterButtons/>
      <TodoList/>
      </FilterProvider>
     </TodoProvider>
    </>
  )
}

export default App
