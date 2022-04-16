import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './useLocalStorage';

function useTodoState(initialVal) {
    const [todos, setTodos] = useLocalStorage("todos", initialVal)
    return {
        todos,
        addTodo: (newTodo) => {
            setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }])
        },
        deleteTodo: todoId => {
            let newTodoList = todos.filter(todo => todo.id !== todoId)
            setTodos(newTodoList)
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodos)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => todoId === todo.id ? { ...todo, task: newTask } : todo)
            setTodos(updatedTodos)
        }
    }
}

export default useTodoState