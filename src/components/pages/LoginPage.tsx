import { Button, Chip,Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import Face2Icon from '@mui/icons-material/Face2';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    email: yup.string().required("Email Required"),
    password: yup.string().required("Enter Password")
})

type formVlaue = {
    email: string,
    password: string,
}
const LoginPage = () => {
    const form = useForm<formVlaue>(({
        defaultValues: {
            email: "test@gmail.com",
            password:"****"
        },
        resolver: yupResolver(schema),
    }));
    const { register, handleSubmit, formState } = form
    const { errors } = formState;

    const onSubmit = (data: formVlaue) => {
        console.log(data)
    }

    return (
        <React.Fragment>
            <Paper elevation={4} sx={{ width: 430, margin: "auto", paddingY: 2 }}>
                <Divider>
                    <Chip icon={<Face2Icon />} label="Login" variant='outlined' color='primary' />
                </Divider>
                <Typography variant='h5' display={"block"} m={"auto"} padding={2}>
                    Login To Continue
                </Typography>
                <Divider variant="middle" />
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                        <TextField label="Username" variant='filled' type='email' {...register("email")} helperText={errors.email?.message} />
                        <TextField label="Password" variant='filled' type="password" {...register("password")} helperText={errors.password?.message} />
                        <Button type='submit' variant='contained'>Submit</Button>
                    </Stack>
                </form>
            </Paper>
        </React.Fragment>
    )
}

export default LoginPage