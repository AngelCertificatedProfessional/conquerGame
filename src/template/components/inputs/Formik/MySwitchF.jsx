import { useField } from "formik";
import { MySwitch } from "../MySwitch";

export const MySwitchF = ({ label, name, ...props }) => {
    const [field, meta] = useField(name);
    return (
        <MySwitch label={label} name={field.name} onBlur={field.onBlur}
            onChange={field.onChange} meta={meta} value={field.value} {...props} />
    )
}
