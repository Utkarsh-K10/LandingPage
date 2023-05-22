import { Button, Chip, Divider, FormHelperText, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    email: yup.string().email().required("Please enter email"),
    password: yup.string().required("enter password").min(3,' password atleast 3 char long'),
    confirmpassword: yup.string().required("enter password").oneOf([yup.ref('password')],''),
});

type formValue = {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
}

const SignupPage: React.FC = () => {

    const form = useForm<formValue>(({
        defaultValues: {
            username: "",
            email: ""
        },
        resolver: yupResolver(schema),
    }));
    const { register, handleSubmit, formState, getValues } = form;
    const { errors} = formState;
    const onSubmit = (data: formValue) => {
        console.log(data);
    }

    return (
        <React.Fragment>
            <Paper elevation={4} sx={{ width: 430, margin: "auto", paddingY: 2 }}>
                <Divider>
                    <Chip icon={<SchoolIcon />} label="Admin" variant='outlined' color='primary' />
                </Divider>
                <Typography variant='h5' display={"block"} m={"auto"} padding={2}>
                    Fill Details to Signup
                </Typography>
                <Divider/>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                        <TextField label="Username" variant='outlined' type='text' {...register("username")} helperText={errors.username?.message} />
                        <TextField label="Email" variant='outlined' type='email' {...register("email")} helperText={errors.email?.message} />
                        <TextField label="Password" variant='outlined' type='password' {...register("password")} helperText={errors.password?.message} />
                        <TextField label="Confirm Password" variant='outlined' type='password' {...register("confirmpassword")} helperText={errors.confirmpassword?.message} />
                        {getValues("password") && getValues("confirmpassword") && (
                            <FormHelperText>
                                {
                                    getValues("password") === getValues("confirmpassword") ? (<span style={{ color: 'green' }}>password does match</span>) : (<span style={{ color: 'red' }}>password does not match</span>)
                                }
                            </FormHelperText>
                        )}
                        <Button type='submit' variant='contained' disabled={!getValues("email") || !getValues("password") || !getValues("username") || !getValues("confirmpassword")}>Submit</Button>
                    </Stack>
                </form>
            </Paper>
        </React.Fragment>
    )
}

export default SignupPage