import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Stack} from '@mui/material';

const schema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    mobile: yup.number().required("Mobile nu is must"),
})

type FormValue = {
    username: string,
    email: string,
    mobile:number,
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
                    <p>{errors.email?.message}</p>
                    <TextField label = "mobile" type="number" {...register("mobile")} />
                    <p>{errors.mobile?.message}</p>
                </Stack>
            </form>
        </React.Fragment>
    )
}

export default RHFLoginForm