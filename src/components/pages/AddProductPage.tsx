import { Button, Chip, Divider, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
    const { errors } = formState;

    const onSubmitbutton = async (data: formValue) => {
        try {
            const response = await axios.post(`http://localhost:8080/products/`, { "product_name": data.product_name, "price": data.price })
            console.log(response.data)
            return(
                alert("Success")
            )
        }

        catch (err) {
            console.log(err)
            alert("Already Exists")
        }
    }


    return (
        <React.Fragment>
            <div>
                <Divider>
                    <Chip icon={<AddCircleIcon />} label="Add Product" variant="filled" color='primary' />
                </Divider>
                <Typography variant="h6" align="center" display={"block"} m={"auto"} padding={1}>
                    Add New Product
                </Typography>
                <Divider />
                <form onSubmit={handleSubmit(onSubmitbutton)} noValidate>
                    <Stack spacing={2} width={400} margin={"auto"} marginTop={2}>
                        <TextField label="Mobile Name" size='small' variant='outlined' type='text' {...register("product_name")} helperText={errors.product_name?.message} />
                        <TextField label="$ Price" size='small' variant='outlined' type='text' {...register("price")} helperText={errors.price?.message} />
                        <Button type='submit' variant='contained' disabled={!getValues("product_name") || !getValues("price")}>Submit</Button>
                    </Stack>
                </form>
            </div>
        </React.Fragment>
    )
}

export default AddProductPage