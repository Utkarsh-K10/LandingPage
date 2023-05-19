import { Button, Chip, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Face2Icon from '@mui/icons-material/Face2';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = yup.object({
    username:yup.string().required("Please enter username"),
    email:yup.string().email().required("Please enter email"),
    password:yup.string().required("enter password"),
});

type formValue = {
    username:string;
    email:string;
    password:string;
}

const SignupPage = () => {

    const form = useForm<formValue>(({
        defaultValues:{
            username:"",
            email:"",
            password:"",
        },
        resolver:yupResolver(schema),
    }));
    const {register, handleSubmit, formState}  = form;
    const {errors} = formState;

    const onSubmit = (data:formValue)=>{
        console.log(data);
    }

  return (
    <React.Fragment>
        <Paper elevation={4} sx={{ width: 430, margin: "auto", paddingY: 2 }}>
                <Divider>
                    <Chip icon={<Face2Icon />} label="Signup" variant='outlined' color='primary' />
                </Divider>
                <Typography variant='h5' display={"block"} m={"auto"} padding={2}>
                    Fill Details to Signup
                </Typography>
                <Divider variant="middle" />
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                        <TextField label="Username" variant='outlined' type='text' {...register("username")} helperText={errors.username?.message} />
                        <TextField label="Email" variant='outlined' type='email' {...register("email")} helperText={errors.email?.message} />
                        <TextField label="Password" variant='outlined' type='password' {...register("password")} helperText={errors.password?.message} />
                        <TextField label="Confirm Password" variant='outlined' type='password' {...register("password")} helperText={errors.password?.message} />
                        <Button type='submit' variant='contained' disabled={!register("email") || !register("password")}>Submit</Button>
                    </Stack>
                </form>
            </Paper>
    </React.Fragment>
  )
}

export default SignupPage