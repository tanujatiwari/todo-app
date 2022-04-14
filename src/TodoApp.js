import { useState, useEffect } from 'react'
import { Typography, Grid, Toolbar, AppBar, Paper } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = (newTodo) => {
        setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }])
    }
    const deleteTodo = todoId => {
        let newTodoList = todos.filter(todo => todo.id !== todoId)
        setTodos(newTodoList)
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
        setTodos(updatedTodos)
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => todoId === todo.id ? { ...todo, task: newTask } : todo)
        setTodos(updatedTodos)
    }
    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}>
            <AppBar color="primary" position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color="inherit">Todos with Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper >
    )
}

export default TodoApp