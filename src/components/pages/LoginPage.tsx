import { Button, Chip, Divider, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import {useForm} from 'react-hook-form'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({ 
    email:yup.string().required("Email Required"),
    password: yup.string().required("enter Password")
})

type formVlaue = {
    email: string,
    password:string,
}
const LoginPage = () => {
    const form = useForm<formVlaue>(({
        defaultValues:{
            email:"test@gmail.com",
            password:"axy@123",
        },
        resolver:yupResolver(schema),
    }));
    const {register, handleSubmit, formState} = form
    const {errors} = formState; 

    const onSubmit = (data:formVlaue)=>{
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
                        <TextField label="Email" type='email' {...register("email")} helperText={errors.email?.message} />
                        <TextField label="Password" type="password" {...register("password")} helperText={errors.password?.message} />
                        <TextField multiline maxRows={4} label="Enter Your Query" />
                        <Button type='submit' variant='outlined'>Submit</Button>
                    </Stack>
                </form>
            </Paper>
    </React.Fragment>
  )
}

export default LoginPage