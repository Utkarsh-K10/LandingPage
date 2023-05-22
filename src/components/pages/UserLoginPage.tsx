import { Button, Chip, Divider, IconButton, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Face2Icon from '@mui/icons-material/Face2';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const schema = yup.object({
    email: yup.string().required("Email Required"),
    password: yup.string().required("enter password").min(3,' password atleast 3 char long'),
})

type formVlaue = {
    email: string,
    password: string,
}


const UserLoginPage:React.FC = () => {

    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<formVlaue>(({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(schema),
    }));
    const { register, handleSubmit, formState , getValues} = form
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
                        <TextField label="Username" variant='outlined' type='email' {...register("email")} helperText={errors.email?.message} />
                        <TextField 
                            label="Password" 
                            variant='outlined' 
                            type={showPassword ?'text' : 'password'}
                            {...register("password")}
                            helperText={errors.password?.message}
                            FormHelperTextProps={{color:'primary'}}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <Button type='submit' variant='contained' disabled={!getValues("email") || !getValues("password")}>Submit</Button>
                    </Stack>
                </form>
            </Paper>
        </React.Fragment>
    )
}

export default UserLoginPage