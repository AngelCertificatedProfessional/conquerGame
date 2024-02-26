import { Typography } from "@mui/material"

export const MyErrorF = ({ errors }) => {
    return (
        <>
            {
                errors && (
                    <Typography
                        color="error"
                        sx={{ mt: 3 }}
                        variant="body2"
                    >
                        {errors}
                    </Typography>
                )
            }
        </>
    )
}
