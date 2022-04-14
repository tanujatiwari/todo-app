import { Typography, Grid, Toolbar, AppBar, Paper } from '@mui/material'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodoState from './hooks/useTodoState'

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
    const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodoState(initialTodos)
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