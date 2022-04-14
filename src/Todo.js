import React from 'react'
import { IconButton, ListItem, ListItemText, Checkbox, ListItemSecondaryAction } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import useToggle from './hooks/useToggle'
import EditTodoForm from './EditTodoForm'

function Todo({ task, completed, id, deleteTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle()
    return (
        <ListItem key={id} style={{ height: '64px' }}>
            {
                isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} /> :
                    <>
                        <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
                        <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }} onClick={() => toggleTodo(id)}>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Edit' onClick={toggle}>
                                <Edit></Edit>
                            </IconButton>
                            <IconButton aria-label='Delete' onClick={() => deleteTodo(id)}>
                                <Delete></Delete>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
            }
        </ListItem >
    )
}

export default Todo