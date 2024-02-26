import { useField } from "formik";
import { MyTextField } from "../MyTextField";
export const MyTextFieldF = ({ label, name, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <MyTextField label={label} name={field.name} onBlur={field.onBlur}
            onChange={field.onChange} meta={meta} value={field.value} {...props} />
    )
}
