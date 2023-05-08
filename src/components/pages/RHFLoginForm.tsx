import React from 'react'
import {useForm} from 'react-hook-form';

type FormValue = {

    username:string,
    email:string,
}

const RHFLoginForm:React.FC = () => {
    const form = useForm<FormValue>();
    const {register} = form
  return (
    <React.Fragment>
        <form>
            <label> First Name</label>
            <input id='username' type='text' {...register("username")} />
            <label> Email</label>
            <input id='email' type='email' {...register("email")}/> 
        </form>
    </React.Fragment>

  )
}

export default RHFLoginForm