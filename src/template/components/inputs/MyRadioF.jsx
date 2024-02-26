import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useField } from "formik";

export const MyRadioF = ({ label, name, menuIt }) => {
    const [field] = useField(name);
    return (
        <FormControl fullWidth margin="normal">
            <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                id={field.name}
                value={field.value}
                onChange={field.onChange}
                name={field.name}
                onBlur={field.onBlur}
            >
                {menuIt.map(menu => (
                    <FormControlLabel value={menu.id} key={menu.id}
                        control={<Radio />}
                        label={menu.descripcion} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}
