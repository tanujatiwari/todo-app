import { Paper, TextField } from '@mui/material'
import useInput from './hooks/useInput'

function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInput("")
    return (
        <Paper style={{
            margin: "1rem 0", padding: '0 1rem'
        }}>
            <form onSubmit={e => {
                e.preventDefault()
                addTodo(value)
                reset()
            }}>
                <TextField variant="standard" value={value} onChange={handleChange} margin="normal" label="Add new Todo" fullWidth />
            </form>
        </ Paper >
    )
}

export default TodoForm