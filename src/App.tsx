
import './App.css'
import { FilterButtons } from './components/FilterButtons'
import TodoInput from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { FilterProvider } from './contexts/FilterContext'
import { useTheme } from './contexts/ThemeContext'
import { TodoProvider } from './contexts/TodoContext'

function App() {

 const { theme } = useTheme();
  return (
    <div className={`app-container ${theme}`}>
    <h1>Todo App(Context API)</h1>
    <ThemeToggleButton/>
    <TodoProvider>
      <FilterProvider>
      <TodoInput/>
      <FilterButtons/>
      <TodoList/>
      </FilterProvider>
     </TodoProvider>
    </div>
  )
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}

export default App
