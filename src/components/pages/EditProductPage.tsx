import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Chip, Divider, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from 'axios';

// yup form schema
const formschema = yup.object().shape({
    product_name: yup.string().required("Please enter the product name"),
    price: yup.number().required("Enter Price of the product")
});

type formValue =  {
    product_name : String
    price: number

}


const EditProductPage:React.FC = () => {

    const [ open, setOpen] = useState(false)
    const handleClose = ()=>setOpen(true)
    const form = useForm<formValue>(({
        resolver:yupResolver(formschema)
    }))
    const { register, handleSubmit,formState, getValues } = form;
    const { errors} = formState;

    const onSubmit = async(data:formValue)=>{
        try {
            const resp = await axios.put(`http://localhost:8080/products/`, {product_name :data.product_name , price:data.price })   
            return(()=>resp.data)
        } catch (error) {
            return(()=>error)
        }
    }

  return (
    <React.Fragment>
        <Modal open = {open} onClose={handleClose}>
        <Paper elevation={4} sx={{ width: 430, margin: "auto", paddingY: 2 }}>
                <Divider>
                    <Chip icon={<LocalMallIcon />} label="Vendor" variant='outlined' color='primary' />
                </Divider>
                <Typography variant='h5' display={"block"} m={"auto"} padding={2}>
                    Fill Details to Add Product
                </Typography>
                <Divider/>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                        <TextField label="Mobile Name" variant='outlined' type='text' {...register("product_name")} helperText={errors.product_name?.message} />
                        <TextField label="$ Price" variant='outlined' type='text' {...register("price")} helperText={errors.price?.message} />
                        <Button type='submit' variant='contained' disabled={!getValues("product_name") || !getValues("price")}>Submit</Button>
                    </Stack>
                </form>
            </Paper>
        </Modal>
    </React.Fragment>
  )
}

export default EditProductPage