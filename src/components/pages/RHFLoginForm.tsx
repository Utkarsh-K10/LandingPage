import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Stack, Button, Typography, Paper, Divider, Chip } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Not a valid email").required("Email is required"),
    mobile: yup.number().required("Mobile nu is must"),
})

type FormValue = {
    username: string,
    email: string,
    mobile: number,
}

const RHFLoginForm: React.FC = () => {

    const form = useForm<FormValue>(
        {
            defaultValues: {
                username: "dadafd",
                email: "abc@gmail.com",
                mobile: 0
            },
            resolver: yupResolver(schema)
        }
    );

    const { register, formState, handleSubmit } = form
    const { errors } = formState
    const onSubmit = (data: FormValue) => {
        console.log(data)
    }

    return (
        <React.Fragment>
            <Paper elevation={4} sx={{ width: 450, margin: "auto", paddingY: 2 }}>
                <Divider>
                    <Chip icon={<SupportAgentIcon/>} label="Support" color='success' />
                </Divider>
                <Typography variant='h4' display={"block"} m={"auto"} padding={2}>
                    Have Any Queries
                </Typography>
                <Divider variant="middle" />
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                        <TextField label="email" type='email' {...register("email")} helperText={errors.email?.message} />
                        <TextField label="mobile" type="number" {...register("mobile")} helperText={errors.mobile?.message} />
                        <TextField multiline maxRows={4} label="Enter Your Query" />
                        <Button type='submit' variant='outlined'>Submit</Button>
                    </Stack>
                </form>
            </Paper>
        </React.Fragment>
    )
}

export default RHFLoginForm