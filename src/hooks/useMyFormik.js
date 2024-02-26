import { useFormik } from "formik";
import { useEffect } from "react";
export const useMyFormik = ({ vValor, agregar, modificar, yup }) => {

    const formik = useFormik({
        initialValues: {
            ...vValor,
            submit: null
        },
        validationSchema: yup,
        onSubmit: async (values, helpers) => {
            try {
                const vValorT = { ...values }
                if (vValor.id !== undefined && vValor.id !== '') {
                    vValorT.id = vValor.id
                    modificar(vValorT)
                } else {
                    agregar(vValorT)
                }

            } catch (err) {
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: err.message });
                helpers.setSubmitting(false);
            }
        }
    });
    const { setValues, setTouched } = formik;
    useEffect(() => {
        //reiniciamos el formik
        setValues({
            ...vValor
        })
    }, [vValor])

    useEffect(() => {
        const touchedValues = {};
        Object.keys(vValor).forEach((key) => {
            touchedValues[key] = false;
        });
        setTouched(touchedValues);
    }, [vValor])

    return {
        formik
    }
}
