import { Button, Chip, Divider, Paper, Stack, TextField, Typography} from '@mui/material'
import React from 'react'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from 'axios';

const schema = yup.object().shape({
    product_name: yup.string().required("Please enter the product name"),
    price: yup.number().required("Enter Price of the product")
});

type formValue = {
    product_name: string,
    price: number
}

const AddProductPage: React.FC = () => {

    const form = useForm<formValue>(({
        defaultValues: {
            product_name: "google pixel",
            price: 100
        },
        resolver: yupResolver(schema),
    }));
    const { register, handleSubmit, formState, getValues } = form;
    const { errors} = formState;
    const onSubmit = async(data: formValue) => {
        console.log(data);
        try {
            const response = await axios.post(`http://localhost:8080/products/`, {"product_name":data.product_name, "price":data.price })
            console.log(response.data)
            alert("Product addedd successfully")  
        } 
        catch (error) {
            return(error)
            alert(`ohh ${error}`)
        }
    }

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default AddProductPage