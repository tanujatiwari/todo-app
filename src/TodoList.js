import React from "react"
import { Paper, List, Divider } from "@mui/material"
import Todo from "./Todo"
function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <React.Fragment key={i}>
                            <Todo
                                {...todo}
                                key={todo.id}
                                deleteTodo={deleteTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        )
    return null
}

export default TodoList