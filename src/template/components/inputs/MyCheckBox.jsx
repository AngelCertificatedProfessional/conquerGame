import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import { useField } from "formik";

export const MyCheckBox = ({ label, name }) => {
    const [field] = useField(name);
    return (
        <FormControl fullWidth>
            <FormControlLabel
                control={
                    <Checkbox checked={field.value} />
                }
                margin="normal"
                label={label}
                id={field.name}
                value={field.value}
                onChange={field.onChange}
                name={field.name}
                onBlur={field.onBlur}
            />
        </FormControl>
    )
}