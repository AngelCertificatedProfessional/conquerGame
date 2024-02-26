import { useField } from "formik";
import { MySelect } from "../MySelect";

export const MySelectF = ({ label, name, menuIt, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <MySelect label={label} name={field.name} menuIt={menuIt} onBlur={field.onBlur}
            onChange={field.onChange} meta={meta} value={field.value} {...props} />
    )
}
