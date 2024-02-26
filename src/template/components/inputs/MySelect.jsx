import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

export const MySelect = ({ label, name, menuIt, onBlur, onChange, value, meta, ...props }) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel required id="demo-simple-select-label">{label}</InputLabel>
            <Select
                label={label}
                value={value}
                id={name}
                name={name}
                onChange={onChange || (() => { })}
                onBlur={onBlur || (() => { })}
                {...props}
                error={
                    Boolean(!!(meta?.touched) && !!(meta?.error))
                }
            >
                {menuIt.map(menu => (
                    <MenuItem key={menu.id} value={menu.id}>
                        {menu.descripcion}
                    </MenuItem>
                ))}
            </Select>
            {
                !!(meta?.touched) && !!(meta?.error) && (
                    <FormHelperText error>{meta.error}</FormHelperText>
                )
            }
        </FormControl >
    )
}
