import { TextField } from '@mui/material'
import useInput from './hooks/useInput'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ListItemSecondaryAction, IconButton } from '@mui/material'

function EditTodoForm({ editTodo, id, task, toggle }) {
    const [value, handleChange, reset] = useInput(task)
    return (
        <form onSubmit={e => {
            e.preventDefault()
            editTodo(id, value)
            reset()
            toggle()
        }}
            style={{
                marginLeft: '1rem',
                width: '100%'
            }}>
            <TextField variant="standard" value={value} onChange={handleChange} label="Edit Todo" margin="normal" fullWidth autoFocus />
            <ListItemSecondaryAction>
                <IconButton onClick={() => toggle()} >
                    <CancelOutlinedIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </form >
    )
}

export default EditTodoForm