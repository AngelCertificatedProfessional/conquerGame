import { FormControlLabel, Switch } from "@mui/material";

export const MySwitch = ({ label, name, onBlur, meta, onChange, value, ...props }) => {
    return (
        <FormControlLabel
            control={<Switch checked={value} />}
            margin="normal"
            label={label}
            id={name}
            value={value}
            onChange={onChange}
            name={name}
            onBlur={onBlur}
            {...props}
        />
    )
}