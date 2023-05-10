import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Stack} from '@mui/material';

const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required")
})

type FormValue = {
    username: string,
    email: string,
}

const RHFLoginForm: React.FC = () => {

    const form = useForm<FormValue>(
        {
            defaultValues: {
                username: "dadafd",
                email: "abc@gmail.com",
            },

            resolver: yupResolver(schema)
        }
    );

    const { register, formState, handleSubmit } = form
    const { errors } = formState
    const onSubmit = (data:FormValue)=>{
        console.log(data)
    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2} width={400} margin={"auto"}>
                    <TextField label="username" type='text' {...register("username")}/>
                    <p>{errors.username?.message}</p>
                    <TextField label="email" type='email' {...register("email")}/>
                    <Button type='submit' variant='contained' color='primary'>Submit</Button>
                    <p>{errors.email?.message}</p>
                </Stack>
            </form>
        </React.Fragment>
    )
}

export default RHFLoginForm