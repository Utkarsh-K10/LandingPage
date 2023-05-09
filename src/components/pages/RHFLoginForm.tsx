import React from 'react'
import { useForm } from 'react-hook-form';

type FormValue = {

    username: string,
    email: string,
}

const RHFLoginForm: React.FC = () => {
    const form = useForm<FormValue>();
    const { register,formState } = form
    const {errors} = formState
    return (
        <React.Fragment>
            <form>
                <label htmlFor='username'> First Name</label>
                <input id='username' type='text' {...register("username")} />
                <label htmlFor='email'> Email</label>
                <input
                    id='email'
                    type='email'
                    {...register("email", {
                        required:{
                            value:true, 
                            message:"Email Already Esists"
                        },
                        validate: {
                            emailAvaialable: async (fieldValue:React.HTMLInputTypeAttribute) => {
                                const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                                const data = await response.json();
                                return data.length === 0 || "Email Already Exists";
                            }
                        }
                    }
                    )} />
                <p>{errors.email?.message}</p>
                <button type='submit'>Submit</button>
            </form>
            console.log({errors.email?.message});
        </React.Fragment>
    )
}

export default RHFLoginForm