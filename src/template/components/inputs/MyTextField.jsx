import { TextField } from "@mui/material";
export const MyTextField = ({ label, name, onBlur, meta, onChange, value, ...props }) => {
    return (
        <TextField
            error={!!(meta?.touched && meta?.error)}
            helperText={meta?.touched && meta?.error}
            margin="normal"
            fullWidth
            id={name}
            label={label}
            value={value}
            onChange={onChange || (() => { })}
            name={name}
            onBlur={onBlur || (() => { })}
            {...props}
        />
    )
}
