import { Paper, List, ListItem, Divider, ListItemText } from "@mui/material"
import Todo from "./Todo"
function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                task={todo.task}
                                key={todo.id}
                                id={todo.id}
                                completed={todo.completed}
                                deleteTodo={deleteTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    return null
}

export default TodoList